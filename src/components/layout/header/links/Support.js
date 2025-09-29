import React from "react";
import styles from "./Support.module.css";
import { FaBook, FaLifeRing, FaComments, FaGraduationCap, FaTools, FaRocket, FaChartLine, FaUsers, FaMobileAlt, FaShieldAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Support = () => {
  const supportOptions = [
    {
      icon: <FaBook className={styles.optionIcon} />,
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      link: "#"
    },
    {
      icon: <FaLifeRing className={styles.optionIcon} />,
      title: "Help Center",
      description: "Find answers to common questions and issues",
      link: "#"
    },
    {
      icon: <FaComments className={styles.optionIcon} />,
      title: "Community Forum",
      description: "Connect with other publishers and developers",
      link: "#"
    },
    {
      icon: <FaGraduationCap className={styles.optionIcon} />,
      title: "Tutorials",
      description: "Step-by-step guides and video tutorials",
      link: "#"
    }
  ];

  const faqItems = [
    {
      question: "How do I get started with CPIDroid?",
      answer: "Getting started is easy! Sign up for an account, integrate our SDK or ad tags, and launch your first campaign. Our onboarding team will guide you through the process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, PayPal, and major credit cards. Payments are processed monthly for publishers and advertisers."
    },
    {
      question: "How can I optimize my campaign performance?",
      answer: "Our platform provides real-time analytics and optimization tools. We recommend starting with A/B testing different creatives and targeting options to find what works best for your audience."
    },
    {
      question: "What fraud prevention measures do you have?",
      answer: "We use advanced machine learning algorithms and real-time monitoring to detect and prevent fraudulent activity. Our fraud detection system protects both publishers and advertisers."
    }
  ];

  const features = [
    {
      icon: <FaTools className={styles.featureIcon} />,
      title: "Developer Tools",
      description: "SDKs, plugins, and code samples for easy integration"
    },
    {
      icon: <FaRocket className={styles.featureIcon} />,
      title: "Quick Setup",
      description: "Get your campaigns running in minutes with our intuitive platform"
    },
    {
      icon: <FaChartLine className={styles.featureIcon} />,
      title: "Analytics Dashboard",
      description: "Real-time performance tracking with customizable reports"
    },
    {
      icon: <FaUsers className={styles.featureIcon} />,
      title: "Dedicated Support",
      description: "Personal account managers for enterprise clients"
    },
    {
      icon: <FaMobileAlt className={styles.featureIcon} />,
      title: "Cross-Platform",
      description: "Support for iOS, Android, and web applications"
    },
    {
      icon: <FaShieldAlt className={styles.featureIcon} />,
      title: "Security",
      description: "Enterprise-grade security with data encryption and compliance"
    }
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>CPIDroid Support Center</h1>
            <p className={styles.heroSubtitle}>
              Get the help you need to succeed with our comprehensive support resources
            </p>
          </div>
        </div>

        <div className={styles.supportOptions}>
          <h2 className={styles.sectionTitle}>Support Resources</h2>
          <div className={styles.optionsGrid}>
            {supportOptions.map((option, index) => (
              <div key={index} className={styles.optionCard}>
                <div className={styles.optionIconWrapper}>{option.icon}</div>
                <h3 className={styles.optionTitle}>{option.title}</h3>
                <p className={styles.optionDescription}>{option.description}</p>
                <a href={option.link} className={styles.optionLink}>Learn More</a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqItems.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Platform Features</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIconWrapper}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Need Direct Assistance?</h2>
          <p className={styles.contactDescription}>
            Our support team is available 24/7 to help you with any questions or issues.
          </p>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <FaComments className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactMethodTitle}>Live Chat</h3>
                <p className={styles.contactMethodDescription}>Available 24/7 for instant support</p>
              </div>
            </div>
            <div className={styles.contactMethod}>
              <FaEnvelope className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactMethodTitle}>Email Support</h3>
                <p className={styles.contactMethodDescription}>support@cpidroid.com - Response within 24 hours</p>
              </div>
            </div>
            <div className={styles.contactMethod}>
              <FaPhone className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactMethodTitle}>Phone Support</h3>
                <p className={styles.contactMethodDescription}>+1 (555) 123-4567 - Mon-Fri, 9AM-6PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;