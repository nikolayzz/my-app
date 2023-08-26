import ProductField from "./ProductField";

function Product(props) {
  const { id, name, cost, catg, changeItem } = props;
  return (
    <tr>
      <ProductField id={id} text={name} type="name" changeItem={changeItem} />
      <ProductField id={id} text={cost} type="cost" changeItem={changeItem} />
      <ProductField id={id} text={catg} type="catg" changeItem={changeItem} />
    </tr>
  );
}

export default Product;
