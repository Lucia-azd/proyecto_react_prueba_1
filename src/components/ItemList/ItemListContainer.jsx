import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
import { database } from "../../firebase/firebase";
import Loader from "../Loader/Loader";

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    const { cat } = useParams();

    const getArrayProducts = () => {
        if(cat){       
            return database.collection("arrayProducts").where("categorygeneral", "==", cat)
        }
        else{
            return database.collection("arrayProducts")
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getArrayProducts().get().then((product) => setProductos(product.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            })));
        }, 1500);
    });

    return productos.length ? (<><ItemList productos = {productos}/></>) : (<Loader/>);
};

export default ItemListContainer;