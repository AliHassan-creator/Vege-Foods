import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi";

function SingleProduct() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">Home Product Product Single</p>
          <h1 className="about-title">Product Single</h1>
        </div>
      </div>

      {/* Product Detail Section */}
<section className="single-product-section">
  <div className="single-product-container">
    <div className="single-product-image">
      <img
        src="https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg"
        alt="Bell Pepper"
      />
    </div>
    <div className="single-product-info">
      <h2>Bell Pepper</h2>

      {/* Rating + Price container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        {/* Rating */}
        <div
          className="product-rating"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span className="rating-score">5.0</span>
          <span className="stars">★★★★★</span>
          <span className="rating-count">100 Rating</span>
          <span className="sold-count">500 Sold</span>
        </div>

        {/* Price directly below rating */}
        <p
          className="product-price"
          style={{
            marginTop: "6px", // gap between rating & price
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          $120.00
        </p>
      </div>

      <p className="product-description">
        A small river named Duden flows by their place and supplies it
        with the necessary regelialia. It is a paradisematic country, in
        which roasted parts of sentences fly into your mouth. Text should
        turn around and return to its own, safe country. But nothing the
        copy said could convince her and so it didn’t take long until.
      </p>
      <div className="product-options">
        <select>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <div className="quantity-selector">
          <button>-</button>
          <input type="text" value="1" readOnly />
          <button>+</button>
        </div>
      </div>
      <p className="stock-info">600 kg available</p>
      <button
        className="add-to-cart-btn"
        onClick={() => navigate("/cart")}
      >
        Add to Cart
      </button>
    </div>
  </div>
</section>


      {/* Featured Products Section */}
<div className="featured-products-section">
  <div className="section-container">
    <div className="section-header">
      <h3 style={{ color: "green", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>Products</h3>
      <h2>Featured Products</h2>
      <p>For far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    </div>

    <div className="products-grid">
      {/* First Row */}
      <div className="product-card">
        <div className="product-badge">80%</div>
        <div className="product-image-container">
          <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Bell Pepper" />
          <div className="product-hover-buttons">
            <button><FiShoppingCart /></button>
            <button><FiHeart /></button>
            <button><FiEye /></button>
          </div>
        </div>
        <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', width: '100%' }}>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', maxWidth: '60%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>BELLPEPPER</h4>
          <div className="product-price" style={{ color: '#82ae46', fontWeight: 'bold', marginLeft: '10px' }}>$120.00</div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-badge">80%</div>
        <div className="product-image-container">
          <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Strawberry" />
          <div className="product-hover-buttons">
            <button><FiShoppingCart /></button>
            <button><FiHeart /></button>
            <button><FiEye /></button>
          </div>
        </div>
        <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', width: '100%' }}>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', maxWidth: '60%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>STRAWBERRY</h4>
          <div className="product-price" style={{ color: '#82ae46', fontWeight: 'bold', marginLeft: '10px' }}>$120.00</div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-badge">80%</div>
        <div className="product-image-container">
          <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Green Beans" />
          <div className="product-hover-buttons">
            <button><FiShoppingCart /></button>
            <button><FiHeart /></button>
            <button><FiEye /></button>
          </div>
        </div>
        <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', width: '100%' }}>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', maxWidth: '60%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>GREEN BEANS</h4>
          <div className="product-price" style={{ color: '#82ae46', fontWeight: 'bold', marginLeft: '10px' }}>$120.00</div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-badge">80%</div>
        <div className="product-image-container">
          <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Purple Cabbage" />
          <div className="product-hover-buttons">
            <button><FiShoppingCart /></button>
            <button><FiHeart /></button>
            <button><FiEye /></button>
          </div>
        </div>
        <div className="product-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', width: '100%' }}>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', maxWidth: '60%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>PURPLE CABBAGE</h4>
          <div className="product-price" style={{ color: '#82ae46', fontWeight: 'bold', marginLeft: '10px' }}>$120.00</div>
        </div>
      </div>
    </div>
  </div>
</div>


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

export default SingleProduct;
