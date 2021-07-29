import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

    const [producto, setProducto] = useState([]);

    const arrayDeData = [
        {
            id: 'iPhone12',
            nombre: 'iPhone 12',
            img: '/img/iphone/iphone-12.jpg',
            precio: 9999,
            stock: 5,
            categoria: 'iPhone'
        },
        {
            id: 'iPhone12Pro',
            nombre: 'iPhone 12 Pro',
            img: '/img/iphone/iphone-12-pro.png',
            precio: 9999,
            stock: 3,
            categoria: 'iPhone'
        },
        {
            id: 'iPhone12ProMax',
            nombre: 'iPhone 12 Pro Max',
            img: '/img/iphone/iphone-12-pro-max.png',
            precio: 9999,
            stock: 7,
            categoria: 'iPhone'
        },
        {
            id: 'iPhone12Mini',
            nombre: 'iPhone 12 Mini',
            img: '/img/iphone/iphone-12-mini.jpg',
            precio: 9999,
            stock: 8,
            categoria: 'iPhone'
        },
        {
            id: 'MacbookAir13.3',
            nombre: 'Macbook Air 13.3',
            img: '/img/mac/macbook-air-13-3.jpg',
            precio: 9999,
            stock: 8,
            categoria: 'Mac'
        },
        {
            id: 'MacbookAir13',
            nombre: 'Macbook Air 13',
            img: '/img/mac/macbook-air-13.jpg',
            precio: 9999,
            stock: 8,
            categoria: 'Mac'
        },
        {
            id: 'iPad2019',
            nombre: 'iPad 2019',
            img: '/img/ipad/ipad-air-2019.jpg',
            precio: 9999,
            stock: 8,
            categoria: 'iPad'
        },
        {
            id: 'iPad2020',
            nombre: 'iPad 2020',
            img: '/img/ipad/ipad-air-2020.jpg',
            precio: 9999,
            stock: 8,
            categoria: 'iPad'
        }
    ];

    const { idParams } = useParams();

    const getItems = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                        resolve(arrayDeData.find(
                            (item) => item.id === idParams));
                    }
            , 0);
        });
    };

    useEffect(() => {
        setProducto([])
        getItems()
        .then((result) => setProducto(result))
    }, [idParams]);


    return <ItemDetail producto = {producto}/>;
};

export default ItemDetailContainer;