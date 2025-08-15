import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Blog() {
  const navigate = useNavigate();

  // Add smooth scrolling behavior
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    
    return () => {
      html.style.scrollBehavior = "auto";
    };
  }, []);

  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Even the all-powerful Pointing has no control about the blind texts",
      excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      date: "July 20, 2019",
      author: "Admin",
      comments: 3,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&1"
    },
    {
      id: 2,
      title: "The secret to growing organic vegetables in small spaces",
      excerpt: "Discover how to maximize your garden yield even with limited space using these innovative organic gardening techniques.",
      date: "August 15, 2019",
      author: "Gardener",
      comments: 5,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&2"
    },
    {
      id: 3,
      title: "Seasonal fruits and their health benefits",
      excerpt: "Learn about the nutritional advantages of eating fruits that are in season and how they can boost your immune system.",
      date: "September 5, 2019",
      author: "Nutritionist",
      comments: 7,
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&3"
    },
    {
      id: 4,
      title: "How to preserve vegetables without losing nutrients",
      excerpt: "Expert tips on freezing, drying, and canning vegetables while maintaining their maximum nutritional value.",
      date: "October 12, 2019",
      author: "Chef",
      comments: 2,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&4"
    }
  ];

  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="blog-page">
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
              {blogPosts.map((post) => (
                <div className="blog-post d-flex mb-5" key={post.id}>
                  <div className="post-img">
                    <img
                      src={post.image}
                      alt={`Blog post ${post.id}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="post-content pl-4">
                    <p className="post-meta">
                      {post.date} &nbsp; | &nbsp; {post.author} &nbsp; | &nbsp; {post.comments}
                    </p>
                    <h2 className="post-title">
                      {post.title}
                    </h2>
                    <p className="post-excerpt">
                      {post.excerpt}
                    </p>
                    <button 
                      className="read-more-btn"
                      onClick={() => handleReadMore(post.id)}
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read more
                    </button>
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
                  aria-label="Search blog posts"
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
                {blogPosts.slice(0, 2).map((post) => (
                  <div className="recent-blog-item d-flex mb-3" key={`recent-${post.id}`}>
                    <img
                      src={post.image}
                      alt={`Recent post ${post.id}`}
                      className="recent-thumb"
                      loading="lazy"
                    />
                    <div className="recent-blog-content pl-3">
                      <p className="recent-title">
                        {post.title}
                      </p>
                      <p className="post-meta-small">
                        {post.date} &nbsp; | &nbsp; {post.author} &nbsp; | &nbsp; {post.comments}
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
      <div className="back-to-top-container">
        <button
          className="back-to-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
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
