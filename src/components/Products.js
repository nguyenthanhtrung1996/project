import React, { Component, useState } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

import { CartContext } from "../context/Cart";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("https://602c78c930ba720017223021.mockapi.io/api/v1/product").then((res) => {
      this.setState({
        products: res.data
      });
    });
  }
  render() {
    const { products } = this.state;
    return (
      <div>
        <Container>
          <div className="Products">Products</div>
          <div className="search">
            <input />
            <Button color="primary">primary</Button>
          </div>
          <div>
            <Row>
              {products.map((item) => (
                <Col sm="4">
                  <Card>
                    <CardImg top width="100%" src={item.imageURL} />
                    <CardBody>
                      <CardTitle tag="h5">{item.name}</CardTitle>
                      <CardText>{item.decription}</CardText>
                      <CartContext.Consumer>
                        {({ updateCart }) => (
                          <Button onClick={() => updateCart(item)}>
                            Add to Cart
                          </Button>
                        )}
                      </CartContext.Consumer>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Products;
