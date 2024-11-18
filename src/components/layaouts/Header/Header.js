import { React, useContext } from "react";
import "../layout.css";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../../../assets/logo.png";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { productCount, products } = useContext(CartContext);
  return (
    <header className="header">
      <img src={logo} alt="img" style={{ width: "100px" }} />
      <div className="header__searchbar">
        <InputGroup className="mb-1">
          <DropdownButton
            variant="outline-secondary"
            title="CATEGORÍAS"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Bebidas</Dropdown.Item>
            <Dropdown.Item href="#">Lácteos</Dropdown.Item>
            <Dropdown.Item href="#">Carnes & pescados</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Frutas & verduras</Dropdown.Item>
            <Dropdown.Item href="#">Panadería</Dropdown.Item>
            <Dropdown.Item href="#">Congelados</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Almacén</Dropdown.Item>
            <Dropdown.Item href="#">Limpieza</Dropdown.Item>
          </DropdownButton>
          <Form.Control
            aria-label="Text input with dropdown button"
            className="input"
          />
        </InputGroup>
      </div>
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
        <div className="nav__cart">
          <small>Mi Carrito</small>
          <span>$2,000.00</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
