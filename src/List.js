import React from "react";
import Grocery from "./Grocery";

const List = ({ items, name, handleClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <Grocery key={item.id} {...item} handleClick={handleClick} />) }
    </ul>
  </div>
)

export default List;