import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ marginBottom: 20 }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
  );
}

export default Nav;
