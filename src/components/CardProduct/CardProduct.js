import Card from "react-bootstrap/Card";
import "./cardproduct.css";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function CardProduct() {
  const { products, deleteProductFromCart, updateProductQuantity } =
    useContext(CartContext);

  const handleQuantityChange = (index, newQuantity) => {
    updateProductQuantity(index, newQuantity);
  };

  return (
    <>
      {products.map((product, index) => (
        <Card key={index} className="card_product">
          <Card.Img variant="top" src={product.imgSrc} className="card__img" />
          <Card.Body className="card__body">
            <div className="card__body--desc">
              <span className="title">{product.name}</span>
              <span>Precio: RD${product.price} / lb</span>
            </div>
            <div className="card__body--col">
              <span>RD${product.price}</span>
              <input
                type="number"
                min="0"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              />
              <span>RD${product.price * product.quantity}</span>
              <button
                className="card__close"
                onClick={() => deleteProductFromCart(index)}
              >
                <IoClose />
              </button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardProduct;
