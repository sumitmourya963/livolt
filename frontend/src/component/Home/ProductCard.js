import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  //formatter for formatting the price

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("en-IN"); // Using 'en-IN' for Indian number formatting

    return `${formatter.format(price)}`;
  };

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name.substr(0, 40) + "..."}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${formatPrice(product.price)}`}</span>
    </Link>
  );
};

export default ProductCard;
