import { useState } from "react";
import { Link } from "react-router-dom";
import { AVTAR_URL, IMG_URL } from "./utils/Constants";

const Nav = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={IMG_URL}></img>
  </a>
);
const Avatar = () => <img className="avtar" alt="avtar" src={AVTAR_URL}></img>;
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function getAuthentication() {
    console.log("getAuthentication");
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
    console.log(isLoggedIn);
  }
  return (
    <div className="header">
      <Title />
      <Nav />
      {/* <Avatar /> */}
      {isLoggedIn ? (
        <button onClick={() => getAuthentication()}>login</button>
      ) : (
        <button onClick={() => getAuthentication()}>logout</button>
      )}
    </div>
  );
};

export default Header;
