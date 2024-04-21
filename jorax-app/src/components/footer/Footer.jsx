import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <div>
      {/* <div className="hr-line"></div> */}
      <section className="footer-container">
        <div className="flex-container-2 flex-1">
          <div className="place-left" id={"contactus"}>
            <Link to="/" className="logo-container">
              <img src={`/assets/images/footer-logo.svg`} alt="footer" />
            </Link>
            <p>
              Jorax Healthcare Ltd Office address: 149 Hilltop Road, Abakaliki,
              Ebonyi, Flat 3, 1st Floor
            </p>
            <p>
              Join our newsletter to stay up to date on our products and
              services.
            </p>

            <div className="subscribe">
              <p>
                By subscribing you agree to our Policy and provide consent to
                recieve updates from our company.
              </p>
            </div>
            <form>
              <div className="form-field">
                <input type="email" placeholder="Enter your email" required />
                <div className="cta-btn-container">
                  <button className="cta-btn-primary" type="submit">
                    subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="place-right">
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
                  <li>
                    <Link to="/">privacy</Link>
                  </li>
                  <li>
                    <Link to="/">cookies</Link>
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
                    <Link to="/">CSR</Link>
                  </li>
                  <li>
                    <Link to="/">help center</Link>
                  </li>
                  <li>
                    <Link to="/">documentation</Link>
                  </li>
                  <li>
                    <Link to="/">team of service</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* draw a horizontal line */}
        <hr></hr>
        <div className="flex-container-2 flex-2">
          <div className="flex-item">
            <h5>join us on</h5>
            <div className="social-media-links">
              <div className="inner-flex-2">
                <Link
                  to="https://www.instagram.com/joraxhealthcareltd?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
                  className="img-container"
                  target="_blank"
                >
                  <img
                    src={`/assets/social-media/instagram.svg`}
                    alt="instagram"
                  />
                </Link>
                <Link to="/" className="img-container" target="_blank">
                  <img src={`/assets/social-media/youtube.svg`} alt="youtube" />
                </Link>
                <Link
                  to="https://www.facebook.com/profile.php/?id=100068664810886&name=xhp_nt__fb__action__open_user"
                  className="img-container"
                  target="_blank"
                >
                  <img
                    src={`/assets/social-media/facebook.svg`}
                    alt="facebook"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/posts/joraxhealthcare_how-do-you-feel-about-jorax-today-activity-7168630335381962755-fF7O/?utm_source=share&utm_medium=member_android"
                  className="img-container"
                  target="_blank"
                >
                  <img
                    src={`/assets/social-media/linkedin.svg`}
                    alt="linkedin"
                  />
                </Link>
                <Link
                  to="https://x.com/JoraxLtd?t=anIrKE0A2pUmiPaPM1IawA&s=08"
                  className="img-container"
                  target="_blank"
                >
                  <img src={`/assets/social-media/twitter.svg`} alt="twitter" />
                </Link>
                <Link
                  to="https://x.com/JoraxLtd?t=anIrKE0A2pUmiPaPM1IawA&s=08"
                  className="img-container"
                  target="_blank"
                >
                  <img
                    src={`/assets/social-media/whatsapp .svg`}
                    alt="twitter"
                  />
                </Link>
              </div>
            </div>
          </div>
          <p>{year} Jorax Healthcare! All right reserved.</p>
        </div>
      </section>
    </div>
  );
};
export default Footer;
