import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { CartContext } from "../contexts";
import type { CartContextType } from "../contexts";
import type { ItemType } from "../types";

const Detail = () => {
  const category = useLoaderData();
  const [, cartDispatch] = useContext(CartContext) as CartContextType;

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>

      {category.products.map((item: ItemType) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button
            onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Detail;
