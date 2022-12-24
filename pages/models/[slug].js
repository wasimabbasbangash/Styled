import React, { useContext } from "react";
import { useRouter } from "next/router";
// import react icons
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
// importing styles
import {
  DetailPage,
  ProductInfo,
  QuantityButtons,
  CartButton,
  Price,
} from "../../styles/ModelDetails";

// import Context
// import { UserContext } from "../../lib/Context";
import { ModelContext } from "../../lib/Context";

function ProductDetails() {
  // get context
  const { qty, increaseQty, decreaseQty, onAdd } = ModelContext();
  //fetch slug
  const router = useRouter();
  // console.log("slug", router.query.slug);
  // fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: router.query.slug },
  });

  const { data, fetching, error } = results;

  //check if data is coming in
  if (fetching) return <p>Loading...</p>;

  if (error) return <p> ohh no.... {error.message}</p>;

  const { Title, Image, Fee, Description, Country } =
    data.models.data[0].attributes;
  // console.log(
  //   `http://localhost:1337` + Image.data[0].attributes.formats.large.url
  // );
  return (
    <DetailPage>
      <img
        src={
          `http://localhost:1337` + Image.data[0].attributes.formats.large.url
        }
      />
      <ProductInfo>
        <h1>{Title}</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Description</p>
          <Price>{Fee} €</Price>
        </div>
        <p style={{ fontStyle: "italic" }}>{Description}</p>
        <QuantityButtons>
          <h3>Description:</h3>
          {/* <span style={{ marginRight: "1rem" }}>{qty}</span> */}
          <div className='quantitity-increment'>
            <AiFillMinusCircle
              onClick={decreaseQty}
              style={{ cursor: "pointer", marginLeft: "1rem" }}
            />
            <p style={{ margin: ".5rem" }}> {qty}</p>
            <AiFillPlusCircle
              onClick={increaseQty}
              style={{ cursor: "pointer" }}
            />
          </div>
        </QuantityButtons>
        <CartButton onClick={() => onAdd(data.models.data[0].attributes, qty)}>
          Add to cart
        </CartButton>
      </ProductInfo>
    </DetailPage>
  );
}

export default ProductDetails;
