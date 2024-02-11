import { Link } from "react-router-dom";
import twitterSVG from "../assets/5296516_tweet_twitter_twitter logo_icon.svg";
import githubSVG from "../assets/github-mark.svg";

export default function Footer() {
  return (
    <footer>
      <div className="first">
        <h3>Bella's</h3>
        <div className="socials">
          <a href="">
            <img src={githubSVG} alt="" />
          </a>
          <a href="">
            <img src={twitterSVG} alt="" />
          </a>
        </div>
      </div>
      <div className="second">
        <h3>Links</h3>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Your Cart</Link>
      </div>
    </footer>
  );
}
