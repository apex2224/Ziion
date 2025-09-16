import React, { useState } from "react";
import styles from "./FAQ.module.css";

const leftColumnFaqs = [
  {
    id: 1,
    question: "What is CPIDroid?",
    answer:
      "CPIDroid is a leading ad-tech platform specializing in mobile app promotion. We help developers and marketers acquire high-quality users for their Android and iOS apps through various performance-based marketing models like CPI, CPA, and CPC.",
  },
  {
    id: 2,
    question: "How does CPIDroid work?",
    answer:
      "Advertisers create a campaign on our platform, set their targeting parameters, and upload their app. Our system then promotes the app across our vast network of publishers. You pay only for the installs or actions you receive.",
  },
  {
    id: 3,
    question: "What is CPI advertising?",
    answer:
      "CPI (Cost Per Install) is a pricing model where advertisers pay a fixed or bid-based price for each verified installation of their mobile app. It's a popular and effective method for boosting user acquisition.",
  },
  {
    id: 4,
    question: "How do I promote my app on CPIDroid?",
    answer:
      "Simply sign up for an advertiser account, create a new campaign, set your budget and targeting (geo, device, etc.), and submit your app for review. Once approved, your campaign will go live.",
  },
  {
    id: 5,
    question: "How do I set a CPI bid?",
    answer:
      "Our platform provides bidding suggestions based on your targeting criteria. You can set a custom bid based on your budget and user acquisition goals. A competitive bid helps ensure your campaign gets premium traffic.",
  },
  {
    id: 6,
    question: "What platforms or regions does CPIDroid support?",
    answer:
      "We support both Android (Google Play Store) and iOS (Apple App Store). Our network has global reach, allowing you to target users in virtually any country or region worldwide.",
  },
  {
    id: 7,
    question: "Is there a minimum budget required to start a campaign?",
    answer:
      "We offer flexible options for all budget sizes. While there may be a small minimum deposit to fund your account, there is no large-scale minimum budget required to start your first campaign.",
  },
];

// Data for the right column
const rightColumnFaqs = [
  {
    id: 8,
    question: "How can I track the performance of my campaign?",
    answer:
      "Our advertiser dashboard provides real-time, detailed analytics. You can track installs, clicks, spending, CPI, and other key metrics. We also support S2S (server-to-server) tracking integration with major attribution providers.",
  },
  {
    id: 9,
    question: "How can I deposit funds for my campaign?",
    answer:
      "We support a wide variety of payment methods, including credit cards (Stripe), PayPal, Payoneer, wire transfers, and popular cryptocurrencies. You can add funds directly from your account dashboard.",
  },
  {
    id: 10,
    question: "Can I pause or stop a campaign at any time?",
    answer:
      "Yes, you have full control over your campaigns. You can pause, resume, or stop any campaign at any time directly from your advertiser dashboard. Changes are reflected almost instantly.",
  },
  {
    id: 11,
    question: "What happens if my budget runs out?",
    answer:
      "When your campaign or account budget is depleted, your campaigns will be automatically paused to prevent overspending. You will be notified, and you can resume them after depositing more funds.",
  },
  {
    id: 12,
    question: "How do I contact CPIDroid support?",
    answer:
      "We offer 24/7 support via live chat, email (support@cpidroid.com), and a ticket system in your dashboard. Our dedicated account managers are also available to help you optimize your campaigns.",
  },
  {
    id: 13,
    question:
      "Are there any restrictions on the types of apps that can be promoted?",
    answer:
      "We do not accept apps that contain malware, promote illegal activities, or violate our terms of service. All apps go through a quick review process to ensure quality and safety for our users.",
  },
  {
    id: 14,
    question: "Is CPIDroid safe and secure?",
    answer:
      "Absolutely. We use industry-standard security protocols to protect your data and payment information. We also have proprietary anti-fraud systems to ensure you only pay for real, high-quality installs.",
  },
];

// A reusable component for each FAQ item
const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={styles.faqItem}>
      <h3>
        <button
          className={styles.questionButton}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <span className={styles.questionText}>{faq.question}</span>
          <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
        </button>
      </h3>
      <div
        id={`faq-answer-${faq.id}`}
        className={`${styles.answer} ${isOpen ? styles.open : ""}`}
        role="region"
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    // If the same item is clicked, close it. Otherwise, open the new one.
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <span className={styles.tag}>FAQ</span>
        <h2 className={styles.title}>App Marketing Services FAQs</h2>
        <p className={styles.subtitle}>
          Want more information? <a href="#">Explore knowledge base</a>
        </p>
      </div>

      <div className={styles.faqGrid}>
        <div className={styles.faqColumn}>
          {leftColumnFaqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
        <div className={styles.faqColumn}>
          {rightColumnFaqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          Want more FAQs? <a href="/">Explore more faqs</a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
