import React from "react";
import "./App.css";

function Checkout() {
  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">Home Checkout</p>
          <h1 className="about-title">Checkout</h1>
        </div>
      </div>

      {/* Billing Section */}
      <section className="billing-section">
        <div className="billing-container">
          {/* Billing Form */}
          <div className="billing-details">
            <h2>Billing Details</h2>
            <form className="billing-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className="form-row">
                <select required>
                  <option value="">State / Country</option>
                  <option value="france">France</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
              <div className="form-row">
                <input type="text" placeholder="House number and street name" required />
                <input type="text" placeholder="Apartment, suite, unit etc (optional)" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Town / City" required />
                <input type="text" placeholder="Postcode / ZIP" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Phone" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-options">
                <label>
                  <input type="radio" name="accountOption" /> Create an Account?
                </label>
                <label>
                  <input type="radio" name="accountOption" /> Ship to different address
                </label>
              </div>
            </form>
          </div>

          {/* Cart Summary & Payment */}
          <div className="billing-summary">
            <div className="cart-total">
              <h3>Cart Total</h3>
              <p>Subtotal <span>$20.60</span></p>
              <p>Delivery <span>$0.00</span></p>
              <p>Discount <span>$3.00</span></p>
              <hr />
              <p className="total">TOTAL <span>$17.60</span></p>
            </div>

            <div className="payment-method">
              <h3>Payment Method</h3>
              <label><input type="radio" name="payment" /> Direct Bank Transfer</label>
              <label><input type="radio" name="payment" /> Check Payment</label>
              <label><input type="radio" name="payment" /> Paypal</label>
              <label><input type="checkbox" /> I have read and accept the terms and conditions</label>
              <button
              className="place-order-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
             Place an order
            </button>

            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get e-mail updates about our latest shops and special offers</p>
          </div>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="email" placeholder="Enter email address" required />
            <button className="subscribe-btn" type="submit">Subscribe</button>
          </form>
        </div>

        {/* Back to top button */}
        <button
          className="back-to-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg viewBox="0 0 24 24">
            <path d="M6 15l6-6 6 6" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </button>
      </section>
    </div>
  );
}

export default Checkout;
