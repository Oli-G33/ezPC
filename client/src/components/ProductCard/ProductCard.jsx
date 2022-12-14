import { Button, Card } from 'react-bootstrap';
import Rating from '../Rating';
import { CartState } from '../../context/CartContext';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const {
    state: { cart },
    dispatch
  } = CartState();

  const formatPrice = price =>
    new Intl.NumberFormat('en-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);

  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={product.img}
          alt={product.name}
          className="card-image"
        />
      </Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {formatPrice(product.price)}
          <br />
          Available: {product.inStock}
        </Card.Text>
        <Card.Text>
          <Rating rating={product.rating} />
        </Card.Text>

        {cart.some(p => p._id === product._id) ? (
          <Button
            variant="danger"
            onClick={() =>
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: product
              })
            }
          >
            Remove from Cart
          </Button>
        ) : (
          <span>
            <Button
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: product
                })
              }
              disabled={!product.inStock}
            >
              {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </span>
        )}
      </Card.Body>
    </div>
  );
};

export default ProductCard;
