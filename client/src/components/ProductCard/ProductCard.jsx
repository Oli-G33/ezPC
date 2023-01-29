// import { Button, Card } from 'react-bootstrap';
import Rating from '../Rating';
import { CartState } from '../../context/CartContext';
import './ProductCard.scss';
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

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
      <Card maxW="sm" variant="filled">
        <CardBody>
          <Image
            src={product.img}
            alt={product.name}
            borderRadius="lg"
            boxSize="250px"
            objectFit="cover"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>
            <Text>{product.description}</Text>
            <Text color="blue.600" fontSize="sm">
              Available: {product.inStock}
            </Text>

            <Text color="blue.600" fontSize="md">
              <Rating rating={product.rating} />
            </Text>

            <Text color="blue.600" fontSize="2xl">
              {formatPrice(product.price)}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {cart.some(p => p._id === product._id) ? (
            <IconButton
              w={28}
              colorScheme="teal"
              aria-label="Remove from Cart"
              icon={<DeleteIcon boxSize={7} />}
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: product
                })
              }
            />
          ) : (
            <span>
              <Button
                variant="solid"
                colorScheme="blue"
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
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
