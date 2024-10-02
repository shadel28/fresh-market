import Card from 'react-bootstrap/Card';
import "./cardproduct.css"
import manzana from './manzana.jpg';
import { IoClose } from "react-icons/io5";

function CardProduct() {
  return (
    <Card className='card_product'>
      <Card.Img variant="top" src={manzana}className='card__img'/>
      <Card.Body className='card__body'>
        <div className='card__body--desc'>
          <span className='title'>Manzana Roja</span>
          <span>
            Medida: 1 lb <br />
            Precio Medida: $70/lb
          </span>
        </div>
        <span>$70.00</span>
        <input type='number'/>
        <span>$70.00</span>
        <button className='card__close'><IoClose/></button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;