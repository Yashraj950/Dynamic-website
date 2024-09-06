import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Wanted Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="#">SIGN IN</NavLink>
              <NavLink to="#">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>Wanted</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-link">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="movie" className="nav-link">
                  Movie
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};