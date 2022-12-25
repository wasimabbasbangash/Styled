import { ModelContext } from "../lib/Context";
import {
  CartWrapper,
  CartStyle,
  CartCard,
  EmptyElement,
  CartCardImage,
  CartCardDetails,
  Quantity,
  CardModel,
  Checkout,
  MotionCard,
} from "../styles/CartStyles";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";

const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};
const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    ModelContext();
  return (
    <CartWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        onClick={(e) => e.stopPropagation()}
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
      >
        {cartItems.length < 1 && (
          <EmptyElement
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2>You have more shopping to do.</h2>
            <HiShoppingCart />
          </EmptyElement>
        )}
        <CartCard layout variants={cards} initial='hidden' animate='show'>
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <CardModel key={item.Slug} variants={card}>
                  <CartCardImage>
                    <img
                      src={
                        `http://localhost:1337` +
                        item.Image.data[0].attributes.formats.thumbnail.url
                      }
                      alt=''
                    ></img>
                  </CartCardImage>
                  <CartCardDetails>
                    <div>
                      <h3>{item.Title}</h3>
                      <h5>{item.Fee}</h5>
                    </div>
                    <div style={{ display: "-webkit-inline-box" }}>
                      <span>Quantity:</span>
                      <Quantity>
                        <button onClick={() => onRemove(item)}>
                          <AiFillMinusCircle />
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => onAdd(item, 1)}>
                          <AiFillPlusCircle />
                        </button>
                      </Quantity>
                    </div>
                  </CartCardDetails>
                </CardModel>
              );
            })}
          {cartItems.length >= 1 && (
            <Checkout variants={card}>
              <h4>Subtotal: {totalPrice}$</h4>
              <button>Purchase</button>
            </Checkout>
          )}
        </CartCard>
      </CartStyle>
    </CartWrapper>
  );
}
