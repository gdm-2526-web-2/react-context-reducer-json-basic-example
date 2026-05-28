import { useReducer } from "react";
import { Outlet } from "react-router";
import StickyBar from "../components/StickyBar/StickyBar";
import { CartContext, cartReducer } from "../contexts";

const BarLayout = () => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext value={[cartState, cartDispatch]}>
      <div>
        <Outlet />
        <StickyBar />
      </div>
    </CartContext>
  );
};

export default BarLayout;
