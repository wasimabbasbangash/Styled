import { createContext, useState, useContext } from "react";

import React from "react";

const UserContext = createContext();

export const Context = ({ children }) => {
  const [qty, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantitites] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  //   add models to the cart
  const onAdd = (model, quantity) => {
    //Total Price
    setTotalPrice((prevTotalPrice) => prevTotalPrice + model.price * quantity);
    //Increase total qty
    setTotalQuantitites(
      (prevTotalQuantities) => prevTotalQuantities + quantity
    );
    //Check if model is in the cart
    const exist = cartItems.find((item) => item.Slug === model.Slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) => {
          return item.Slug === model.Slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item;
        })
      );
    } else {
      setCartItems([...cartItems, { ...model, quantity: quantity }]);
    }
  };

  //Remove model
  const onRemove = (model) => {
    //Set Total Price
    setTotalPrice((prevTotalPrice) => prevTotalPrice - model.price);

    //Remove from total quantities
    setTotalQuantitites((prevTotalQuantities) => prevTotalQuantities - 1);

    //Check if model exists
    const exist = cartItems.find((item) => item.Slug === model.Slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.Slug !== model.Slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.Slug === model.Slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  //   increase model qty
  const increaseQty = () => {
    setQuantity((previousValue) => previousValue + 1);
  };
  //   decrease model qty
  const decreaseQty = () => {
    let decrease;
    if (qty === 1) {
      decrease = 1;
      alert("Quantity can not be less than 1.");
    } else {
      decrease = qty - 1;
    }

    setQuantity(decrease);
  };

  return (
    <UserContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
        cartItems,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// z

export const ModelContext = () => useContext(UserContext);
