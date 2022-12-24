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
  Hr,
} from "../styles/CartStyles";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    ModelContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyElement>
            <h1>You have more shopping to do.</h1>
            <HiShoppingCart />
          </EmptyElement>
        )}
        <CartCard>
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <CardModel key={item.Slug}>
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
                  <Hr />
                </CardModel>
              );
            })}
        </CartCard>
      </CartStyle>
    </CartWrapper>
  );
}
