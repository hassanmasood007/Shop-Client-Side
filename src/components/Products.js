import React from "react";
import styled from "styled-components";

import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
