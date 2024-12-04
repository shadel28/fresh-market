import { React, useContext } from "react";
import "../layout.css";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import logo from "../../../assets/logo.png";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { productCount } = useContext(CartContext);
  return (
    <header className="header">
      <img src={logo} alt="img" style={{ width: "100px" }} />

      <nav className="nav__header">
        <div className="nav__phone">
          <span>809 123 4567</span>
          <small>Atención 24/7</small>
        </div>
        <ul className="nav__ul">
          <li>
            <Link to="/home">
              <IoPersonOutline className="ul__icon" />
            </Link>
          </li>
          <li>
            <Link to="/home">
              <div className="ul__badge">+9</div>
              <FiHeart className="ul__icon" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="ul__badge">
                {productCount ? productCount : ""}
              </div>
              <FiShoppingCart className="ul__icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
