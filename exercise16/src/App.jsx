import React, { useState } from "react";
import CartContext from "./CartContext";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummery";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="Widget" price={19.99} />
      <ProductItem itemId={2} itemName="Gadget" price={29.99} />
      <CartSummary />
    </CartContext.Provider>
  );
};

export default App;
