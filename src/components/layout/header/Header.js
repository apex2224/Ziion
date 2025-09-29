import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaShieldAlt,
  FaTrophy,
  FaSyncAlt,
  FaMobileAlt,
  FaBullseye,
  FaChartBar,
  FaBlog,
  FaLifeRing,
  FaPhoneAlt,
  FaFire,
  FaBars,
  FaTimes,
  FaCoins,
  FaUserPlus,
  FaUser,
} from "react-icons/fa";
import styles from "./Header.module.css";

// --- CUSTOM HOOK ---
const useAuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const status = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(status);
    };

    checkAuthStatus();
    window.addEventListener("storage", checkAuthStatus);
    const intervalId = setInterval(checkAuthStatus, 1000);

    return () => {
      window.removeEventListener("storage", checkAuthStatus);
      clearInterval(intervalId);
    };
  }, []);

  return isAuthenticated;
};

// --- DATA (UNCHANGED) ---
const featuresData = [
  {
    icon: <FaShieldAlt />,
    title: "Fraud Detection",
    subtitle: "Pay for Real Conversions Only",
    isHot: true,
    path: "/fraud-detection",
  },
  {
    icon: <FaTrophy />,
    title: "Boost Engagements",
    subtitle: "Pay for Engagements Only",
    path: "/boost-engagement",
  },
  {
    icon: <FaSyncAlt />,
    title: "Tracking Solutions",
    subtitle: "Pay for Unique Users Only",
    path: "/tracking-solutions",
  },
  {
    icon: <FaMobileAlt />,
    title: "Android / iOS / Web",
    subtitle: "Pay for Real Devices Only",
    path: "/android-ios-web",
  },
  {
    icon: <FaChartBar />,
    title: "Incent / Non-Incent",
    subtitle: "Pay for High Quality Only",
    path: "/incent-non-incent",
  },
  {
    icon: <FaBullseye />,
    title: "Multiple Pricing Models",
    subtitle: "Pay for Target Goals Only",
    path: "/multiple-pricing-models",
  },
  {
    icon: <FaFire />,
    title: "ASO Booster",
    subtitle: "App Store Optimization",
    path: "/aso-booster",
  },
];

const advertiseData = [
  { category: "App Installs", links: [{ title: "Android Installs", path: "/android-installs" }, { title: "iOS Installs", path: "/ios-installs" }] },
  { category: "Keyword Installs", links: [{ title: "Android Keyword Installs", path: "/android-keyword-installs" }, { title: "iOS Keyword Installs", path: "/ios-keyword-installs" }] },
  { category: "APK Installs", links: [{ title: "Android APK Installs", path: "/android-apk-installs" }] },
  { category: "Web Traffic", links: [{ title: "Buy Web Traffic", path: "/web-traffic" }] },
  { category: "MAM Booster", links: [{ title: "Android Booster", path: "/android-booster" }, { title: "iOS Booster", path: "/ios-booster" }] },
];

const monetizeData = [
  { icon: <FaCoins />, title: "Offerwall Monetization", subtitle: "Earn Revenue with User Engagement", path: "/offerwall-monetization" },
  { icon: <FaUserPlus />, title: "Become Publisher", subtitle: "Join Our Publisher Network", path: "/become-publisher" },
];

const resourcesData = [
  { icon: <FaBlog />, title: "CPIDroid Blog", subtitle: "Official Blog", path: "/cpidroid-blog" },
  { icon: <FaLifeRing />, title: "CPIDroid Support", subtitle: "Knowledge Base", path: "/cpidroid-support" },
  { icon: <FaPhoneAlt />, title: "Contact CPIDroid", subtitle: "Account Manager", path: "/contact-cpidroid" },
];

// --- COMPONENT ---
const Header = ({ onProfileClick }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const isAuthenticated = useAuthStatus();
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileDropdown = (menu) => setMobileDropdown(mobileDropdown === menu ? null : menu);

  const handleLinkClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Close mobile menu on navigation
    setOpenMenu(null); // Close desktop dropdowns
  };

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    navigate('/'); // Navigate to home after logout
  };

  const handleProfileClick = () => {
    setMobileMenuOpen(false);
    onProfileClick();
  };
  
  const renderFeaturesDropdown = (isMobile) => (
    <div className={isMobile ? styles.mobileDropdown : `${styles.dropdown} ${styles.featuresDropdown}`}>
      {featuresData.map((item) => (
        <a
          href={item.path}
          key={item.title}
          className={isMobile ? styles.mobileDropdownItem : styles.featureItem}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(item.path);
          }}
        >
          <div className={isMobile ? styles.mobileDropdownIcon : styles.featureIcon}>{item.icon}</div>
          <div className={isMobile ? styles.mobileDropdownText : styles.featureText}>
            <h4>
              {item.title} {item.isHot && <span className={isMobile ? styles.mobileHotBadge : styles.hotBadge}>Hot</span>}
            </h4>
            <p>{item.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );

  const renderAdvertiseDropdown = (isMobile) => (
    <div className={isMobile ? styles.mobileDropdown : `${styles.dropdown} ${styles.advertiseDropdown}`}>
      {advertiseData.map((category, index) => {
        // Determine icon based on category
        const categoryIcon = 
          category.category.startsWith("App Installs") ? <FaMobileAlt /> : 
          category.category.startsWith("Keyword Installs") ? <FaBullseye /> : 
          category.category.startsWith("APK Installs") ? <FaShieldAlt /> : 
          category.category.startsWith("Web Traffic") ? <FaChartBar /> : 
          <FaFire />; // Default icon

        return (
          <a
            href={category.links[0]?.path || "#"}
            key={category.category}
            className={isMobile ? styles.mobileDropdownItem : styles.featureItem}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(category.links[0]?.path || "#");
            }}
          >
            <div className={isMobile ? styles.mobileDropdownIcon : styles.featureIcon}>
              {categoryIcon}
            </div>
            <div className={isMobile ? styles.mobileDropdownText : styles.featureText}>
              <h4>
                {category.category}{" "}
                {(category.category === "APK Installs" || category.category === "Web Traffic") && <span className={isMobile ? styles.mobileNewBadge : styles.newBadge}>New</span>}
              </h4>
              <p>
                {category.links.map(link => link.title).join(", ")}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );

  const renderMonetizeDropdown = (isMobile) => (
    <div className={isMobile ? styles.mobileDropdown : `${styles.dropdown} ${styles.simpleDropdown}`}>
      {monetizeData.map((item) => (
        <a
          key={item.title}
          href={item.path}
          className={isMobile ? styles.mobileSimpleLink : styles.featureItem}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(item.path);
          }}
        >
          <div className={isMobile ? styles.mobileDropdownIcon : styles.featureIcon}>{item.icon}</div>
          <div className={isMobile ? styles.mobileDropdownText : styles.featureText}>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );

  const renderResourcesDropdown = (isMobile) => (
    <div className={isMobile ? styles.mobileDropdown : `${styles.dropdown} ${styles.resourcesDropdown}`}>
      {resourcesData.map((item) => (
        <a
          key={item.title}
          href={item.path}
          className={isMobile ? styles.mobileDropdownItem : styles.resourceItem}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(item.path);
          }}
        >
          <div className={isMobile ? styles.mobileDropdownIcon : styles.resourceIcon}>{item.icon}</div>
          <div className={isMobile ? styles.mobileDropdownText : styles.resourceText}>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );


  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <div className={styles.mainNavContent}>
          <Link to="/" className={styles.logo}>
            ⚡️ CPIDroid
          </Link>

          <ul className={styles.navLinks}>
            <li onMouseEnter={() => handleMouseEnter("features")} onMouseLeave={handleMouseLeave}>
              <a href="#">
                Features <FaChevronDown />
              </a>
              {openMenu === "features" && renderFeaturesDropdown(false)}
            </li>
            <li onMouseEnter={() => handleMouseEnter("advertise")} onMouseLeave={handleMouseLeave}>
              <a href="#">
                Advertise <FaChevronDown />
              </a>
              {openMenu === "advertise" && renderAdvertiseDropdown(false)}
            </li>
            <li onMouseEnter={() => handleMouseEnter("monetize")} onMouseLeave={handleMouseLeave}>
              <a href="#">
                Monetize <FaChevronDown />
              </a>
              {openMenu === "monetize" && renderMonetizeDropdown(false)}
            </li>
            <li onMouseEnter={() => handleMouseEnter("resources")} onMouseLeave={handleMouseLeave}>
              <a href="#">
                Resources <FaChevronDown />
              </a>
              {openMenu === "resources" && renderResourcesDropdown(false)}
            </li>
          </ul>

          <div className={styles.authButtons}>
            {isAuthenticated ? (
              <button className={styles.profileButton} onClick={handleProfileClick}>
                <FaUser /> 
              </button>
            ) : (
              <>
                <Link to="/login" className={styles.loginButton} onClick={() => handleLinkClick("/login")}>
                  LOGIN
                </Link>
                <Link to="/signup" className={styles.signupButton} onClick={() => handleLinkClick("/signup")}>
                  FREE SIGNUP
                </Link>
              </>
            )}
          </div>

          <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          <div className={styles.mobileMenuItem}>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileDropdown("features"); }} className={styles.mobileMenuLink}>
              Features{" "}
              <FaChevronDown className={`${styles.dropdownIcon} ${mobileDropdown === "features" ? styles.rotated : ""}`} />
            </a>
            {mobileDropdown === "features" && renderFeaturesDropdown(true)}
          </div>

          <div className={styles.mobileMenuItem}>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileDropdown("advertise"); }} className={styles.mobileMenuLink}>
              Advertise{" "}
              <FaChevronDown className={`${styles.dropdownIcon} ${mobileDropdown === "advertise" ? styles.rotated : ""}`} />
            </a>
            {mobileDropdown === "advertise" && renderAdvertiseDropdown(true)}
          </div>

          <div className={styles.mobileMenuItem}>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileDropdown("monetize"); }} className={styles.mobileMenuLink}>
              Monetize{" "}
              <FaChevronDown className={`${styles.dropdownIcon} ${mobileDropdown === "monetize" ? styles.rotated : ""}`} />
            </a>
            {mobileDropdown === "monetize" && renderMonetizeDropdown(true)}
          </div>

          <div className={styles.mobileMenuItem}>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileDropdown("resources"); }} className={styles.mobileMenuLink}>
              Resources{" "}
              <FaChevronDown className={`${styles.dropdownIcon} ${mobileDropdown === "resources" ? styles.rotated : ""}`} />
            </a>
            {mobileDropdown === "resources" && renderResourcesDropdown(true)}
          </div>

          <hr />

          {isAuthenticated ? (
            <>
              <button className={styles.profileButtonMobile} onClick={handleProfileClick}>
                <FaUser style={{ marginRight: '8px' }} /> PROFILE
              </button>
              <button className={styles.logoutButtonMobile} onClick={handleLogout}>
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.loginButtonMobile} onClick={() => handleLinkClick("/login")}>
                LOGIN
              </Link>
              <Link to="/signup" className={styles.signupButtonMobile} onClick={() => handleLinkClick("/signup")}>
                FREE SIGNUP
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;