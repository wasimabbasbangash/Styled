import Link from "next/link";
import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { NavStyle, Title, CartStyle } from "../styles/Nav";
// import { CartStyle } from "../styles/Nav";
import Cart from "./Cart";
import { ModelContext } from "../lib/Context";

function Nav() {
  const { showCart, setShowCart } = ModelContext();

  return (
    <NavStyle>
      <Title>
        <Link href={"/"}>
          <h1>Styled</h1>
        </Link>
        <h2> | </h2>
        <h3>The Brand Of Your Choice.</h3>
      </Title>
      {/* <Animation> </Animation> */}
      <CartStyle onClick={() => setShowCart(true)}>
        Cart <HiShoppingBag></HiShoppingBag>
      </CartStyle>
      {showCart && <Cart />}
    </NavStyle>
  );
}

export default Nav;
