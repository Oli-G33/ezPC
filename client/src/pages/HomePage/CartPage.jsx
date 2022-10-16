import React, { useEffect, useState } from 'react';
import { CartState } from '../../context/CartContext';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from '../../components/Rating';
import { AiFillDelete } from 'react-icons/ai';

const CartPage = () => {
  const {
    state: { cart },
    dispatch
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      CartPage
      <div className="productContainer">
        <ListGroup>
          {cart.map(product => (
            <ListGroup.Item key={product._id}>
              <Row>
                <Image
                  src={product.img}
                  alt={product.name}
                  roundedCircle
                  style={{ width: 75, height: 50 }}
                />
                <Col></Col>
                <Col md={2}>{product.name}</Col>
                <Col md={2}>{product.price}</Col>
                <Col md={2}>
                  <Rating rating={product.rating} />
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={product.qty}
                    onChange={e =>
                      dispatch({
                        type: 'CHANGE_CART_QTY',
                        payload: { _id: product._id, qty: e.target.value }
                      })
                    }
                  >
                    {[...Array(product.inStock).keys()].map(x => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    variant="light"
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FROM_CART', payload: product })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Items: {cart.length}</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: €{total}</span>
      </div>
    </div>
  );
};

export default CartPage;