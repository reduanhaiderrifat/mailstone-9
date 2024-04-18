import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <Link className="a" to="/">
        Home
      </Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
