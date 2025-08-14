import React, { useState } from "react";
import "./App.css";

function Wishlist() {
  // Seed items — swap image URLs if you want exact assets
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Bell Pepper",
      price: 4.9,
      qty: 1,
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=600&auto=format&fit=crop",
      desc:
        "Far far away, behind the word mountains,\nfar from the countries",
    },
    {
      id: 2,
      name: "Bell Pepper",
      price: 15.7,
      qty: 1,
      img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=600&auto=format&fit=crop",
      desc:
        "Far far away, behind the word mountains,\nfar from the countries",
    },
    {
      id: 3,
      name: "Bell Pepper",
      price: 15.7,
      qty: 1,
      img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=600&auto=format&fit=crop",
      desc:
        "Far far away, behind the word mountains,\nfar from the countries",
    },
    {
      id: 4,
      name: "Bell Pepper",
      price: 15.7,
      qty: 1,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
      desc:
        "Far far away, behind the word mountains,\nfar from the countries",
    },
  ]);

  const updateQty = (id, value) => {
    const v = Math.max(1, Number(value) || 1);
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: v } : it))
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">Home / Wishlist</p>
          <h1 className="about-title">My Wishlist</h1>
        </div>
      </div>

      {/* Wishlist (Product List) Section */}
      <section className="wishlist-section">
        <div className="wishlist-table">
          {/* Header Bar */}
          <div className="wishlist-header">
            <div className="wh-title">Product List</div>
            <div className="wh-price">Price</div>
            <div className="wh-qty">Quantity</div>
            <div className="wh-total">Total</div>
          </div>

          {/* Rows */}
          <div className="wishlist-body">
            {items.map((it) => (
              <div className="wishlist-row" key={it.id}>
                {/* Remove */}
                <button
                  className="wishlist-remove"
                  aria-label="Remove item"
                  onClick={() => removeItem(it.id)}
                >
                  ×
                </button>

                {/* Product cell */}
                <div className="wishlist-product">
                  <img className="wishlist-image" src={it.img} alt={it.name} />
                  <div className="wishlist-info">
                    <h3 className="wishlist-name">{it.name}</h3>
                    <p className="wishlist-desc">
                      {it.desc.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i === 0 ? <br /> : null}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="wishlist-price">
                  ${it.price.toFixed(2)}
                </div>

                {/* Quantity */}
                <div className="wishlist-qty">
                  <input
                    type="number"
                    min="1"
                    value={it.qty}
                    onChange={(e) => updateQty(it.id, e.target.value)}
                    className="qty-input"
                  />
                </div>

                {/* Total */}
                <div className="wishlist-total">
                  ${(it.price * it.qty).toFixed(2)}
                </div>
              </div>
            ))}
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
            <button className="subscribe-btn" type="submit">
              Subscribe
            </button>
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

export default Wishlist;
