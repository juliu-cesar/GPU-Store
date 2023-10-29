import { TAllCards } from "@/src/components/TAllCards";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

export type cartType = {
  ProductList: TAllCards | [];
  setProductList: Dispatch<SetStateAction<TAllCards | []>>;
};

export const CartContext = createContext<cartType>({
  ProductList: [],
  setProductList: () => {
    alert("setProductList ainda não configurado.");
  },
});
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ProductList, setProductList] = useState<TAllCards | []>([]);

  return (
    <CartContext.Provider
      value={{
        ProductList: ProductList,
        setProductList: setProductList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
