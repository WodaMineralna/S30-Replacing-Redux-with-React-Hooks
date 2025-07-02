import { createContext, useState } from "react";
// import { toggleFav } from "../store/actions/products";

export const ProductsContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

export default function ProductsContextProvider({ children }) {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId) => {
    setProductsList((currProdList) => {
      const prodIndex = currProdList.findIndex((p) => p.id === productId);
      const newFavStatus = !currProdList[prodIndex].isFavorite;
      const updatedProducts = [...currProdList];
      updatedProducts[prodIndex] = {
        ...currProdList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  const ctxValue = {
    products: productsList,
    toggleFav: toggleFavorite,
  };

  return (
    <ProductsContext.Provider value={ctxValue}>
      {children}
    </ProductsContext.Provider>
  );
}
