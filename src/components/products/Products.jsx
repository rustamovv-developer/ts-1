import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductQuery } from "../../context/productApi";

const Products = () => {
  let dispatch = useDispatch();

  const [limit, setLimit] = useState(6);

  const { data, isLoading, error } = useGetProductQuery({ limit });

  let products = data?.products?.map((el) => (
    <div key={el.id} className="products-card">
      <img
        style={{ width: "100%", height: "280px", objectFit: "contain" }}
        src={el.images[0]}
        alt="products1"
        className="products-watch"
      />
      <h2 className="products-title">{el.title}</h2>
      <div className="stars">
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
      </div>
      <div className="disabled-div">
        <del className="disabled-sum">{el.price}</del>
        <h3 className="enebled-sum">$255.00</h3>
      </div>
      <div className="hover">
        <button className="products-shop">
          <i className="fa-solid fa-cart-shopping shopping"></i>
        </button>
        <button className="products-like">
          <i className="fa-solid fa-heart heart"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="products" id="products">
      <div className="center">
        <p className="center-text">Find your favourite smart watch.</p>
        <h2 className="center-title">Our Latest Products</h2>
      </div>
      <div className="products-top">
        <div className="container">
          <div className="products-box">{products}</div>
        </div>
      </div>
      <button
        onClick={() => setLimit((p) => p + 3)}
        href="#"
        className="products-btn"
      >
        View More
      </button>
    </section>
  );
};

export default Products;
