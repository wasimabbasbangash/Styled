import React from "react";
import {ModelStyle} from '../styles/Model';

interface model{
  Name: String,
  Age: Number,
  Fee: Number,
  Country: String,
  Image: String
}

function Model({model}:any) {
  const {Name,Age,Fee,Country,Photo} = model.attributes;
  return <ModelStyle>
    <div className="model-image"> <img src={Photo.data.attributes.formats.large.url} alt={`${Name}'s image not found.`}></img></div>
    <h2>{Name}</h2>
    <p>{Fee}</p>
    <p>{Age}</p>
    <p>{Country}</p>
  </ModelStyle>;
}

export default Model;
