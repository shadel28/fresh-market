// Esta es la pagina de carrito
import Header from "../../components/layaouts/Header/Header";
import React from "react"
import CardProduct from "../../components/CardProduct/CardProduct";
import "./customer.css"
import { MdShoppingBag } from "react-icons/md";
import { TbArrowNarrowLeft } from "react-icons/tb";
import Form from 'react-bootstrap/Form';
import { IoIosLock } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup';
import Footer from "../../components/layaouts/Footer/Footer";
import { Link } from "react-router-dom";


function Cart() {
  return (
    <>
        <Header/>
        <section className="cart">
          <div className="cart_row">
            <div className="cart__info">
              <div>
              <MdShoppingBag className="cart__info--icon"/>
              <h1>Mi Carrito</h1>
              </div> 
              <span>3 Productos</span>
            </div>
            <div className="cart__products">
              <div className="cart__products--titles">
               
                <div className="detalle">
                <span>Detalle del Producto</span>
                </div>
                <div className="info">
                <span>Precio</span>
                <span>Cantidad</span>
               
                <span>Total</span>
                </div>
              </div>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
            </div>
            <button className="shop-btn"><Link to='../products'><TbArrowNarrowLeft className="shop-btn__icon"/>Continuar Comprando</Link></button>
          </div>
          <div className="cart_row">
            <div className="payment">
              <span>Detalles de pago</span>
              <small>Completa tu compra validando tus detalles de pago.</small>
            </div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form__label">Correo</Form.Label>
              <Form.Control type="email" size="sm"/>

              <Form.Label className="form__label">Detalle de tarjeta</Form.Label>
              <Form.Control type="text" size="sm"/>

              <Form.Label className="form__label">Nombre de la tarjeta</Form.Label>
              <Form.Control type="text" size="sm"/>

              <Form.Label className="form__label">Direccion de envio</Form.Label>
              <Form.Select size="sm">
              <option>Santo Domingo</option>
              <option>Valverde</option>
              <option>La Vega</option>
              </Form.Select>
              <InputGroup className="mb-3">
                <Form.Control aria-label="First name"  size="sm" placeholder="No."/>
                <Form.Control aria-label="Last name"  size="sm" placeholder="Direccion"/>
              </InputGroup>

              <div className="totals">
                  <div className="totals_row">
                  <span>Subtotal</span>
                  <span>$70.00</span>
                  </div>
                  <div className="totals_row">
                  <span>ITBIS</span>
                  <span>$12.6</span>
                  </div>
                  <div className="totals_row">
                  <span>Total</span>
                  <span>$82.6</span>
                  </div>
              </div>
            </Form.Group>
            </Form>
            <button style={{width: '100%'}}>Pagar $82.6</button>
            <Form.Text id="pagos" muted>
              <IoIosLock />
              Los pagos son securos y encriptados
            </Form.Text>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Cart