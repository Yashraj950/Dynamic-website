import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="bg-[#171d32] h-auto w-full overflow-hidden">
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
              <p>WantedFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-link">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-link">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-link">
                <a href="movie" className="nav-link">
                  Movie
                </a>
              </li>
              <li className="nav-link">
                <a href="contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
