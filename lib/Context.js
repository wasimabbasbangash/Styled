import { createContext, useState, useContext } from "react";

import React from "react";

const UserContext = createContext();

export const Context = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //   add products to the cart
  const addProductsToCart = (product, quantity) => {
    setTotalPrice((oldPrice) => oldPrice + product.Fee * quantity);
    console.log(totalPrice);
    console.log(product);
    // check if the product already exist in the cart
    const exist = cart.find((item) => item.slug === product.slug);
    console.log(exist);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: quantity }]);
    }

    console.log(cart);
  };

  //   increase product quantity
  const increaseQty = () => {
    setQuantity((previousValue) => previousValue + 1);
  };
  //   decrease product quantity
  const decreaseQty = () => {
    let decrease;
    if (quantity === 0) {
      decrease = 0;
      alert("Quantity can not be less than 0.");
    } else {
      decrease = quantity - 1;
    }

    setQuantity(decrease);
  };

  return (
    <UserContext.Provider
      value={{ quantity, increaseQty, decreaseQty, addProductsToCart, cart }}
    >
      {children}
    </UserContext.Provider>
  );
};

// z

export const ModelContext = () => useContext(UserContext);
