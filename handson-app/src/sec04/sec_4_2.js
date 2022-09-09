const dish = React.createElement("h1", null, "Baked Salmon");
const dessert = React.createElement("h2", null, "Coconut Cream Pie");
const items = [
  "2 lb salmon",
  "5 springs olive rosemary",
  "2 tablespoons olive oil",
  "2 small lemons",
  "1 teaspoon kosher salt",
  "4 cloves of chopped garlic",
];

const IngredientsList = ({ items }) =>
  React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((item, i) => React.createElement("li", { key: i }, item))
  );

ReactDOM.render(
  React.createElement(IngredientsList, { items }, null),
  document.getElementById("root")
);
