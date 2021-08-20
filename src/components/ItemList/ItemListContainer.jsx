import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
import { database } from "../../firebase/firebase";
import Loader from "../Loader/Loader";
import FilterProductButtons from "./FilterProductButtons";


function ItemListContainer() {
   /*  const [buttonsList, setButtonsList] = useState([]);

    //database.collection("arrayProducts").get().then((product) => product.docs.map((doc) => addButtons(doc.data().categoryid)))

    useEffect(() => {
        database.collection("arrayProducts").get().then((product) => addButtons(product.docs.map((doc) => {
                return doc.data().categoryid})));
        }, []);

    const isInList = (category) => {
        if(buttonsList.find((buttonCategory) => buttonCategory === category)){
            return true
        }
        return false
    }

    const addButtons = (category) => {
        if(!(isInList(category))){
            setButtonsList([...buttonsList, category])
        }
    }

    console.log(buttonsList); */

    const [productos, setProductos] = useState([]);
    const [catId, setCatId] = useState([]);

    const { cat } = useParams();

    const getArrayProducts = () => {

        if(cat){
            /* let categorygeneral = database.collection("arrayProducts").where("categorygeneral", "==", cat)
            let categoryId = database.collection("arrayProducts").where("categoryid", "==", cat)
            
            return categorygeneral ? (categorygeneral) : (categoryId) */       
            return database.collection("arrayProducts").where("categorygeneral", "==", cat) /* || database.collection("arrayProducts").where("categoryid", "==", cat) */
        }/* else if(catId.length > 0){
            console.log(catId.find((category) => category == cat));
            let categoryId = catId.find((category) => category == cat)
            return database.collection("arrayProducts").where("categoryid", "==", categoryId) } */
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
    }, [cat]);

    console.log("cat id" , catId);

    return productos.length ? (<>{/* <FilterProductButtons/> */} <ItemList productos = {productos}/></>) : (<Loader/>);
};

export default ItemListContainer;