import styled from "styled-components";

const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 101;
  display: flex;
  justify-content: flex-end;
  /* background: red; */
  /* display: none; */
`;

export const CartStyle = styled(motion.div)`
  background: white;
  width: 30%;
  position: relative;
  overflow-y: scroll;
`;

export const EmptyElement = styled(motion.div)`
  display: flex;
  color: #535353;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translate(0, -5%);
  svg {
    font-size: 6rem;
    color: #535353;
  }
`;

export const CartCard = styled(motion.div)`
  display: flex;
  width: 95%;
  padding: 1rem 3rem;
  flex-direction: column;
  background: white;
  justify-content: space-between;
  border-radius: 1rem;
  margin: 1.5rem;
  box-shadow: rgb(88 80 80 / 10%) 0px 20px 25px -5px,
    rgb(56 56 56 / 4%) 0px 10px 10px -5px;
`;

export const CardModel = styled(motion.div)`
  width: 95%;
  padding: 1rem 1rem;
  /* border-radius: 1rem; */
  border-bottom: 1px solid #8080806b;
  /* background-color: white; */
  /* background: #white; */

  display: flex;
  justify-content: space-between;
`;

export const CartCardImage = styled(motion.div)`
  width: 20% !important;
`;

export const CartCardDetails = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Quantity = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 35%;
  margin-left: 0.5rem;

  button {
    border: none;
    background: transparent;
    font-size: 1.2rem;
    margin: 0px 0.7rem;
  }
`;

export const Hr = styled(motion.div)`
  display: block;
  height: 1px;
  border: 1px solid red;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
`;

export const Checkout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  /* margin: auto; */
  color: #535353;

  button {
    background-color: #535353;
    color: white;
    border: none;
    padding: 0.5rem;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export const MotionCard = styled(motion.div)``;
