import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navigation({ cart }) {
  const cartSize =
    cart.length > 0
      ? cart.map((item) => item.quantity).reduce((prev, curr) => prev + curr, 0)
      : 0;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <img src="../assets/shopping_cart.svg" />
            <span>{cartSize}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  cart: PropTypes.array,
};
