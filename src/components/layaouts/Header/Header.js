import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../../../assets/logo.png';
import Form from 'react-bootstrap/Form';
import '../layout.css';

function Header({ categoriaSeleccionada, setCategoriaSeleccionada }) {
    return (
        <header className='header'>
            <img src={logo} alt="img" style={{ width: '100px' }} />
            <div className='header__searchbar'>
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title="CATEGORÍAS"
                        id="input-group-dropdown-1"
                        onSelect={(eventKey) => setCategoriaSeleccionada(eventKey)}
                    >
                        <Dropdown.Item eventKey="Todos">Todos</Dropdown.Item>
                        <Dropdown.Item eventKey="Almacén">Almacén</Dropdown.Item>
                        <Dropdown.Item eventKey="Bebidas">Bebidas</Dropdown.Item>
                        <Dropdown.Item eventKey="Lácteos">Lácteos</Dropdown.Item>
                        <Dropdown.Item eventKey="Carnes & Pescados">Carnes & Pescados</Dropdown.Item>
                        <Dropdown.Item eventKey="Frutas & Verduras">Frutas & Verduras</Dropdown.Item>
                        <Dropdown.Item eventKey="Panadería">Panadería</Dropdown.Item>
                        <Dropdown.Item eventKey="Congelados">Congelados</Dropdown.Item>
                        <Dropdown.Item eventKey="Limpieza">Limpieza</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control 
                        eventKey="Lácteos" 
                        aria-label="Text input with dropdown button" 
                        className='input'
                    />
                </InputGroup>
            </div>
            <nav className='nav__header'>
                <div className='nav__phone'>
                    <span>809 123 4567</span>
                    <small>Atención 24/7</small>
                </div>
                <ul className='nav__ul'>
                    <li>
                        <Link to='/'>
                            <IoPersonOutline className='ul__icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='ul__badge'>+9</div>
                            <FiHeart className='ul__icon'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/cart'>
                            <div className='ul__badge'>+10</div>
                            <FiShoppingCart className='ul__icon'/>
                        </Link>
                    </li>
                </ul>
                <div className='nav__cart'>
                    <small>Mi Carrito</small>
                    <span>$2,000.00</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
