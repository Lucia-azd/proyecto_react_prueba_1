import React, {useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList'


function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    const arrayDeData = [
        {
            id: 1,
            nombre: 'iPhone 12',
            img: '/img/iphone/iphone-12.jpg',
            precio: 9999,
            stock: 5,
            categoria: 'iPhone'
        },
        {
            id: 2,
            nombre: 'iPhone 12 Pro',
            img: '/img/iphone/iphone-12-pro.png',
            precio: 9999,
            stock: 3,
            categoria: 'iPhone'
        },
        {
            id: 3,
            nombre: 'iPhone 12 Pro Max',
            img: '/img/iphone/iphone-12-pro-max.png',
            precio: 9999,
            stock: 7,
            categoria: 'iPhone'
        },
        {
            id: 4,
            nombre: 'iPhone 12 Mini',
            img: '/img/iphone/iphone-12-mini.jpg',
            precio: 9999,
            stock: 8,
            categoria: 'iPhone'
        },
        {
            id: 5,
            nombre: 'Macbook Air 13.3',
            img: '/img/mac/macbook-air-13-3.jpg',
            precio: "9999",
            stock: 8,
            categoria: 'Mac'
        },
        {
            id: 6,
            nombre: 'Macbook Air 13',
            img: '/img/mac/macbook-air-13.jpg',
            precio: "9999",
            stock: 8,
            categoria: 'Mac'
        },
        {
            id: 7,
            nombre: 'iPad 2019',
            img: '/img/ipad/ipad-air-2019.jpg',
            precio: "9999",
            stock: 8,
            categoria: 'iPad'
        },
        {
            id: 8,
            nombre: 'iPad 2020',
            img: '/img/ipad/ipad-air-2020.jpg',
            precio: "9999",
            stock: 8,
            categoria: 'iPad'
        }
    ];

    const { cat } = useParams();

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    if(cat){
                        const filteredList = arrayDeData.filter(
                            (item) => item.categoria === cat
                        );
                        resolve(filteredList);
                    }else{
                        resolve(arrayDeData); 
                    }
            }, 0);
        });
    };

    getItems()
        .then((result) => setProductos(result))
        .catch((error) => console.log(error)); 

    return <ItemList productos = {productos}/>;
};

export default ItemListContainer;