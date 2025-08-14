import React from "react";
import "./App.css";

function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">Home Blog</p>
          <h1 className="about-title">Blog</h1>
        </div>
      </div>

      {/* Blog Content Section (Two-Column Layout) */}
      <section className="blog-section">
        <div className="container">
          <div className="row">
            {/* Left Column: Blog Posts */}
            <div className="col-md-8">
              {[1, 2, 3, 4].map((post, index) => (
                <div className="blog-post d-flex mb-5" key={index}>
                  <div className="post-img">
                    <img
                      src={`https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200+${post}`}
                      alt="Blog"
                    />
                  </div>
                  <div className="post-content pl-4">
                    <p className="post-meta">
                      July 20, 2019 &nbsp; | &nbsp; Admin &nbsp; | &nbsp; 3
                    </p>
                    <h2 className="post-title">
                      Even the all-powerful Pointing has no control about the blind texts
                    </h2>
                    <p className="post-excerpt">
                      Far far away, behind the word mountains, far from the countries
                      Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <button className="read-more-btn">Read more</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Sidebar */}
            <div className="col-md-4 sidebar">
              {/* Search */}
              <div className="sidebar-section mb-4">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                />
              </div>

              {/* Categories */}
              <div className="sidebar-section mb-4">
                <h3 className="sidebar-title">Categories</h3>
                <ul className="category-list">
                  <li>Vegetables <span>(12)</span></li>
                  <li>Fruits <span>(22)</span></li>
                  <li>Juice <span>(37)</span></li>
                  <li>Dries <span>(42)</span></li>
                </ul>
              </div>

              {/* Recent Blog */}
              <div className="sidebar-section mb-4">
                <h3 className="sidebar-title">Recent Blog</h3>
                {[1, 2].map((item, i) => (
                  <div className="recent-blog-item d-flex mb-3" key={i}>
                    <img
                      src={`https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200${item}`}
                      alt="Recent"
                      className="recent-thumb"
                    />
                    <div className="recent-blog-content pl-3">
                      <p className="recent-title">
                        Even the all-powerful Pointing has no control about the blind texts
                      </p>
                      <p className="post-meta-small">
                        April 09, 2019 &nbsp; | &nbsp; Admin &nbsp; | &nbsp; 19
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tag Cloud */}
              <div className="sidebar-section mb-4">
                <h3 className="sidebar-title">Tag Cloud</h3>
                <div className="tag-cloud">
                  {["Fruits", "Tomatoe", "Mango", "Apple", "Carrots", "Orange", "Pepper", "Eggplant"].map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Paragraph */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                  itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt
                  placeat nam vero culpa sapiente consectetur similique, inventore eos
                  fugit cupiditate numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to top button - Fixed at footer */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "50px",
          marginTop: "30px",
        }}
      >
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

export default Blog;
