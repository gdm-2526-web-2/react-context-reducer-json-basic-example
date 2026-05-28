import "./StickyBar.css";
import { useContext } from "react";
import { CartContext } from "../../contexts";
import type { CartContextType } from "../../contexts";

const StickyBar = () => {
  const [cartState] = useContext(CartContext) as CartContextType;
  const totalItems = cartState.reduce((acc, item) => acc + item.quantity, 0);

  return <aside className="bar">Items in cart: {totalItems}</aside>;
};

export default StickyBar;
