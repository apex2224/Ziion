import React, { useState } from 'react';
import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 1,
    category: 'MARKETING',
    title: 'CPI vs. CPA vs. CPC: Which Mobile App Promotion Strategy is Best?',
    excerpt: 'Many people find it hard to understand the difference between CPI, CPA, and CPC marketing models. In this comprehensive guide, we break down each approach and help you choose the right strategy for your mobile app.',
    imageUrl: '/images/blog/blog-1.png',
    authorAvatar: '/images/blog/avatar.png',
    date: 'Jul 8',
    url: '#',
  },
  {
    id: 2,
    category: 'SITE NEWS',
    title: 'CrowdStyle Bug: Major Windows BSOD Problem Has Been Fixed',
    excerpt: 'The Blue Screen of Death (BSOD) problem is affecting thousands of users worldwide. Our engineering team has been working around the clock to identify and resolve this critical issue.',
    imageUrl: '/images/blog/blog-2.png',
    authorAvatar: '/images/blog/avatar.png',
    date: 'Jul 20',
    url: '#',
  },
  {
    id: 3,
    category: 'MARKETING',
    title: 'How to use ChatGPT to Market your Android, iOS App in 2023',
    excerpt: 'Every Working Professional, Marketer, developer, and entrepreneur should know how to leverage AI tools like ChatGPT for app marketing. Here are 10 proven strategies to boost your app\'s visibility.',
    imageUrl: '/images/blog/blog-3.png',
    authorAvatar: '/images/blog/avatar.png',
    date: 'Jul 15',
    url: '#',
  },
  {
    id: 4,
    category: 'DEVELOPMENT',
    title: 'The Future of Mobile App Development: Trends to Watch in 2023',
    excerpt: 'As we move further into 2023, several new trends are shaping the mobile app development landscape. From AI integration to sustainability practices, here\'s what you need to know.',
    imageUrl: '/images/blog/blog-4.png',
    authorAvatar: '/images/blog/avatar.png',
    date: 'Aug 2',
    url: '#',
  },
  {
    id: 5,
    category: 'BUSINESS',
    title: 'Maximizing ROI with Cross-Platform App Development',
    excerpt: 'Developing for multiple platforms simultaneously can significantly reduce costs and time-to-market. Learn how to make the most of your cross-platform development strategy.',
    imageUrl: '/images/blog/blog-5.png',
    authorAvatar: '/images/blog/avatar.png',
    date: 'Aug 10',
    url: '#',
  },
  {
    id: 6,
    category: 'TUTORIAL',
    title: 'Step-by-Step Guide to Optimizing Your App Store Presence',
    excerpt: 'Your app store listing is often the first interaction potential users have with your app. Discover how to craft compelling descriptions, choose the right keywords, and design eye-catching screenshots.',
    imageUrl: '/images/blog/blog-6.png',
    authorAvatar: '/images/blog/avatar.png',
    date: 'Aug 18',
    url: '#',
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <span className={styles.tag}>CPIDROID NEWS</span>
        <h2 className={styles.title}>
          Read our <span className={styles.highlight}>news & blogs</span>
        </h2>
        <p className={styles.subtitle}>
          Our duty towards you is to share our experience we're reaching in our
          work path with you.
        </p>
      </div>

      <div className={styles.postGrid}>
        {currentPosts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            <div className={styles.cardImageContainer}>
              <a href={post.url}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className={styles.cardImage}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%22300%22 height%3D%22200%22 viewBox%3D%220 0 300 200%22%3E%3Crect width%3D%22300%22 height%3D%22200%22 fill%3D%22%23f0f0f0%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2250%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-family%3D%22Arial%22 font-size%3D%2216%22 fill%3D%22%23999%22%3EImage Not Available%3C/text%3E%3C/svg%3E';
                  }}
                />
              </a>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>{post.category}</span>
              <h3 className={styles.cardTitle}>
                <a href={post.url}>{post.title}</a>
              </h3>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardFooter}>
                <img
                  src={post.authorAvatar}
                  alt="Author"
                  className={styles.authorAvatar}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 width%3D%2230%22 height%3D%2230%22 viewBox%3D%220 0 30 30%22%3E%3Ccircle cx%3D%2215%22 cy%3D%2215%22 r%3D%2215%22 fill%3D%22%23ddd%22/%3E%3Ctext x%3D%2250%25%22 y%3D%2250%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-family%3D%22Arial%22 font-size%3D%2210%22 fill%3D%22%23666%22%3EU%3C/text%3E%3C/svg%3E';
                  }}
                />
                <span className={styles.cardDate}>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles.paginationControls}>
        <button 
          className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ''}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        <div className={styles.paginationNumbers}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`${styles.pageNumber} ${currentPage === pageNumber ? styles.active : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        
        <button 
          className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ''}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Blog;