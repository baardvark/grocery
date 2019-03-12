import React from "react";

const Grocery = ({ id, name, complete, handleClick }) => (
  <li
    style={ complete ? { ...styles.complete } : { ...styles.grocery } }
    onClick={() => handleClick(id)}
  >
    { name }
  </li>
)

const styles = {
  grocery: { cursor: "pointer", },
  complete: { color: "grey", textDecoration: "line-through", },
}

export default Grocery;