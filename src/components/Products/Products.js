import { useState } from "react";
import Product from "./Product";
import { nanoid } from "nanoid";

const id = () => nanoid();

const initProds = [
  { id: id(), name: "prod1", cost: "cost1", catg: "catg1" },
  { id: id(), name: "prod2", cost: "cost2", catg: "catg2" },
  { id: id(), name: "prod3", cost: "cost3", catg: "catg3" },
];

function Products() {
  const [prods, setProds] = useState(initProds);

  const result = prods.map((el) => {
    return <Product key={el.id} {...el} changeItem={changeItem} />;
  });

  function changeItem(id, field, event) {
    setProds(
      prods.map((el) => {
        if (id === el.id) {
          el[field] = event.target.value;
        }

        return el;
      })
    );
  }

  return (
    <table>
      <tbody>{result}</tbody>
    </table>
  );
}

export default Products;
