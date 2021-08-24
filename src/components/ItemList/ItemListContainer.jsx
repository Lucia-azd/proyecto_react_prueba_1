import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
import { database } from "../../firebase/firebase";
import Loader from "../Loader/Loader";

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    const { cat } = useParams();

    useEffect(() => {
        setTimeout(() => {
            if(cat){
                database.collection("arrayProducts").where("categorygeneral", "==", cat).get().then((product) => setProductos(product.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })));
            }
            else{
                database.collection("arrayProducts").get().then((product) => setProductos(product.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })));
            }
        }, 1500);
    }, [cat]);

    return productos.length ? (<><ItemList productos = {productos}/></>) : (<Loader/>);
};

export default ItemListContainer;