import { useRouter } from "next/router";
import React from "react";
import {
  SuccessContainer,
  InsideContainer,
  ProductDetails,
} from "../styles/Success";

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

function success({ order }) {
  const route = useRouter();
  return (
    <SuccessContainer>
      <InsideContainer>
        <h1>Thank you for your purchase!</h1>
        <h2>A confirmation email has been sent to</h2>
        <h2>{order.customer_details.email}</h2>
        <div className='address'>
          <h3>Address:</h3>
          <div>
            {Object.entries(order.customer_details.address).map(
              ([key, value]) => (
                <p key={key}>
                  <span>{key}:</span> {value}
                </p>
              )
            )}
          </div>
        </div>
        <div className='product'>
          <h3>Products</h3>
          <div>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <ProductDetails>
                  <span>Product:</span> <p>{item.description}</p>
                </ProductDetails>
                <ProductDetails>
                  <span>Quantity:</span>
                  <p>{item.quantity}</p>
                </ProductDetails>
                <ProductDetails>
                  <span>Amount:</span>
                  <p>{item.price.unit_amount}</p>
                </ProductDetails>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => Router.push("/")}>Continue Shopping</button>
      </InsideContainer>
      <img src='/success-page-flower.png'></img>
    </SuccessContainer>
  );
}

export default success;
