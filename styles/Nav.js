import { style } from "@mui/system";
import styled from "styled-components";
const { motion } = require("framer-motion");

export const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  /* margin: 1rem 2rem; */
  align-content: space;
  border-bottom: 1px solid #ddd3d3;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;

  h1::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  h1:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  h1::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(213deg 79% 81% / 69%);
    z-index: -1;
    transition: transform 0.3s ease;
  }

  h1 {
    position: relative;
    font-size: 2rem;
  }

  h2 {
    font-weight: bold;
    margin: 0 1rem;
    color: #434343a6;
  }
  h5 {
    color: #434343a6;
    font-style: italic;
    font-family: monospace;
    margin-top: 0.2rem;
    text-overflow: "...";
    /* overflow: hidden; */
  }
`;
export const Quantitity = styled(motion.div)`
  height: 0.8rem !important;
  position: absolute;
  width: 0.8rem;
  background: #fb1c3b;
  font-size: 10px;
  padding: 0.1rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 45%;
  top: 15%;
  /* border: 1px solid black; */
  border-radius: 50%;
`;

export const CartStyle = styled.div`
  font-size: small;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #434343a6;
  margin-top: 0.4rem;
  padding: 0.5rem 1rem;
  svg {
    font-size: 2rem;
  }
`;
export const CartHover = styled.div`
  :hover {
    cursor: pointer;
    color: #14213d;
    scale: 1.2;
  }
`;

export const ProfileAndCart = styled.div`
  display: flex;
  justify-content: space-between;
  color: #e5e5e5;

  svg {
    font-size: 1.2rem;
  }
`;

// export const Animation = styled.div`
//   position: absolute;
//   animation: ripple 5s infinite;
//   border-radius: 100%;
//   border: none;
//   background-color: #eff2f5;
//   box-shadow: inset 10px 10px 20px #f3f3f3, inset -5px -5px 5px #ffffff;
//   transition: 0.33s ease-in all;
//   opacity: 0;
//   @keyframes ripple {
//     0% {
//       width: 20px;
//       height: 20px;
//       opacity: 1;
//     }
//     100% {
//       width: 800px;
//       height: 400px;
//       opacity: 0;
//     }
//   }
// `;
