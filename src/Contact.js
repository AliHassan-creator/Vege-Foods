import React from "react";
import "./App.css";

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">Home Contact Us</p>
          <h1 className="about-title">Contact Us</h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-section">
        {[
          { label: "Address:", value: "198 West 21th Street, Suite 721 New York NY 10016" },
          { label: "Phone:", value: "+ 1235 2355 98" },
          { label: "Email:", value: "info@yoursite.com" },
          { label: "Website", value: "yoursite.com" }
        ].map((item, idx) => (
          <div key={idx} className="contact-info-box">
            <p>
              <span className="contact-label">{item.label}</span>{" "}
              <span className="contact-value">{item.value}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form + Map */}
      <div className="contact-main-section">
        {/* Map Image */}
        <div className="map-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1024px-World_map_blank_without_borders.svg.png"
            alt="Map"
          />
        </div>

        {/* Contact Form */}
        <div className="contact-form-box">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Back to top button */}
      <div style={{ position: "relative", width: "100%", height: "50px", marginTop: "30px" }}>
        <button
          className="back-to-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#82ae46",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            zIndex: "100",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            style={{ width: "20px", height: "20px" }}
          >
            <path
              d="M6 15l6-6 6 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Contact;
