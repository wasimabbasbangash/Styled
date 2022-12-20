import React from "react";
import Link from "next/link";
import {ModelStyle} from '../styles/Model';

interface model{
  Name: String,
  Age: Number,
  Fee: Number,
  Country: String,
  Image: String
}

function Model({model}:any) {
  const {Name,Age,Fee,Country,Slug,Image} = model.attributes;
  const image = Image.data[0].attributes.formats? Image.data[0].attributes.formats.small.url:'';
  console.log("image",image)
  return <ModelStyle>
    <Link href={`/models/${Slug}`}>
    <div className="model-image"> <img src={`http://localhost:1337${image}`} alt={`${Name}'s image not found.`}></img></div>
    </Link>
    <h2>{Name}</h2>
    {/* <p>{Fee}</p>
    <p>{Age}</p>
    <p>{Country}</p> */}
  </ModelStyle>;
}

export default Model;
