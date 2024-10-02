import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './ProductCard.css';

export default function ProductCard(props) {
  return (
    <>
      <Card className='prod-card'>
        <div className='product-content'>
          <Card.Img className="card-img" variant="top" src={props.imgSrc} style={{width:'100px',height:'115px'}} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className='prod-info'>
                <span className='product-name'>{props.name}</span>
                <span className='product-price'>{"RD$" + props.price}</span>
            </Card.Text>
          </Card.Body>
        </div>
        <div className='opciones'>
          <Form.Select aria-label="Default select example">
            <option value="1" selected="selected">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
          <Button className="addToCart-btn" variant="success">Comprar</Button>
        </div>
      </Card>
    </>
  );
}