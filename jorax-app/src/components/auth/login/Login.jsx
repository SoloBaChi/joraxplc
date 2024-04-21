import React from "react";
import { Link } from "react-router-dom";
import EyeIcon from "../../shared/icons/EyeIcon";

function Login(props) {
  return (
    <section className="auth-section">
      <div className="form-container">
        <form>
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
          <div className="form-field">
            <div className="flex-container-2 bottom">
              <div className="cta-btn-container">
                <button className="cta-btn-primary">login</button>
              </div>
              <div className="existing-user">
                <p>
                  Don't have an account ?{" "}
                  <Link className="link-text" to="/register">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
