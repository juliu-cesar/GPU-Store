import { TGpuCard } from "@/src/components/TGpuCard";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type cartType = {
  ProductList: TGpuCard | [];
  setProductList: Dispatch<SetStateAction<TGpuCard | []>>;
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
  const [ProductList, setProductList] = useState<TGpuCard | []>([]);

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
