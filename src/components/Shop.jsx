import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

export default function Shop({ products, handleAdd }) {
  return (
    <div>
      {products.map((product) => (
        <ShopItem key={product.id} product={product} handleAdd={handleAdd} />
      ))}
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  handleAdd: PropTypes.func,
};
