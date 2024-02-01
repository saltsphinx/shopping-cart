import PropTypes from "prop-types";

export default function Navigation({ cartSize }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">
            <img src="../assets/shopping_cart.svg" />
            <span>{cartSize}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  cartSize: PropTypes.number,
};
