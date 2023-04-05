import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <nav>
          <Link to="/" className="logo">
            <img alt="Little Lemon" src="/img/little-lemon.svg" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reserve-table">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header