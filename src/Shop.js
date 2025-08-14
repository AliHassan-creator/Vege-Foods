import React from "react";
import "./App.css";
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi";

function Shop() {
  const handlePageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section (UNCHANGED) */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">Home Products</p>
          <h1 className="about-title">Products</h1>
        </div>
      </div>

      {/* Category Selector Section */}
      <section className="category-selector">
        <button className="category-btn active">All</button>
        <button className="category-btn">Vegetables</button>
        <button className="category-btn">Fruits</button>
        <button className="category-btn">Juice</button>
        <button className="category-btn">Dried</button>
      </section>

      {/* Featured Products Section */}
<div className="featured-products-section">
  <div className="section-container">
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
        <div className="product-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 10px',
          width: '100%'
        }}>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: 'bold',
            maxWidth: '60%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>BELLPEPPER</h4>
          <div className="product-price" style={{ 
            color: '#82ae46', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>$120.00</div>
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
        <div className="product-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 10px',
          width: '100%'
        }}>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: 'bold',
            maxWidth: '60%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>STRAWBERRY</h4>
          <div className="product-price" style={{ 
            color: '#82ae46', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>$120.00</div>
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
        <div className="product-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 10px',
          width: '100%'
        }}>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: 'bold',
            maxWidth: '60%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>GREEN BEANS</h4>
          <div className="product-price" style={{ 
            color: '#82ae46', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>$120.00</div>
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
        <div className="product-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 10px',
          width: '100%'
        }}>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: 'bold',
            maxWidth: '60%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>PURPLE CABBAGE</h4>
          <div className="product-price" style={{ 
            color: '#82ae46', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>$120.00</div>
        </div>
      </div>
      
      {/* Second Row - Duplicate the same products for demo */}
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
        <div className="product-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 10px',
          width: '100%'
        }}>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: 'bold',
            maxWidth: '60%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>BELLPEPPER</h4>
          <div className="product-price" style={{ 
            color: '#82ae46', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>$120.00</div>
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
        <div className="product-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 10px',
          width: '100%'
        }}>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: 'bold',
            maxWidth: '60%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>STRAWBERRY</h4>
          <div className="product-price" style={{ 
            color: '#82ae46', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>$120.00</div>
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
        <div className="product-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 10px',
          width: '100%'
        }}>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: 'bold',
            maxWidth: '60%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>GREEN BEANS</h4>
          <div className="product-price" style={{ 
            color: '#82ae46', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>$120.00</div>
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
        <div className="product-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 10px',
          width: '100%'
        }}>
          <h4 style={{ 
            margin: 0, 
            fontSize: '16px', 
            fontWeight: 'bold',
            maxWidth: '60%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>PURPLE CABBAGE</h4>
          <div className="product-price" style={{ 
            color: '#82ae46', 
            fontWeight: 'bold',
            marginLeft: '10px'
          }}>$120.00</div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Pagination Slider */}
      <div className="pagination">
        <button onClick={handlePageClick}>&lt;</button>
        <button className="active" onClick={handlePageClick}>1</button>
        <button onClick={handlePageClick}>2</button>
        <button onClick={handlePageClick}>3</button>
        <button onClick={handlePageClick}>4</button>
        <button onClick={handlePageClick}>5</button>
        <button onClick={handlePageClick}>&gt;</button>
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

export default Shop;
