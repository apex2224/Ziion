import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./AndroidAPKInstalls.module.css";
import { FaAndroid, FaDownload, FaFileAlt, FaChartLine, FaBolt } from "react-icons/fa";

const AndroidAPKInstalls = () => {
  const benefits = [
    {
      icon: <FaDownload className={styles.benefitIcon} />,
      title: "Direct Distribution",
      description: "Deliver your APK files directly to users without app store restrictions."
    },
    {
      icon: <FaFileAlt className={styles.benefitIcon} />,
      title: "Flexible Deployment",
      description: "Install apps directly from APK files for beta testing or enterprise use."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Performance Tracking",
      description: "Monitor installation rates and user engagement with detailed analytics."
    },
    {
      icon: <FaAndroid className={styles.benefitIcon} />,
      title: "Wide Compatibility",
      description: "Reach users across all Android versions and device types."
    }
  ];

  const features = [
    "Direct APK file distribution",
    "Advanced fraud prevention technology",
    "Real-time performance analytics",
    "Flexible targeting options",
    "A/B testing capabilities",
    "24/7 customer support"
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Android APK Installs</h1>
          <p className={styles.description}>
            Distribute your Android apps directly through APK files without app store limitations
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <h2 className={styles.sectionTitle}>Direct APK Distribution</h2>
              <p>
                Our Android APK install campaigns allow you to distribute your apps directly to users 
                through APK files. This approach bypasses app store restrictions and enables you to 
                reach users who prefer direct installation methods.
              </p>
              <p>
                Whether you're conducting beta tests, distributing enterprise apps, or reaching 
                users in regions with limited app store access, APK installs provide the flexibility 
                you need to grow your user base.
              </p>
              
              <div className={styles.featuresList}>
                <h3 className={styles.featuresTitle}>Key Features:</h3>
                <ul className={styles.features}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <FaBolt className={styles.featureIcon} /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <svg viewBox="0 0 300 300" className={styles.decorativeSvg}>
                <rect x="50" y="50" width="200" height="200" rx="20" fill="#3DDC84" />
                <rect x="100" y="100" width="100" height="100" rx="10" fill="#FFFFFF" />
                <text x="150" y="155" textAnchor="middle" fill="#3DDC84" fontSize="30" fontWeight="bold">APK</text>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Benefits of APK Installs</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIconWrapper}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.howItWorksSection}>
          <h2 className={styles.howItWorksTitle}>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Upload APK</h3>
              <p>Upload your APK file to our secure platform</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Set Campaign</h3>
              <p>Define your targeting and budget parameters</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Distribute</h3>
              <p>Users download and install your APK directly</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Track</h3>
              <p>Monitor performance with real-time analytics</p>
            </div>
          </div>
        </div>

        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Options</h2>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Starter</h3>
              <div className={styles.pricingPrice}>$0.40</div>
              <div className={styles.pricingDescription}>per install</div>
              <ul className={styles.pricingFeatures}>
                <li>100MB max APK size</li>
                <li>1,000+ daily installs</li>
                <li>Basic analytics</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Professional</h3>
              <div className={styles.pricingPrice}>$0.35</div>
              <div className={styles.pricingDescription}>per install</div>
              <ul className={styles.pricingFeatures}>
                <li>500MB max APK size</li>
                <li>10,000+ daily installs</li>
                <li>Advanced analytics</li>
                <li>A/B testing</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
            
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingName}>Enterprise</h3>
              <div className={styles.pricingPrice}>Custom</div>
              <div className={styles.pricingDescription}>volume discounts</div>
              <ul className={styles.pricingFeatures}>
                <li>Unlimited APK size</li>
                <li>100,000+ daily installs</li>
                <li>Premium analytics</li>
                <li>Dedicated manager</li>
                <li>API access</li>
              </ul>
              <button className={styles.pricingButton}>Contact Sales</button>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Distribute Your APK?</h2>
          <p className={styles.ctaSubtitle}>
            Start driving direct APK installs for your Android app today
          </p>
          <button className={styles.ctaButton}>
            Create APK Campaign
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AndroidAPKInstalls;