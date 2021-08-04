import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { database } from "../../firebase/firebase";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {

    const [producto, setProducto] = useState([]);

    const { idParams } = useParams();

    const getArrayProducts = () => {
        return database.collection("arrayProducts")
    };

    useEffect(() => {
        getArrayProducts().get().then((product) => setProducto(product.docs.find((item) => item.id === idParams).data()))
    }, [idParams]);

    console.log('detalles: ', producto);

    return producto ? (<ItemDetail producto = {producto}/>) : (<Loader/>)
};

export default ItemDetailContainer;