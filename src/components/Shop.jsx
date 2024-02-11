import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

export default function Shop({ products, handleAdd }) {
  return (
    <main className="shop">
      <div className="hero">
        <h2>Shop</h2>
      </div>
      <div className="item-wrapper">
        {products.map((product) => (
          <ShopItem key={product.id} product={product} handleAdd={handleAdd} />
        ))}
      </div>
    </main>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  handleAdd: PropTypes.func,
};
