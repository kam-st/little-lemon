import React from "react";

function Card({ dish }) {
  return (
    <div>
      <img src={dish.image} alt={dish.name} height={100} />
      <h2>{dish.name}</h2>
      <h2>{dish.price}</h2>
      <p>{dish.description}</p>
      <h3>Order a delivery</h3>
    </div>
  );
}

export default Card;
