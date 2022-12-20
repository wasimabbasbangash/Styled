import Link from "next/link";
import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { NavStyle, Title, Cart } from "../styles/Nav";
function Nav() {
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
      <Cart>
        Cart <HiShoppingBag></HiShoppingBag>
      </Cart>
    </NavStyle>
  );
}

export default Nav;
