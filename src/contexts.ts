import { createContext } from "react";
import type { Dispatch } from "react";

export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
};

export type CartAction =
  | {
      type: "ADD_TO_CART";
      payload: Omit<CartItem, "quantity"> & { quantity?: number };
    }
  | { type: "REMOVE_FROM_CART"; payload: { id: CartItem["id"] } };

export const cartReducer = (
  state: CartItem[],
  action: CartAction,
): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + (action.payload.quantity ?? 1),
              }
            : item,
        );
      }

      return [
        ...state,
        {
          ...action.payload,
          name: action.payload.name ?? "Unknown",
          price: action.payload.price ?? 0,
          quantity: action.payload.quantity ?? 1,
        },
      ];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export type CartContextType = [CartItem[], Dispatch<CartAction>];

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
