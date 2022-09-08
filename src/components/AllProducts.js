import React, { useEffect, useState } from "react";
import { API } from "../util";
import { add_to_cart } from "../actions/";
import { useDispatch } from "react-redux";

// need a button add to cart
const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const fetchList = async () => {
        try {
            const res = await fetch(`${API}/products/all`, {
                method: "GET",
            });
            const res_json = await res.json();
            console.log(res_json);
            setProducts(res_json);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        // fetch all the products when loaded
        fetchList();
    }, []);

    const onAddToCart = (prod) => {
        dispatch(add_to_cart(prod));
    };

    const renderButton = (prod) => {
        // console.log(`${this.props.currentUserId} ${stream.userId}`);
        // ! how to send id of the stream post that user want to edit and delete
        return (
            <div className="right floated content">
                <button
                    className="ui button green"
                    onClick={(e) => {
                        e.preventDefault();
                        onAddToCart(prod);
                    }}
                >
                    Add To Cart
                </button>
            </div>
        );
    };

    const renderList = () => {
        // ? mapping the list
        return products.map((prod) => (
            <div className="item" key={prod._id}>
                {renderButton(prod)}
                <div className="content">
                    <div className="header">{prod.name}</div>
                    <div className="description">{`$${prod.price}`}</div>
                </div>
            </div>
        ));
    };

    return (
        <div className="ui container">
            <div className="ui celled list">{renderList()}</div>
        </div>
    );
};
export default AllProducts;
