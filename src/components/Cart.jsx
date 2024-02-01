import PropTypes from "prop-types";
import CartItem from "./CartItem";

export default function Cart({ products, cart, handleDelete, handleBuy }) {
  const total =
    cart.length > 0
      ? cart
          .map(
            (item) =>
              +products.find((product) => product.id == item.id).price *
              item.quantity
          )
          .reduce((prev, curr) => curr + prev, 0)
      : null;

  if (!total) {
    return (
      <div>
        <p>No items in your cart yet, do some shopping then come back!</p>
      </div>
    );
  }
  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            product={products.find((product) => product.id == item.id)}
            quantity={item.quantity}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <p>{"$" + Math.round(total * 100) / 100}</p>
      <button onClick={handleBuy}>Checkout</button>
    </div>
  );
}

Cart.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.array,
  handleDelete: PropTypes.func,
  handleBuy: PropTypes.func,
};
