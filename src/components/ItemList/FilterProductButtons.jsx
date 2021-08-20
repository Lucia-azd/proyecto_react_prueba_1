import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { database } from "../../firebase/firebase";

const FilterProductButtons = ( ) => {
    /* const [buttonsList, setButtonsList] = useState([]); */
    const [categoryList, setCategoryList] = useState([]);
    const { cat } = useParams();

    useEffect(() => {
        database.collection("arrayProducts").where("categorygeneral", "==", cat).get().then((product) => setCategoryList(product.docs.map((doc) => {
            return doc.data().categoryid
        })))
    }, [cat]);

    let categories = categoryList.filter((item,index)=>{
        return categoryList.indexOf(item) === index;
    })

    console.log(categories);

    //setCatId(categories.map((category) => {return category}))

    /* console.log('hola' , [...categories]);

    setCatId(categories) */

    console.log(categoryList);
    return <>{categories.map((category) => (<Link to={`/productos/${category}`}><button>{category}</button></Link>))}</>
};

export default FilterProductButtons