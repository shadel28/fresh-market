import React from 'react'
import '../layout.css'
import { Link } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import { FiHeart, FiShoppingCart  } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Header() {
  return (
      <header>
        <div className='header__logo'>
          <CiShoppingBasket  className='icon'/>
          <span>Fresh<br/> <small>Market</small></span>
        </div>
        <div className='header__searchbar'>
        <InputGroup className="mb-1">
        <DropdownButton
          variant="outline-secondary"
          title="CATEGORÍAS"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Frutas</Dropdown.Item>
          <Dropdown.Item href="#">Vegetales</Dropdown.Item>
          <Dropdown.Item href="#">Lácteos</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Carnes</Dropdown.Item>
          <Dropdown.Item href="#">Abarrotes</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" className='input'/>
      </InputGroup>
        </div>
        <nav className='nav'>
        <div className='nav__phone'>
          <span>809 123 4567</span>
          <small>Atención 24/7</small>
        </div>
          <ul>
            <li>
              <Link to='/'>
              {/* <div className='ul__badge'>+9</div> */}
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
  )
}

export default Header