import { AVTAR_URL, IMG_URL } from "./utils/Constants";
const Nav = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
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
  return (
    <div className="header">
      <Title />
      <Nav />
      <Avatar />
    </div>
  );
};

export default Header;
