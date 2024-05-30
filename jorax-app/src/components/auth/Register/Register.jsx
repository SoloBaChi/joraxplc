import React from "react";
import { Link } from "react-router-dom";
import EyeIcon from "../../shared/icons/EyeIcon";
import BackArrow from "../../shared/BackArrow";

function Register(props) {
  return (
    <section className="auth-section">
      <div className="form-container">
        <form>
          <div className="double flex-container-2">
            <div className="form-field">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                placeholder="e.g precious"
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                placeholder="e.g chijioke"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="email">email</label>
              <input
                type="tel"
                name="email"
                id="email"
                required
                placeholder="e.g precious@gmail.com"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="phone">phone number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="e.g +23409050987611"
              />
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="e.g Pr@24Ja$"
              />
              <div className="eye-icon-container">
                <EyeIcon />
              </div>
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="confirmPassword">confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                placeholder="e.g Pr@24Ja$"
              />
              <div className="eye-icon-container">
                <EyeIcon />
              </div>
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label className="checkbox" htmlFor="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  required
                  placeholder="e.g precious@gmail.com"
                />
                <p>
                  I agree to Jorax privacy policy and terms of service{" "}
                  <Link to="/" className="link-text">
                    here
                  </Link>
                </p>
              </label>
            </div>
          </div>
          <div className="form-field">
            <div className="flex-container-2 bottom">
              <div className="cta-btn-container">
                <button className="cta-btn-primary">sign up</button>
              </div>
              <div className="existing-user">
                <p>
                  Already have account ?{" "}
                  <Link className="link-text" to="/login">
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Link to="/">
        <BackArrow />
      </Link>
    </section>
  );
}

export default Register;
