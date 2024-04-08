import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/footer-logo.svg";
import { SocialMediaIcons } from "../data/data";

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <div>
      {/* <div className="hr-line"></div> */}
      <section className="footer-container">
        <div className="flex-container flex-1">
          <figure className="place-left" id={"contactus"}>
            <div className="logo-container">
              <img src={Logo} alt={Logo} />
            </div>
            <p>
              Join our newsletter to stay up to date on our products and
              services.
            </p>
            <form>
              <div className="flex-btn">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit" className="cta-btn">
                  subscribe
                </button>
              </div>
            </form>
            <div className="subscribe">
              <p>
                By subscribing you agree to our Policy and provide consent to
                recieve updates from our company.
              </p>
            </div>
          </figure>
          <figure className="place-right">
            <ul className="list-items">
              <li>
                <Link to="/">menu</Link>
                <ul className="drop-list-items">
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/">about us</Link>
                  </li>
                  <li>
                    <Link to="/">contact us</Link>
                  </li>
                  <li>
                    <Link to="/">support</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">resources</Link>
                <ul className="drop-list-items">
                  <li>
                    <Link to="/">blog</Link>
                  </li>
                  <li>
                    <Link to="/">pricing</Link>
                  </li>
                  <li>
                    <Link to="/">help center</Link>
                  </li>
                  <li>
                    <Link to="/">documentation</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">follow on us</Link>
                <ul className="flex-container">
                  {SocialMediaIcons.map((icon) => (
                    <li key={icon.id}>
                      <Link to="/">
                        <div className="img-container">
                          <img src={icon.imgSrc} alt={icon.imgSrc} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </figure>
        </div>

        {/* draw a horizontal line */}
        <hr></hr>
        <div className="flex-container flex-2">
          <p>{year} Jorax Healthcare! All right reserved.</p>
          <ul>
            <li>
              <Link to="/">privacy policy</Link>
            </li>
            <li>
              <Link to="/">terms of service</Link>
            </li>
            <li>
              <Link to="/">cookies setting</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Footer;
