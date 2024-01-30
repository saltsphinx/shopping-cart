import PropTypes from "prop-types";
import { useRef } from "react";

export default function ShopItem({ product, handleAdd }) {
  const inputRef = useRef(null);
  const handleValueChange = (num) => {
    if (+inputRef.current.value + num >= 1)
      inputRef.current.value = +inputRef.current.value + num;
  };

  const onChange = (e) => {
    const input = e.target;
    if (input.value < 1) input.value = 1;
  };

  return (
    <div>
      <img src={product.image} />
      <p>{product.title}</p>
      <input
        ref={inputRef}
        type="number"
        defaultValue="1"
        onChange={onChange}
      />
      <button onClick={() => handleValueChange(-1)}>-</button>
      <button onClick={() => handleValueChange(1)}>+</button>
      <button onClick={() => handleAdd(product.id, inputRef.current.value)}>
        Add
      </button>
    </div>
  );
}

ShopItem.propTypes = {
  product: PropTypes.object,
  handleAdd: PropTypes.func,
};
