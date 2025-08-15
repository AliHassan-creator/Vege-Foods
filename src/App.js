import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Cart from "./Cart";
import Shop from "./Shop";
import Wishlist from "./Wishlist";
import SingleProduct from "./SingleProduct";
import Checkout from "./Checkout";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaShoppingCart,
  FaTruck,
  FaLeaf,
  FaAward,
  FaHeadset,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi";

function App() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      text: "100% Fresh & Organic Food",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      text: "We Serve Fresh Vegetables and Fruits",
    },
  ];
  const [dealTimeLeft, setDealTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [shopDropdown, setShopDropdown] = useState(false);
  const DISPLAY_MS = 12000;
  const FADE_MS = 3000;

  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(true);
  
  useEffect(() => {
    const dealEnd = new Date();
    dealEnd.setHours(23, 59, 59, 999);

    const updateCountdown = () => {
      const now = new Date();
      const diff = dealEnd - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setDealTimeLeft({ days, hours, minutes, seconds });
      } else {
        setDealTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let fadeTimeout = null;
    const interval = setInterval(() => {
      setFading(false);
      fadeTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFading(true);
      }, FADE_MS);
    }, DISPLAY_MS);

    return () => {
      clearInterval(interval);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, [slides.length]);
  
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Garreth Smith",
      role: "SYSTEM ANALYST",
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The best organic store! Always fresh and quick delivery. Highly recommended.",
      name: "Anna Lee",
      role: "MARKETING MANAGER",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Great quality and excellent customer service. I love shopping here.",
      name: "John Doe",
      role: "INTERFACE DESIGNER",
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      text: "Affordable prices and a wide variety of products. My family loves it.",
      name: "Emily Clark",
      role: "PRODUCT MANAGER",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Fast shipping and everything is always so fresh. Five stars!",
      name: "Michael Brown",
      role: "DEVELOPER",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Fast shipping and everything is always so fresh. Five stars!",
      name: "Michael Brown",
      role: "Tester",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const visibleTestimonials = testimonials.slice(testimonialIndex, testimonialIndex + 3);
  const totalPages = Math.ceil(testimonials.length / 3);
  const currentPage = Math.floor(testimonialIndex / 3);

  const handleDotClick = (page) => {
    if (page === currentPage) return;
    setFade(false);
    setTimeout(() => {
      setTestimonialIndex(page * 3);
      setFade(true);
    }, 400);
  };

  return (
    <Router basename="/vege-foods">
      <div className="page-wrapper">
        {/* Top Bar */}
        <header className="top-bar">
          <div className="top-bar-left">
            <span className="contact-item">
              <FaPhoneAlt /> + 1235 2355 98
            </span>
            <span className="email contact-item">
              <FaEnvelope /> YOUREMAIL@EMAIL.COM
            </span>
          </div>
          <div className="delivery-info">
            3–5 BUSINESS DAYS DELIVERY & FREE RETURNS
          </div>
        </header>

        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/" className="logo">VEGEFOODS</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">HOME</Link></li>
            <li
              className="shop-dropdown-parent"
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => setShopDropdown(false)}
            >
              <span className="nav-link">SHOP ▾</span>
              {shopDropdown && (
                <div className="shop-dropdown-menu">
                  <Link to="/shop">Shop</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <Link to="/product">Single Product</Link>
                  <Link to="/cart">Cart</Link>
                  <Link to="/checkout">Checkout</Link>
                </div>
              )}
            </li>
            <li><Link to="/about" className="nav-link">ABOUT</Link></li>
            <li><Link to="/blog" className="nav-link">BLOG</Link></li>
            <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
            <li className="cart-icon">
              <Link to="/cart" className="nav-link">
                <FaShoppingCart /> [0]
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <div className="hero">
                <div
                  className={`background-slide ${fading ? "fade-in" : "fade-out"}`}
                  style={{ backgroundImage: `url(${slides[index].image})` }}
                  aria-hidden="true"
                />
                <div className="background-dim" />
                <div className="hero-center">
                  <h1 className={`hero-text ${fading ? "fade-in" : "fade-out"}`}>
                    {slides[index].text}
                  </h1>
                  <p className="sub-text">WE DELIVER ORGANIC VEGETABLES & FRUITS</p>
                  <button className="view-btn">View Details</button>
                </div>
              </div>

              {/* Features Section */}
              <div className="features-section">
                <div className="feature-item">
                  <div className="feature-icon"><FaTruck /></div>
                  <div className="feature-text">
                    <div className="feature-title">FREE SHIPPING</div>
                    <div className="feature-subtitle">ON ORDER OVER $100</div>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon"><FaLeaf /></div>
                  <div className="feature-text">
                    <div className="feature-title">ALWAYS FRESH</div>
                    <div className="feature-subtitle">PRODUCT WELL PACKAGE</div>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon"><FaAward /></div>
                  <div className="feature-text">
                    <div className="feature-title">SUPERIOR QUALITY</div>
                    <div className="feature-subtitle">QUALITY PRODUCTS</div>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon"><FaHeadset /></div>
                  <div className="feature-text">
                    <div className="feature-title">SUPPORT</div>
                    <div className="feature-subtitle">24/7 SUPPORT</div>
                  </div>
                </div>
              </div>

              {/* Vegetables and Fruits Sections */}
              <div className="vegetable-fruit-section">
                <div className="section-container">
                  {/* First Row */}
                  <div className="product-row">
                    <div 
                      className="product-image left-image" 
                      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}
                    >
                      <div className="image-label" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Broccoli
                      </div>
                    </div>
                    
                    <div className="product-center-content">
                      <h2>Vegetables</h2>
                      <p>Protect the health of every home</p>
                      <button className="shop-now-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Shop now</button>
                    </div>
                    
                    <div 
                      className="product-image right-image" 
                      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}
                    >
                      <div className="image-label" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Carrots
                      </div>
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="product-row second-row">
                    <div 
                      className="product-image" 
                      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}
                    >
                      <div className="image-label" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Apples
                      </div>
                    </div>
                    
                    <div 
                      className="product-image" 
                      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}
                    >
                      <div className="image-label" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Bananas
                      </div>
                    </div>
                    
                    <div 
                      className="product-image" 
                      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}
                    >
                      <div className="image-label" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Grapes
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Products Section */}
<div className="featured-products-section">
  <div className="section-container">
    <div className="section-header">
                    <h2>Featured Products</h2>
                    <h3>Our Products</h3>
                    <p>For for away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
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

              {/* Deal of the Day Section */}
              <div className="deal-of-day-section">
                <div className="deal-container">
                  <div className="deal-content">
                    <div className="deal-label">Best Price For You</div>
                    <h2 className="deal-title">Deal of the day</h2>
                    <p className="deal-desc">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>
                    <div className="deal-product">
                      <span className="deal-product-name">Spinach</span>
                      <span className="deal-product-price">
                        <span className="old-price">$10</span> <span className="now-price">now $5 only</span>
                      </span>
                    </div>
                    <div className="deal-timer">
                      <div className="timer-segment">
                        <span className="timer-value">{dealTimeLeft.days}</span>
                        <span className="timer-label">DAYS</span>
                      </div>
                      <div className="timer-segment">
                        <span className="timer-value">{dealTimeLeft.hours}</span>
                        <span className="timer-label">HOURS</span>
                      </div>
                      <div className="timer-segment">
                        <span className="timer-value">{dealTimeLeft.minutes}</span>
                        <span className="timer-label">MINUTES</span>
                      </div>
                      <div className="timer-segment">
                        <span className="timer-value">{dealTimeLeft.seconds}</span>
                        <span className="timer-label">SECONDS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Section */}
              <div className="testimonial-section">
                <div className="testimonial-header">
                  <div className="testimonial-label">Testimony</div>
                  <h2>Our satisfied customer says</h2>
                  <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                  </p>
                </div>
                <div className={`testimonial-list testimonial-fade${fade ? " in" : " out"}`}>
                  {visibleTestimonials.map((review, idx) => (
                    <div className="testimonial-item" key={idx}>
                      <div className="testimonial-img">
                        <img src={review.img} alt="Customer" />
                        <span className="testimonial-quote">"</span>
                      </div>
                      <div className="testimonial-content">
                        <p>{review.text}</p>
                        <div className="testimonial-name">{review.name}</div>
                        <div className="testimonial-role">{review.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="testimonial-dots">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <span
                      key={i}
                      className={`testimonial-dot${i === currentPage ? " active" : ""}`}
                      onClick={() => handleDotClick(i)}
                    />
                  ))}
                </div>
              </div>

              {/* Brand Logos Section */}
              <div className="brand-logos-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" />
                <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg" alt="Adobe Logo" width="200" />
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
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-container">

            {/* Vegefoods Description */}
            <div className="footer-col">
              <h3 className="footer-title">Vegefoods</h3>
              <p>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia.
              </p>
              <div className="footer-socials">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Menu */}
            <div className="footer-col">
              <h3 className="footer-title">Menu</h3>
              <ul>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div className="footer-col">
              <h3 className="footer-title">Help</h3>
              <ul>
                <li><Link to="/shipping">Shipping Information</Link></li>
                <li><Link to="/returns">Returns & Exchange</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h3 className="footer-title">Have a Questions?</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt /> 203 Fake St. Mountain View, San Francisco, California, USA
                </li>
                <li>
                  <FaPhoneAlt /> <a href="tel:+23923929210">+2 392 3929 210</a>
                </li>
                <li>
                  <FaEnvelope /> <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            Copyright ©2025 All rights reserved |
            This template is made with <span className="heart">❤</span> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
              Colorlib
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
