import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          props.cat
            ? `http://localhost:5000/api/products/?category=${props.cat}`
            : "http://localhost:5000/api/products/"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [props.cat]);

  useEffect(() => {
    props.cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(props.filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, props.cat, props.filters]);

  useEffect(() => {
    if (props.sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (props.sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (props.sort === "desc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [props.sort]);

  return (
    <Container>
      {props.cat
        ? filterProducts.map((product) => (
            <Product product={product} key={product._id}></Product>
          ))
        : products
            .slice(0, 10)
            .map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
    </Container>
  );
};

export default Products;
