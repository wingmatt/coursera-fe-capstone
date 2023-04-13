const Footer = () => {
  return (
    <footer>
      <div className="content">
        <img alt="Little Lemon Chicago" src="/img/little-lemon-logo-2.png" />
        <nav>
          <section>
            <h2>Doormat Navigation</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/reservations">Reservations</a>
              </li>
              <li>
                <a href="/order">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </section>
          <section>
            <h2>Contact</h2>
            <ul>
              <li>
                <span>Address</span>
              </li>
              <li>
                <a href="tel:555-555-5555">Phone Number</a>
              </li>
              <li>
                <a href="mailto:noreply@example.com">Email</a>
              </li>
            </ul>
          </section>
          <section>
            <h2>Social Media Links</h2>
            <ul>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Secret third thing</a>
              </li>
            </ul>
          </section>
        </nav>
      </div>
    </footer>
  )
}

export default Footer