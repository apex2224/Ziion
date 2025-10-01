import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewAllPlans.module.css";
import FAQ from "../../sections/rbf-faq/FAQ";
import { FaCheckCircle, FaFire, FaArrowRight } from "react-icons/fa";

const pricingPlans = [
  {
    id: 1,
    title: "CPI Campaign | S2S",
    price: "7.04",
    features: [
      "S2S Integration",
      "SDK Specifications",
      "GEO/Country Targeting",
      "Device Targeting",
      "Deep-Level Targeting",
      "Dedicated Account Manager/Support",
    ],
  },
  {
    id: 2,
    title: "CPI Campaign | Non S2S",
    price: "7.04",
    isHot: true,
    features: [
      "No S2S Integration",
      "No SDK Specifications",
      "GEO/Country Targeting",
      "Device Targeting",
      "Deep-Level Targeting",
      "No Dedicated Account Manager/Support",
    ],
  },
  {
    id: 3,
    title: "CPC Campaign | Keyword",
    price: "22.00",
    features: [
      "Keyword Search",
      "High Support 24x7",
      "GEO Targeting",
      "Device Targeting",
      "Deep-Level Targeting",
      "Get Installers directly from search",
      "Also available as search Ads in our Offerwall",
    ],
  },
];

const specialCampaigns = [
  {
    id: 1,
    title: "Manager | High Volume",
    description: "Get high volume installs (upto 1M/day) for your app.",
    isBlue: true,
  },
  {
    id: 2,
    title: "Keyword Search",
    description: "Get installs on your keyword (upto 10K/day) for your app.",
    isBlue: false,
  },
  {
    id: 3,
    title: "High Retention",
    description: "Get 30-Days retention installs (upto 5K/day) for your app.",
    isBlue: false,
  },
];

// --- Sub-Components (defined in the same file for simplicity) ---

const PricingCard = ({ plan }) => {
  const navigate = useNavigate();
  
  const handleSeeDetailsClick = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.pricingCard}>
      {plan.isHot && (
        <span className={styles.hotBadge}>
          <FaFire /> Hot
        </span>
      )}
      <h3 className={styles.cardTitle}>{plan.title}</h3>
      <div className={styles.price}>
        <span className={styles.currency}>₹</span>
        {plan.price}
        <span className={styles.perConversion}> per successful conversion</span>
      </div>
      <ul className={styles.features}>
        {plan.features.map((feature, index) => (
          <li key={index}>
            <FaCheckCircle className={styles.checkIcon} /> {feature}
          </li>
        ))}
      </ul>
      <button 
        className={styles.seeDetailsButton}
        onClick={handleSeeDetailsClick}
      >
        See Details
      </button>
    </div>
  );
};

const SpecialCard = ({ campaign }) => {
  const navigate = useNavigate();
  
  const handleSeeDetailsClick = () => {
    navigate("/signup");
  };

  return (
    <div
      className={`${styles.specialCard} ${
        campaign.isBlue ? styles.blueCard : ""
      }`}
    >
      <h4>{campaign.title}</h4>
      <p>{campaign.description}</p>
      <a 
        href="#" 
        className={styles.seeDetailsLink}
        onClick={(e) => {
          e.preventDefault();
          handleSeeDetailsClick();
        }}
      >
        See Details <FaArrowRight />
      </a>
    </div>
  );
};

const BuyInstallCard = ({ title, description, isAndroid }) => {
  const navigate = useNavigate();
  
  const handleViewPlansClick = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.buyInstallCard}>
      <div className={styles.buyInstallContent}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a 
          href="#" 
          className={styles.viewPlansLink}
          onClick={(e) => {
            e.preventDefault();
            handleViewPlansClick();
          }}
        >
          View Plans <FaArrowRight />
        </a>
      </div>
      <div className={styles.buyInstallImage}>
        {/* Placeholder for the phone images */}
        <div className={isAndroid ? styles.androidPhone : styles.iosPhone}></div>
      </div>
    </div>
  );
};

// --- Main Component ---

const ViewAllPlans = () => {
  const navigate = useNavigate();
  
  const handleStartClick = () => {
    navigate("/signup");
  };

  const handleKnowMoreClick = () => {
    navigate("/contact");
  };

  return (
    <div className={styles.viewAllPlansPage}>
      {/* This div creates the blue wave at the top */}
      <div className={styles.blueWaveBg}></div>

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h2>
            Find the <strong>right Campaign</strong> & <strong>Pricing</strong>{" "}
            for your Android/iOS app
          </h2>
          <div className={styles.heroButtonGroup}>
            <button 
              className={styles.startButton}
              onClick={handleStartClick}
            >
              Start
            </button>
            <button 
              className={styles.knowMoreButton}
              onClick={handleKnowMoreClick}
            >
              Know more
            </button>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className={styles.pricingCardsSection}>
          <div className={styles.cardsContainer}>
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className={styles.disclaimer}>
            *Pricing varies country to country, above price is for IN (India)
            only.
          </p>
          <div className={styles.customLinks}>
            <a href="#">Extra user offer</a> | <a href="#">Custom plans</a>
          </div>
        </section>

        {/* Estimator Section */}
        <section className={styles.estimatorSection}>
          <a href="#" className={styles.estimatorLink}>
            Need help estimating your campaign budget?
          </a>
        </section>

        {/* Special Campaigns Section */}
        <section className={styles.specialCampaignsSection}>
          <h3>
            Boost your app with our special campaigns that will help your app
            grow 10X
          </h3>
          <div className={styles.specialCardsContainer}>
            {specialCampaigns.map((campaign) => (
              <SpecialCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </section>

        {/* Buy Installs Section */}
        <section className={styles.buyInstallsSection}>
          <BuyInstallCard
            title="Buy Android installs"
            description="Buy Android installs (from Google Play Store apps) easy on CPIDroid."
            isAndroid={true}
          />
          <BuyInstallCard
            title="Buy iOS installs"
            description="Buy iOS installs (from Apple App Store apps) easy on CPIDroid."
            isAndroid={false}
          />
        </section>
      </main>

      {/* Imported Components */}
      <FAQ />
    </div>
  );
};

export default ViewAllPlans;
