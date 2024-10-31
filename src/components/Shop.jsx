import { useEffect } from "react";
import { useState } from "react";

import { GoodList } from "./GoodsList.jsx";
import { Cart } from "./Cart.jsx";

import { Preloader } from "./Preloader.jsx";

import { BasketList } from "./BasketList.jsx";
import { Alert } from "./Alert.jsx";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.title);
    };
    const removeFromBasket = (itemID) => {
        const newOrder = order.filter((el) => el.id !== itemID);

        setOrder(newOrder);
    };
    const decQuantity = (itemID) => {
        const newOrder = order.map((el) => {
            if (itemID === el.id) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const incQuantity = (itemID) => {
        const newOrder = order.map((el) => {
            if (itemID === el.id) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    useEffect(function getGoods() {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => response.json())
            .then((data) => {
                data && setGoods(data);
                setLoading(false);
            });
    }, []);

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };
    const closeAlert = () => {
        setAlertName("");
    };

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    decQuantity={decQuantity}
                    incQuantity={incQuantity}
                />
            )}
            {alertName && <Alert title={alertName} closeAlert={closeAlert} />}
        </main>
    );
}

export { Shop };
