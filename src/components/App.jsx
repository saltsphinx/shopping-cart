import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/App.css";
import Navigation from "./Navigation";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";

export default function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { page } = useParams();

  const handleAdd = (id, quantity) => {
    const existingItem = cart.find((item) => item.id == id);
    const clone = existingItem
      ? cart.filter((item) => item != existingItem)
      : cart;

    setCart([
      ...clone,
      { id: id, quantity: quantity + existingItem?.quantity || quantity },
    ]);
  };

  const handleDelete = (id) => {
    const existingItem = cart.find((item) => item.id == id);
    if (existingItem) {
      setCart(cart.filter((item) => item != existingItem));
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      setProducts(shuffleArray(await response.json()));
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      <header>
        <h1>Bella's</h1>
        <Navigation cart={cart} />
      </header>
      {isLoading && <p>Loading...</p>}
      {products && page == "shop" ? (
        <Shop products={products} handleAdd={handleAdd} />
      ) : page == "cart" ? (
        <Cart products={products} cart={cart} handleDelete={handleDelete} />
      ) : (
        products && <Home />
      )}
    </>
  );
}

function shuffleArray(array) {
  const rtnArr = [...array];

  for (let i = 0; i < rtnArr.length; i++) {
    const randomIndex = Math.floor(Math.random() * rtnArr.length);
    [rtnArr[i], rtnArr[randomIndex]] = [rtnArr[randomIndex], rtnArr[i]];
  }

  return rtnArr;
}
