import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./BoostEngagement.module.css";
import { FaCheckCircle, FaBullseye, FaChartLine, FaLightbulb } from "react-icons/fa";

const BoostEngagement = () => {
  const benefits = [
    {
      icon: <FaCheckCircle className={styles.benefitIcon} />,
      title: "Targeted Conversions",
      description: "Focus your budget on users who are most likely to complete valuable in-app actions, maximizing your ROI."
    },
    {
      icon: <FaBullseye className={styles.benefitIcon} />,
      title: "Action-Based Pricing",
      description: "Pay only for completed actions, not just installs. This ensures you get real value for your advertising spend."
    },
    {
      icon: <FaChartLine className={styles.benefitIcon} />,
      title: "Performance Tracking",
      description: "Detailed analytics show exactly which actions users are completing, helping you optimize campaigns."
    },
    {
      icon: <FaLightbulb className={styles.benefitIcon} />,
      title: "Flexible Campaigns",
      description: "Create custom conversion flows that match your app's unique user journey and business objectives."
    }
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Boost Engagements with our CPA Campaigns</h1>
          <p className={styles.description}>
            Boost your app engagement by targeting the users ready to perform in-app
            actions within your app such as Registration, Subscribe, Purchase, Earn
            Coins, Reach Level, and more.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textSection}>
              <p>
                You will pay only when a user completes the full conversion flow
                including the in-app action as defined by you, thanks to our CPA
                campaigns which enable you to bid directly for action-based
                conversions such as:
              </p>
              <ul className={styles.benefitsList}>
                <li>Install + Open + Register</li>
                <li>Install + Open + Subscribe</li>
                <li>Install + Open + Earn X Coins</li>
                <li>Install + Open + Play + Reach Level X</li>
                <li>Install + Open + Send Invite</li>
              </ul>
              <p>
                So no worries, you will be charged only when a user performs the
                action defined by you. Otherwise, the install will be totally free of
                charge.
              </p>
            </div>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.svgContainer}>
              <svg viewBox="-370 -320 740 640" className={styles.decorativeSvg}>
                <path 
                  fill="rgb(255,150,201)" 
                  fillOpacity="1" 
                  d="M352.6910095214844,311.114013671875 C355.9360046386719,268.0979919433594 355.3340759277344,196.76502990722656 341.330078125,155.00502014160156 C318.3470764160156,86.46702575683594 292.8929138183594,47.87361145019531 301.7319030761719,-23.2913875579834 C306.8959045410156,-64.87139129638672 309.8370056152344,-110.08999633789062 307.27301025390625,-151.86500549316406 C302.4729919433594,-230.0760040283203 203.18910217285156,-301.7352294921875 119.95124816894531,-291.1443176269531 C5.615096569061279,-273.5538024902344 -106.12289428710938,-281.7947082519531 -187.23989868164062,-223.95770263671875 C-268.3569030761719,-166.12069702148438 -300.6529846191406,-141.08126831054688 -340.35198974609375,-54.912261962890625 C-350.8580017089844,-32.107261657714844 -366.4566650390625,28.23670196533203 -356.41668701171875,51.212703704833984 C-342.0916748046875,83.9926986694336 -305.0307312011719,98.20101165771484 -285.8817443847656,128.9080047607422 C-266.75775146484375,159.57200622558594 -290.2789001464844,190.2750244140625 -313.5398864746094,218.51202392578125 C-336.7998962402344,246.74801635742188 -354.2181396484375,261.8172912597656 -353.2869873046875,311.24798583984375 C-353.2869873046875,311.24798583984375 352.6910095214844,311.114013671875 352.6910095214844,311.114013671875z"
                />
              </svg>
            </div>
            <lottie-player
              src="https://assets4.lottiefiles.com/private_files/lf30_zfYY24.json"
              background="transparent"
              speed="1"
              className={styles.lottiePlayer}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <div className={styles.keyBenefits}>
          <h2 className={styles.keyBenefitsTitle}>Why Choose Our CPA Campaigns</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                {benefit.icon}
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Boost Your Engagements?</h2>
          <p className={styles.ctaSubtitle}>
            Start your CPA campaign today and see the difference in user quality and engagement
          </p>
          <button className={styles.ctaButton}>
            Get Started Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BoostEngagement;
