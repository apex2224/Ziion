import React, { useState } from "react";
import styles from "./Blog.module.css";
import { FaBook, FaCalendar, FaTag, FaUser, FaSearch, FaRss, FaPen } from "react-icons/fa";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Maximizing ROI with Advanced Fraud Detection",
      excerpt: "Learn how our cutting-edge fraud detection technology can protect your campaigns and improve your return on investment.",
      author: "Alex Johnson",
      date: "September 15, 2025",
      tags: ["Fraud Detection", "ROI", "Campaigns"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Mobile App Marketing",
      excerpt: "Explore emerging trends and strategies that are shaping the future of mobile app marketing in 2025 and beyond.",
      author: "Sarah Williams",
      date: "September 10, 2025",
      tags: ["Mobile Marketing", "Trends", "Apps"],
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Understanding Incent vs Non-Incent Campaigns",
      excerpt: "A comprehensive guide to choosing the right campaign type for your specific goals and target audience.",
      author: "Michael Chen",
      date: "September 5, 2025",
      tags: ["Campaigns", "Incent", "Non-Incent"],
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Optimizing Your CPA Campaigns for Better Results",
      excerpt: "Discover proven techniques to optimize your cost-per-action campaigns and achieve better conversion rates.",
      author: "Emma Rodriguez",
      date: "August 28, 2025",
      tags: ["CPA", "Optimization", "Conversion"],
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Cross-Platform Marketing Strategies",
      excerpt: "How to effectively reach users across Android, iOS, and web platforms with unified campaign strategies.",
      author: "David Kim",
      date: "August 22, 2025",
      tags: ["Cross-Platform", "Android", "iOS", "Web"],
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "The Importance of Quality Traffic in Mobile Marketing",
      excerpt: "Why quality matters more than quantity when it comes to mobile app traffic and user engagement.",
      author: "Jessica Thompson",
      date: "August 15, 2025",
      tags: ["Traffic Quality", "User Engagement", "Mobile Marketing"],
      readTime: "5 min read"
    }
  ];

  const popularTags = [
    "Fraud Detection", "ROI", "Campaigns", "Mobile Marketing", "Trends", 
    "Apps", "Incent", "Non-Incent", "CPA", "Optimization", "Conversion",
    "Cross-Platform", "Android", "iOS", "Web", "Traffic Quality"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    alert(`Filtering posts by tag: ${tag}`);
  };

  const handleReadMore = (postId) => {
    alert(`Reading full article for post ID: ${postId}`);
  };

  const handleLoadMore = () => {
    alert("Loading more articles...");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>CPIDroid Blog</h1>
          <p className={styles.description}>
            Insights, tips, and industry news to help you maximize your mobile app marketing success
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <div className={styles.featuredPost}>
              <div className={styles.postImage}>
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.metaItem}>
                    <FaCalendar className={styles.metaIcon} /> September 18, 2025
                  </span>
                  <span className={styles.metaItem}>
                    <FaUser className={styles.metaIcon} /> Alex Johnson
                  </span>
                  <span className={styles.metaItem}>
                    <FaBook className={styles.metaIcon} /> 10 min read
                  </span>
                </div>
                <h2 className={styles.featuredTitle}>
                  Revolutionizing Mobile App Acquisition with AI-Powered Targeting
                </h2>
                <p className={styles.featuredExcerpt}>
                  Discover how artificial intelligence is transforming the way we approach mobile app user acquisition, 
                  with predictive analytics and personalized targeting that delivers unprecedented results.
                </p>
                <button className={styles.readMoreButton} onClick={() => handleReadMore('featured')}>
                  Read Full Article
                </button>
              </div>
            </div>

            <div className={styles.postsGrid}>
              {blogPosts.map((post) => (
                <div key={post.id} className={styles.postCard}>
                  <div className={styles.postImage}>
                    <div className={styles.imagePlaceholder}></div>
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postMeta}>
                      <span className={styles.metaItem}>
                        <FaCalendar className={styles.metaIcon} /> {post.date}
                      </span>
                      <span className={styles.metaItem}>
                        <FaUser className={styles.metaIcon} /> {post.author}
                      </span>
                    </div>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <div className={styles.postFooter}>
                      <div className={styles.postTags}>
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span 
                            key={index} 
                            className={styles.tag}
                            onClick={() => handleTagClick(tag)}
                          >
                            <FaTag className={styles.tagIcon} /> {tag}
                          </span>
                        ))}
                      </div>
                      <span className={styles.readTime}>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.loadMoreSection}>
              <button className={styles.loadMoreButton} onClick={handleLoadMore}>
                Load More Articles
              </button>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>
                <FaSearch className={styles.widgetIcon} /> Search Blog
              </h3>
              <div className={styles.searchBox}>
                <form onSubmit={handleSearch}>
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit" className={styles.searchButton}>Search</button>
                </form>
              </div>
            </div>

            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>
                <FaRss className={styles.widgetIcon} /> Subscribe
              </h3>
              <p className={styles.widgetText}>
                Get the latest articles delivered directly to your inbox.
              </p>
              <div className={styles.subscribeForm}>
                <form onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className={styles.emailInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className={styles.subscribeButton}>Subscribe</button>
                </form>
              </div>
            </div>

            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>
                <FaTag className={styles.widgetIcon} /> Popular Tags
              </h3>
              <div className={styles.tagsList}>
                {popularTags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`${styles.tag} ${selectedTag === tag ? styles.selectedTag : ''}`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.sidebarWidget}>
              <h3 className={styles.widgetTitle}>
                <FaPen className={styles.widgetIcon} /> Recent Posts
              </h3>
              <div className={styles.recentPosts}>
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className={styles.recentPost}>
                    <h4 className={styles.recentPostTitle}>{post.title}</h4>
                    <div className={styles.recentPostMeta}>
                      <span className={styles.metaItem}>
                        <FaCalendar className={styles.metaIcon} /> {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;