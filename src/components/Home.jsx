import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="hero home-hero shadow">
      <div className="hero-action">
        <h2>
          Find affordable clothing items and accessories at competitve prices
        </h2>
        <Link to="/shop">Shop now</Link>
      </div>
      <div className="hero-white-space"></div>
    </main>
  );
}
