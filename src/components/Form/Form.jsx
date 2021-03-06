import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import 'firebase/firestore';
import { database } from "../../firebase/firebase";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import "./Form.css"

const Form = () => {

    const { section } = useParams();
    const {cart, totalCart, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(0);
    const [email, setEmail] = useState(0);
    const [name, setName] = useState(0);

    const handleSubmit = (event) => {

    event.preventDefault();
    setEmail(event.target.email.value)
    setName(event.target.name.value)

    /* se guardan los datos del usuario */
    const userData = {
        name: event.target.name.value,
        surname: event.target.surname.value,
        phone: event.target.phone.value,
        email: event.target.email.value
    };

    /* se genera la orden */
    const newOrder = {
        buyer: userData,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalCart()
    };

    /* se llama a la coleccion de firebase */
    const orders = database.collection("orders");

    /* se sube la orden a nuestra base de datos */
    orders
    .add(newOrder)
    .then((response) => {
        setOrderId(response.id);
    })
    .catch((error) => {
        alert("ERROR: " + error);
    });

    /* se traen los productos que el usuario va a comprar de la coleccion */
    const itemsToCheck = database.collection("arrayProducts").where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        cart.map((item) => item.id)
    );

    /* Se trae la data de los productos y se verifica si tienen stock, si lo tienen se guarda en el batch la modificacion para restarle stock al producto (y solo se va a ejecutar si hay stock de todos los productos deseados) caso contrario se lo guarda en un array de items sin stock */
    itemsToCheck.get().then((query) => {
        const batch = database.batch();
        
        const outOfStockItems = []; 

        query.docs.forEach((doc, index) => {
    
            if (doc.data().stock >= newOrder.items[index].cantidad) {
                batch.update(doc.ref, {
                stock: doc.data().stock - newOrder.items[index].cantidad,
                });
            } else {
                outOfStockItems.push({ ...doc.data(), id: doc.id });
            }
        });

        /* si no hay items sin stock se ejecuta el batch caso contrario se avisa al usuario la falta de stock */
        if (outOfStockItems.length === 0) {
            batch.commit().then(() => {
            clearCart();
            });
        } else {
            alert("Parece que alg??n producto seleccionado no tiene suficiente stock para realizar la compra :( , por favor verifica el stock disponible de cada producto, Gracias!");
        }
        });

        
    };

    return (
        <>
        {section === 'Form' ? 
            (cart.length > 0 ? (<div>
                <form onSubmit={handleSubmit} className="form">
                    <h2>Finalizar Compra</h2>
                    <label>Nombre: </label>
                    <input placeholder="Nombre" type="text" id="name" required/>
                    <label>Apellido: </label>
                    <input placeholder="Apellido" type="text" id="surname" required/>
                    <label>Tel??fono: </label>
                    <input placeholder="Tel??fono" type="tel" id="phone" />
                    <label>E-mail: </label>
                    <input placeholder="nombre@ejemplo.com" type="email" id="email" required/>
                    <button type="submit" >COMPRAR</button>
                </form>
            </div>) : (
                        <div className="contenedor-compra">
                            <h2>??{name} YA CASI ES TUYO!</h2>
                            <p><span>Enviamos un mail con los pasos a seguir al correo:</span> {email}</p>
                            <p><span>T?? ID de compra (gurdalo, con el podras consultar toda la info de tu compra!):</span> {orderId}</p>
                            <p><span>Gracias por elegirnos!</span></p>
                            <p className="firma">iStore</p>
                            <div className="modal-cerrar"><Link to="/">Volver a inicio</Link></div>
                        </div>
                        )
            ) : (<></>)
        }
        </>
    );
};
export default Form;