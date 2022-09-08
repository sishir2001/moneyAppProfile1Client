import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { delete_from_cart } from "../actions";
// fetch the items and fetch for each item from api
const Cart = (props) => {
    const dispatch = useDispatch();
    const [cartProducts, setCartProducts] = useState({});
    const { cart } = useSelector((state) => state);

    useEffect(() => {
        console.log(cart);
        setCartProducts(cart.items);
    }, [cart.items]);

    const deleteFromCart = (id) => {
        dispatch(delete_from_cart(id));
    };

    const renderButton = (id) => {
        // console.log(`${this.props.currentUserId} ${stream.userId}`);
        // ! how to send id of the stream post that user want to edit and delete
        return (
            <div className="right floated content">
                <button
                    className="ui button red"
                    onClick={(e) => {
                        e.preventDefault();
                        deleteFromCart(id);
                    }}
                >
                    Delete From Cart
                </button>
            </div>
        );
    };

    const renderList = () => {
        // ? mapping the list
        return Object.keys(cartProducts).map((id, idx) => {
            return (
                <div className="item" key={id}>
                    {renderButton(id)}
                    <div className="content">
                        <div className="header">{cartProducts[id].name}</div>
                        <div className="description">{`$${cartProducts[id].price}`}</div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="ui container">
            <div className="ui celled list">{renderList()}</div>
        </div>
    );
};
export default Cart;
