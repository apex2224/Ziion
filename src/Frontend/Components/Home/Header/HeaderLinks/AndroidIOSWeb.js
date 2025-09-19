import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./AndroidIOSWeb.module.css";
import { FaAndroid, FaApple, FaGlobe, FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";

const AndroidIOSWeb = () => {
  const platforms = [
    {
      icon: <FaAndroid className={styles.platformIcon} />,
      title: "Android",
      description: "Reach millions of Android users through our extensive network of publishers and traffic sources."
    },
    {
      icon: <FaApple className={styles.platformIcon} />,
      title: "iOS",
      description: "Target iOS users with precision campaigns designed for Apple's ecosystem."
    },
    {
      icon: <FaGlobe className={styles.platformIcon} />,
      title: "Web",
      description: "Drive traffic to your web applications and services with our global reach."
    }
  ];

  const devices = [
    {
      icon: <FaMobileAlt className={styles.deviceIcon} />,
      title: "Smartphones",
      description: "Target users on mobile devices for maximum engagement and conversions."
    },
    {
      icon: <FaTabletAlt className={styles.deviceIcon} />,
      title: "Tablets",
      description: "Reach tablet users for a premium advertising experience."
    },
    {
      icon: <FaDesktop className={styles.deviceIcon} />,
      title: "Desktop",
      description: "Don't forget desktop users with our cross-platform campaign solutions."
    }
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Android, iOS & Web Solutions</h1>
          <p className={styles.description}>
            Reach users across all platforms and devices with our comprehensive multi-platform campaign solutions
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Universal Platform Coverage</h2>
              <p>
                Our advanced platform targeting ensures your app reaches the right users, 
                regardless of their device or operating system. With support for Android, 
                iOS, and web platforms, you can maximize your campaign reach.
              </p>
              <p>
                We provide specialized optimization for each platform to ensure the best 
                possible performance and user experience.
              </p>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <svg viewBox="0 0 400 300" className={styles.decorativeSvg}>
                <rect x="50" y="50" width="100" height="200" rx="10" fill="#3DDC84" />
                <rect x="170" y="70" width="70" height="160" rx="35" fill="#000000" />
                <rect x="260" y="90" width="90" height="120" rx="5" fill="#4285F4" />
                <circle cx="100" cy="220" r="5" fill="#FFFFFF" />
                <circle cx="205" cy="200" r="3" fill="#FFFFFF" />
                <rect x="300" y="130" width="20" height="20" rx="2" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.platformsSection}>
          <h2 className={styles.platformsTitle}>Platform-Specific Solutions</h2>
          <div className={styles.platformsGrid}>
            {platforms.map((platform, index) => (
              <div key={index} className={styles.platformCard}>
                <div className={styles.platformIconWrapper}>{platform.icon}</div>
                <h3 className={styles.platformTitle}>{platform.title}</h3>
                <p className={styles.platformDescription}>{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.devicesSection}>
          <h2 className={styles.devicesTitle}>Device Targeting Options</h2>
          <div className={styles.devicesGrid}>
            {devices.map((device, index) => (
              <div key={index} className={styles.deviceCard}>
                <div className={styles.deviceIconWrapper}>{device.icon}</div>
                <h3 className={styles.deviceTitle}>{device.title}</h3>
                <p className={styles.deviceDescription}>{device.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Cross-Platform Advantages</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Unified Dashboard</h3>
              <p>Manage all your campaigns from a single interface</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Consistent Branding</h3>
              <p>Maintain your brand identity across all platforms</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Optimized Performance</h3>
              <p>Platform-specific optimization for better results</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Global Reach</h3>
              <p>Access users worldwide on any device</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Go Cross-Platform?</h2>
          <p className={styles.ctaSubtitle}>
            Launch campaigns across Android, iOS, and Web with a single setup
          </p>
          <button className={styles.ctaButton}>
            Start Campaign Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AndroidIOSWeb;