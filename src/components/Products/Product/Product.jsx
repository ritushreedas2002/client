import React from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ data, id }) => {
  const imageUrl =process.env.REACT_APP_STRIPE_APP_DEV_URL + data.img?.data[0]?.attributes?.url;
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
