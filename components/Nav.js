import Link from "next/link";
import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import {
  NavStyle,
  Title,
  CartStyle,
  Quantitity,
  ProfileAndCart,
} from "../styles/Nav";
import Cart from "./Cart";
import { ModelContext } from "../lib/Context";
import User from "./User";
// import { useUser } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
const { AnimatePresence, motion } = require("framer-motion");

// const AnimatePresence = require("framer-motion");

function Nav() {
  const { showCart, setShowCart, totalQuantities } = ModelContext();
  const { user, error, isLoading } = useUser();
  console.log(user);
  return (
    <NavStyle>
      <Title style={{ display: "flex", alignItems: "center" }}>
        <>
          <Link href={"/"}>
            <h1>Styled</h1>
          </Link>
        </>
        <>
          <h2> | </h2>
          <h3>The Brand Of Your Choice.</h3>
        </>
      </Title>
      {/* <Animation> </Animation> */}
      <ProfileAndCart>
        <User />
        <div
          onClick={() => setShowCart(true)}
          style={{ position: "relative", display: "flex" }}
        >
          {totalQuantities > 0 && (
            <Quantitity animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </Quantitity>
          )}
          <CartStyle>
            <HiShoppingBag></HiShoppingBag>
            <p>Cart</p>
          </CartStyle>
        </div>
      </ProfileAndCart>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyle>
  );
}

export default Nav;
