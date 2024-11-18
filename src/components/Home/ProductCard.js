import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./ProductCard.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Alert } from "@mui/material";

export default function ProductCard(props) {
  const { addProductToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    if (quantity <= 0) {
      setShowAlert(true);
      return; // Detiene la ejecución para que no se agregue el producto si la cantidad es 0
    }
    setShowAlert(false);
    const product = {
      id_product: props.id_product,
      imgSrc: props.imgSrc,
      name: props.name,
      price: props.price,
      quantity: quantity,
      unidad_medida: props.unidad_medida,
    };
    addProductToCart(product);
  };

  return (
    <>
      <Card className="prod-card">
        {showAlert && (
          <Alert severity="error" onClose={() => setShowAlert(false)}>
            La cantidad debe ser mayor a cero.
          </Alert>
        )}
        <div className="product-content">
          <Card.Img
            className="card-img"
            variant="top"
            src={props.imgSrc}
            style={{ width: "100px" }}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="prod-info">
              <span className="product-name">{props.name}</span>
              <span className="product-price">
                {"RD$" + props.price} / {props.unidad_medida}
              </span>
            </Card.Text>
          </Card.Body>
        </div>
        <div className="opciones">
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Button
            className="addToCart-btn"
            variant="success"
            onClick={handleAddToCart}
          >
            Comprar
          </Button>
        </div>
      </Card>
    </>
  );
}
