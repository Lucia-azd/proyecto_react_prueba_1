import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { database } from "../../firebase/firebase";
import "./InfoOrders.css"

function InfoOrders() {

    const [idCompra, setIdCompra] = useState('');
    const [order, setOrder] = useState([]);

    const { sectionOrders } = useParams();

    /* se guarda el id que coloco el usuario */
    const handleSubmit = (event) => {

        event.preventDefault();
        setIdCompra(event.target.idcompra.value)

        event.target.reset()
    };

    /* se trae la orden de la coleccion que coincida con el id del usuario y la guardamos en el estado order */
    const getOrder = () => {
        database.collection("orders").get().then((product) => setOrder({...product.docs.find((item) => item.id === idCompra).data(), id: idCompra}))
        .catch((error) => {
            alert("ERROR: " + error);
        })
        setIdCompra('') 
    };

    useEffect(() => {
        if(idCompra){
            getOrder()
        }
    });

    return <>{sectionOrders === 'Orders' ? 
    (order.length === 0 ? (<div>
        <form onSubmit={handleSubmit} className="form">
            <h2>Consultar Compras</h2>
            <label>ID: </label>
            <input placeholder="ID compra" type="text" id="idcompra" required/>
            <button type="submit" >Consultar</button>
        </form>
    </div>) : (<section className="info-order"><h1>Orden de compra</h1> 
    <div className="datos-generales"> <div className="datos-personales"><h2>Datos personales</h2> <p><span>Nombre:</span> {order.buyer.name}</p> <p><span>Apellido:</span> {order.buyer.surname}</p></div> 
    <div className="datos-orden"><h2>Datos Orden</h2>{order.items.map((item) => <div className="datos"><img src={item.img} alt={item.name} /> <p><span>Producto:</span> {item.name}</p> <p><span>Cantidad:</span> {item.cantidad}</p> <p><span>Precio:</span> ${item.price}</p></div>)}</div>
    </div>
    <div className="container-total"> <Link to="/"><button>Volver a inicio</button></Link> <h2 className="total"><span>Total:</span> ${order.total}</h2></div>
    </section>)
    ) : (<></>)
}</>;
};

export default InfoOrders;