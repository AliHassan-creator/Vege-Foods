import React, { useState, useEffect } from "react";
import { FaTruck, FaLeaf, FaAward, FaHeadset } from "react-icons/fa";
import "./App.css"; // Use the existing App.css for styling

function About() {
  const [customers, setCustomers] = useState(0);
  const [branches, setBranches] = useState(0);
  const [partners, setPartners] = useState(0);
  const [awards, setAwards] = useState(0);
  const [showVideo, setShowVideo] = useState(false); // Ensure this state is defined

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

  useEffect(() => {
    const incrementCounter = (setCounter, targetValue) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        currentValue += Math.ceil(targetValue / 100); // Increment by a fraction of the target value
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(interval);
        }
        setCounter(currentValue);
      }, 30); // Speed of the counter animation
    };

    incrementCounter(setCustomers, 10000);
    incrementCounter(setBranches, 100);
    incrementCounter(setPartners, 1000);
    incrementCounter(setAwards, 100);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">How About Us</p>
          <h1 className="about-title">ABOUT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <div className="about-content-left">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Fresh Produce"
            className="about-image"
          />
          <button className="about-play-button" onClick={() => setShowVideo(true)}>
            <span className="play-icon">▶</span>
          </button>
        </div>
        <div className="about-content-right">
          <h2 className="about-heading">Welcome to Vegefoods an eCommerce website</h2>
          <p className="about-description">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <p className="about-description">
            But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
          </p>
          <button className="about-shop-button">Shop now</button>
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
              /* TODO: hook this up to your subscribe handler */
            }}
          >
            <input type="email" placeholder="Enter email address" required />
            <button className="subscribe-btn" type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <div className="counter-container">
          <div className="counter-item">
            <div className="counter-overlay"></div>
            <h2 className="counter-number">{customers}</h2>
            <p className="counter-label">Happy Customers</p>
          </div>
          <div className="counter-item">
            <div className="counter-overlay"></div>
            <h2 className="counter-number">{branches}</h2>
            <p className="counter-label">Branches</p>
          </div>
          <div className="counter-item">
            <div className="counter-overlay"></div>
            <h2 className="counter-number">{partners}</h2>
            <p className="counter-label">Partners</p>
          </div>
          <div className="counter-item">
            <div className="counter-overlay"></div>
            <h2 className="counter-number">{awards}</h2>
            <p className="counter-label">Awards</p>
          </div>
        </div>
      </section>

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

      {/* Features Section */}
      <div 
        className="features-section" 
        style={{
          backgroundColor: '#f8f9fa',
          padding: '50px 0',
          marginBottom: '0',  // Changed from margin: '30px 0' to remove bottom margin
          position: 'relative',
          borderTop: '1px solid #f8f9fa'  // Added to ensure seamless transition
        }}
      >
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

        {/* Back to top button */}
        <button
          className="back-to-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: 'absolute',
            bottom: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#82ae46',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: '100'
          }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ width: '20px', height: '20px' }}>
            <path d="M6 15l6-6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </button>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal">
          <div className="video-container">
            <button className="close-video-button" onClick={() => setShowVideo(false)}>
              ✖
            </button>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with any video URL
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;