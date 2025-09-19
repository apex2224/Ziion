import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./Support.module.css";
import { FaQuestionCircle, FaBook, FaComments, FaSearch, FaEnvelope, FaPhone, FaTicketAlt, FaClipboardList, FaUserFriends, FaTools, FaChartLine } from "react-icons/fa";

const Support = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  const supportCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <FaBook className={styles.categoryIcon} />,
      articles: [
        { id: 1, title: "Creating Your First Campaign", views: 1250 },
        { id: 2, title: "Setting Up Your Account", views: 980 },
        { id: 3, title: "Understanding Pricing Models", views: 1450 },
        { id: 4, title: "Connecting Payment Methods", views: 870 }
      ]
    },
    {
      id: "campaigns",
      title: "Campaign Management",
      icon: <FaClipboardList className={styles.categoryIcon} />,
      articles: [
        { id: 5, title: "Optimizing Campaign Performance", views: 1120 },
        { id: 6, title: "Targeting Specific Audiences", views: 950 },
        { id: 7, title: "Setting Up Conversion Tracking", views: 870 },
        { id: 8, title: "A/B Testing Your Campaigns", views: 720 }
      ]
    },
    {
      id: "billing",
      title: "Billing & Payments",
      icon: <FaChartLine className={styles.categoryIcon} />,
      articles: [
        { id: 9, title: "Understanding Your Invoice", views: 650 },
        { id: 10, title: "Payment Methods Accepted", views: 580 },
        { id: 11, title: "Refund Policy", views: 420 },
        { id: 12, title: "Managing Your Budget", views: 780 }
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: <FaTools className={styles.categoryIcon} />,
      articles: [
        { id: 13, title: "Common Campaign Issues", views: 920 },
        { id: 14, title: "Tracking Not Working", views: 750 },
        { id: 15, title: "Payment Processing Errors", views: 620 },
        { id: 16, title: "Account Access Problems", views: 540 }
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does it take to set up my first campaign?",
      answer: "Most users can set up their first campaign in under 15 minutes. Our intuitive dashboard guides you through each step of the process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for larger accounts. All payments are processed securely through our PCI-compliant payment processor."
    },
    {
      question: "How can I track my campaign performance?",
      answer: "Our real-time dashboard provides detailed analytics on impressions, clicks, installs, and conversions. You can also export data in various formats for further analysis."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 email support for all users, with priority phone support for Enterprise accounts. Our knowledge base is continuously updated with new articles and tutorials."
    }
  ];

  const contactMethods = [
    {
      icon: <FaEnvelope className={styles.contactIcon} />,
      title: "Email Support",
      description: "Send us a message and we'll respond within 24 hours",
      action: "support@cpidroid.com"
    },
    {
      icon: <FaPhone className={styles.contactIcon} />,
      title: "Phone Support",
      description: "Call us during business hours for immediate assistance",
      action: "+1 (800) 555-1234"
    },
    {
      icon: <FaTicketAlt className={styles.contactIcon} />,
      title: "Submit a Ticket",
      description: "Create a support ticket for complex issues",
      action: "Open Ticket"
    },
    {
      icon: <FaComments className={styles.contactIcon} />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat"
    }
  ];

  const filteredCategories = supportCategories.map(category => {
    if (!searchQuery) return category;
    
    const filteredArticles = category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return {
      ...category,
      articles: filteredArticles
    };
  }).filter(category => category.articles.length > 0);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>CPIDroid Support Center</h1>
          <p className={styles.description}>
            Find answers to your questions, get help with your campaigns, and connect with our support team
          </p>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search our knowledge base..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <div className={styles.categoriesSection}>
              <h2 className={styles.sectionTitle}>Knowledge Base</h2>
              <div className={styles.categoryTabs}>
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`${styles.categoryTab} ${activeCategory === category.id ? styles.activeTab : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className={styles.tabIcon}>{category.icon}</div>
                    <span className={styles.tabText}>{category.title}</span>
                  </button>
                ))}
              </div>

              <div className={styles.articlesList}>
                {supportCategories
                  .find(category => category.id === activeCategory)
                  ?.articles.map((article) => (
                    <div key={article.id} className={styles.articleCard}>
                      <h3 className={styles.articleTitle}>{article.title}</h3>
                      <div className={styles.articleMeta}>
                        <span className={styles.views}>{article.views} views</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className={styles.faqSection}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>
                      <FaQuestionCircle className={styles.faqIcon} /> {faq.question}
                    </h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.contactSection}>
              <h3 className={styles.sidebarTitle}>Contact Support</h3>
              <div className={styles.contactMethods}>
                {contactMethods.map((method, index) => (
                  <div key={index} className={styles.contactMethod}>
                    <div className={styles.contactIconWrapper}>{method.icon}</div>
                    <div className={styles.contactDetails}>
                      <h4 className={styles.contactTitle}>{method.title}</h4>
                      <p className={styles.contactDescription}>{method.description}</p>
                      <button className={styles.contactAction}>{method.action}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.communitySection}>
              <h3 className={styles.sidebarTitle}>Community</h3>
              <div className={styles.communityCard}>
                <div className={styles.communityIcon}>
                  <FaUserFriends className={styles.communityIconSvg} />
                </div>
                <h4 className={styles.communityTitle}>Join Our Community</h4>
                <p className={styles.communityDescription}>
                  Connect with other CPIDroid users, share tips, and get advice from our experts.
                </p>
                <button className={styles.communityButton}>Join Now</button>
              </div>
            </div>

            <div className={styles.resourcesSection}>
              <h3 className={styles.sidebarTitle}>Additional Resources</h3>
              <div className={styles.resourceLinks}>
                <a href="#" className={styles.resourceLink}>API Documentation</a>
                <a href="#" className={styles.resourceLink}>Webinars & Training</a>
                <a href="#" className={styles.resourceLink}>Case Studies</a>
                <a href="#" className={styles.resourceLink}>Release Notes</a>
                <a href="#" className={styles.resourceLink}>Status Page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;