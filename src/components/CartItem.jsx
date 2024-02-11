import PropTypes from "prop-types";

export default function CartItem({ product, quantity, handleDelete }) {
  return (
    <div className="item">
      <img src={product.image} />
      <p>{product.title}</p>
      <p>${Math.round(product.price * quantity * 100) / 100}</p>
      <p>{quantity}</p>
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
