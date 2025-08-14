import React from "react";
import "./App.css";

function Cart() {
  return (
    <div>
      {/* Hero Section (UNCHANGED) */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">Home Cart</p>
          <h1 className="about-title">My Cart</h1>
        </div>
      </div>

      {/* ===== Cart Section ===== */}
      <section className="cart-section">
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="product-info">
                  <button className="remove-btn" aria-label="Remove item">×</button>
                  <img
                    className="product-img"
                    src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Bell Pepper"
                  />
                  <div className="product-text">
                    <h4 className="product-title">Bell Pepper</h4>
                    <p className="product-desc">
                      Far far away, behind the word mountains, far from the countries
                    </p>
                  </div>
                </td>
                <td className="price">$4.90</td>
                <td>
                  <input className="qty-input" type="number" min="1" defaultValue="1" />
                </td>
                <td className="total">$4.90</td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="product-info">
                  <button className="remove-btn" aria-label="Remove item">×</button>
                  <img
                    className="product-img"
                    src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Bell Pepper"
                  />
                  <div className="product-text">
                    <h4 className="product-title">Bell Pepper</h4>
                    <p className="product-desc">
                      Far far away, behind the word mountains, far from the countries
                    </p>
                  </div>
                </td>
                <td className="price">$15.70</td>
                <td>
                  <input className="qty-input" type="number" min="1" defaultValue="1" />
                </td>
                <td className="total">$15.70</td>
              </tr>
            </tbody>
          </table>

          {/* Bottom panels */}
          <div className="cart-bottom">
            {/* Coupon */}
            <div className="panel">
              <h3 className="panel-title">Coupon Code</h3>
              <p className="panel-help">Enter your coupon code if you have one</p>
              <input className="text-input" type="text" placeholder="Coupon code" />
              <button className="pill-btn">Apply Coupon</button>
            </div>

            {/* Shipping */}
            <div className="panel">
              <h3 className="panel-title">Estimate shipping and tax</h3>
              <p className="panel-help">Enter your destination to get a shipping estimate</p>
              <input className="text-input" type="text" placeholder="Country" />
              <input className="text-input" type="text" placeholder="State/Province" />
              <input className="text-input" type="text" placeholder="Zip/Postal Code" />
              <button className="pill-btn">Estimate</button>
            </div>

            {/* Totals */}
            <div className="panel totals-panel">
              <h3 className="panel-title">Cart Totals</h3>

              <div className="totals-row">
                <span>Subtotal</span>
                <span>$20.60</span>
              </div>
              <div className="totals-row">
                <span>Delivery</span>
                <span>$0.00</span>
              </div>
              <div className="totals-row">
                <span>Discount</span>
                <span>$3.00</span>
              </div>

              <div className="totals-row totals-final">
                <strong>TOTAL</strong>
                <strong>$17.60</strong>
              </div>

              <button className="pill-btn wide">Proceed to Checkout</button>
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
                      /* TODO: hook this up to your subscribe handler */
                    }}
                  >
                    <input type="email" placeholder="Enter email address" required />
                    <button className="subscribe-btn" type="submit">Subscribe</button>
                  </form>
                </div>

                {/* round centered up-arrow button */}
                <button
                  className="back-to-top"
                  aria-label="Scroll to top"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M6 15l6-6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
              </section>
    </div>
  );
}

export default Cart;
