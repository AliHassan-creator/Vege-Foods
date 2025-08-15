import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function BlogSingle() {
  const navigate = useNavigate();

  // global smooth scroll (restored on unmount)
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = prev || "auto";
    };
  }, []);

  // Main article (content reflects screenshots)
  const article = {
    title: "Organic foods is good for your health",
    lead:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.",
    hero:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop",
    blocks: [
      "Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis culpa architecto voluptatum quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit.",
      "Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!",
    ],
    subheading: "#2. Creative WordPress Themes",
    subtext:
      "Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat, quo officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.",
    inlineImage:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["Life", "Sport", "Tech", "Travel"],
    author: {
      name: "Lance Smith",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!",
    },
  };

  // Right-sidebar recent cards (same shape as your previous page)
  const recent = [
    {
      id: 1,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      date: "April 09, 2019",
      author: "Admin",
      comments: 19,
      image:
        "https://images.unsplash.com/photo-1522184216315-dc2a82b3a7e3?q=80&w=300&auto=format&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=160&auto=format&fit=crop",
    },
    {
      id: 2,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      date: "April 09, 2019",
      author: "Admin",
      comments: 19,
      image:
        "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=300&auto=format&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=160&auto=format&fit=crop",
    },
    {
      id: 3,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      date: "April 09, 2019",
      author: "Admin",
      comments: 19,
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=300&auto=format&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=160&auto=format&fit=crop",
    },
  ];

  // Right sidebar meta lists
  const categories = [
    { name: "Vegetables", count: 12 },
    { name: "Fruits", count: 22 },
    { name: "Juice", count: 37 },
    { name: "Dries", count: 42 },
  ];
  const tagCloud = [
    "Fruits",
    "Tomatoe",
    "Mango",
    "Apple",
    "Carrots",
    "Orange",
    "Pepper",
    "Eggplant",
  ];

  // Sample comments (avatars are small web images)
  const comments = [
    {
      id: 1,
      name: "John Doe",
      when: "June 27, 2018 at 2:21pm",
      avatar: "https://i.pravatar.cc/64?img=12",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    },
    {
      id: 2,
      name: "John Doe",
      when: "June 27, 2018 at 2:21pm",
      avatar: "https://i.pravatar.cc/64?img=48",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    },
    {
      id: 3,
      name: "John Doe",
      when: "June 27, 2018 at 2:21pm",
      avatar: "https://i.pravatar.cc/64?img=7",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    },
    {
      id: 4,
      name: "John Doe",
      when: "June 27, 2018 at 2:21pm",
      avatar: "https://i.pravatar.cc/64?img=22",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    },
    {
      id: 5,
      name: "John Doe",
      when: "June 27, 2018 at 2:21pm",
      avatar: "https://i.pravatar.cc/64?img=28",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    },
    {
      id: 6,
      name: "John Doe",
      when: "June 27, 2018 at 2:21pm",
      avatar: "https://i.pravatar.cc/64?img=64",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
    },
  ];

  const handleRecentClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // mimic submit + scroll to top as requested
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="single-page">
      {/* Hero (already styled globally) */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-subtitle">Home Blog</p>
          <h1 className="about-title">Blog</h1>
        </div>
      </div>

      {/* Body */}
      <section className="single-section">
        <div className="container">
          <div className="row">
            {/* ===== Left: Article ===== */}
            <div className="col-md-8">
              <article className="single-article">
                <h1 className="article-title">{article.title}</h1>
                <p className="article-lead">{article.lead}</p>

                <div className="article-figure">
                  <img src={article.hero} alt="Colorful organic salad" />
                </div>

                {article.blocks.map((p, i) => (
                  <p key={i} className="article-paragraph">
                    {p}
                  </p>
                ))}

                <h2 className="article-subtitle">{article.subheading}</h2>
                <p className="article-paragraph">{article.subtext}</p>

                <div className="article-figure">
                  <img src={article.inlineImage} alt="Fresh peas on plate" />
                </div>

                {/* Tags (chips) */}
                <div className="article-tags">
                  {article.tags.map((t) => (
                    <span key={t} className="article-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Author box */}
                <div className="author-box">
                  <img
                    className="author-avatar"
                    src={article.author.avatar}
                    alt={article.author.name}
                  />
                  <div className="author-meta">
                    <h3 className="author-name">{article.author.name}</h3>
                    <p className="author-bio">{article.author.bio}</p>
                  </div>
                </div>

                {/* Comments */}
                <div className="comments">
                  <h3 className="comments-title">6 Comments</h3>
                  <ul className="comment-list">
                    {comments.map((c) => (
                      <li key={c.id} className="comment">
                        <img
                          className="comment-avatar"
                          src={c.avatar}
                          alt={c.name}
                        />
                        <div className="comment-body">
                          <h4 className="comment-author">{c.name}</h4>
                          <div className="comment-meta">
                            {c.when.toUpperCase()}
                          </div>
                          <p className="comment-text">{c.text}</p>
                          <button className="comment-reply" type="button">
                            Reply
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Leave a comment */}
                <div className="leave-comment">
                  <h3 className="leave-title">Leave a Comment</h3>
                  <form className="comment-form" onSubmit={handleSubmitComment}>
                    <div className="form-grid">
                      <div className="form-field">
                        <label htmlFor="c-name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="c-email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="c-website" className="sr-only">
                          Website
                        </label>
                        <input
                          id="c-website"
                          type="url"
                          placeholder="Website"
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="c-message" className="sr-only">
                        Comment
                      </label>
                      <textarea
                        id="c-message"
                        rows="6"
                        placeholder="Your Comment"
                        required
                      />
                    </div>

                    <button type="submit" className="submit-btn">
                      Post Comment
                    </button>
                  </form>
                </div>
              </article>
            </div>

            {/* ===== Right: Sidebar (unchanged content, new class names) ===== */}
            <div className="col-md-4 single-sidebar">
              {/* Search */}
              <div className="sidebar-section mb-4">
                <input
                  type="text"
                  className="single-search-input"
                  placeholder="Search..."
                  aria-label="Search blog posts"
                />
              </div>

              {/* Categories */}
              <div className="sidebar-section mb-4">
                <h3 className="sidebar-title">Categories</h3>
                <ul className="single-category-list">
                  {categories.map((c) => (
                    <li key={c.name}>
                      <span>{c.name}</span>
                      <span>({c.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Blog */}
              <div className="sidebar-section mb-4">
                <h3 className="sidebar-title">Recent Blog</h3>
                {recent.map((post) => (
                  <button
                    key={post.id}
                    className="single-recent-item"
                    onClick={() => handleRecentClick(post.id)}
                    aria-label={`Open ${post.title}`}
                    type="button"
                  >
                    <img
                      src={post.thumb}
                      alt="recent thumbnail"
                      className="single-recent-thumb"
                      loading="lazy"
                    />
                    <div className="single-recent-content">
                      <p className="single-recent-title">{post.title}</p>
                      <p className="single-post-meta-small">
                        {post.date} &nbsp; | &nbsp; {post.author} &nbsp; | &nbsp;{" "}
                        {post.comments}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Tag Cloud */}
              <div className="sidebar-section mb-4">
                <h3 className="sidebar-title">Tag Cloud</h3>
                <div className="single-tag-cloud">
                  {tagCloud.map((tag, i) => (
                    <span key={i} className="single-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Paragraph */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to top button (kept for convenience) */}
      <div className="single-back-to-top-container">
        <button
          className="single-back-to-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
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

export default BlogSingle;
