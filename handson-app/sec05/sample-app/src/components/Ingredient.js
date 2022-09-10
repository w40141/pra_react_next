import React from "react";

const Ingredient = ({ amount, measurement, name }) => (
  <li>
    {amount} {measurement} {name}
  </li>
);

export default Ingredient;
