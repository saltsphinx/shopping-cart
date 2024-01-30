import PropTypes from "prop-types";

export default function CartItem({ product, quantity, handleDelete }) {
  return (
    <div>
      <img src={product.image} />
      <p>{product.title}</p>
      <p>${product.price * quantity}</p>
      <button
        onClick={() => {
          handleDelete(product.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  handleDelete: PropTypes.func,
};
