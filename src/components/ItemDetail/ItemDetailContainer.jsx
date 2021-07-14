import React, {useState} from "react";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

    const [productos, setProductos] = useState([{
        id: "",
        nombre: '',
        img: '',
        precio: "",
        stock: ""
    }]);

    const arrayDeData = [
        {
            id: 1,
            nombre: 'iPhone 12',
            img: '/img/iphone/iphone-12.jpg',
            precio: 9999,
            stock: 5
        },
        {
            id: 2,
            nombre: 'iPhone 12 Pro',
            img: '/img/iphone/iphone-12-pro.png',
            precio: 9999,
            stock: 3
        },
        {
            id: 3,
            nombre: 'iPhone 12 Pro Max',
            img: '/img/iphone/iphone-12-pro-max.png',
            precio: 9999,
            stock: 7
        },
        {
            id: 4,
            nombre: 'iPhone 12 Mini',
            img: '/img/iphone/iphone-12-mini.jpg',
            precio: 9999,
            stock: 8
        }
    ];

    const getItems = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayDeData);
        }, 2000);
        });
    };

    getItems()
        .then((result) => setProductos(result))
        .catch((error) => console.log(error));

    console.log(productos)
    return <ItemDetail productos = {productos}/>;
};

export default ItemDetailContainer;