import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                MoneyyApp
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Products
                </Link>
                <Link to="/cart" className="item">
                    Cart
                </Link>
            </div>
        </div>
    );
};
export default Header;
