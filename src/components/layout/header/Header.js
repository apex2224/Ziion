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
} from "react-icons/fa";
import styles from "./Header.module.css";

const featuresData = [
  {
    icon: <FaShieldAlt />,
    title: "Fraud Detection",
    subtitle: "Pay for Real Conversions Only",
    isHot: true,
  },
  {
    icon: <FaTrophy />,
    title: "Boost Engagements",
    subtitle: "Pay for Engagements Only",
  },
  {
    icon: <FaSyncAlt />,
    title: "Tracking Solutions",
    subtitle: "Pay for Unique Users Only",
  },
  {
    icon: <FaMobileAlt />,
    title: "Android / iOS / Web",
    subtitle: "Pay for Real Devices Only",
  },
  {
    icon: <FaChartBar />,
    title: "Incent / Non-Incent",
    subtitle: "Pay for High Quality Only",
  },
  {
    icon: <FaBullseye />,
    title: "Multiple Pricing Models",
    subtitle: "Pay for Target Goals Only",
  },
  {
    icon: <FaFire />,
    title: "ASO Booster",
    subtitle: "App Store Optimization",
  },
];

const resourcesData = [
  { icon: <FaBlog />, title: "CPIDroid Blog", subtitle: "Official Blog" },
  {
    icon: <FaLifeRing />,
    title: "CPIDroid Support",
    subtitle: "Knowledge Base",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Contact CPIDroid",
    subtitle: "Account Manager",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on component mount and when localStorage changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(authStatus);
    };

    // Check initial status
    checkAuthStatus();

    // Listen for storage changes (in case of login/logout in other tabs)
    const handleStorageChange = (e) => {
      if (e.key === "isAuthenticated") {
        checkAuthStatus();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Also check auth status with polling as a backup
  useEffect(() => {
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(authStatus);
    };

    // Poll for changes every second
    const interval = setInterval(checkAuthStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const handleDashboardClick = () => {
    navigate("/advertiser");
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Clear authentication status
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
    navigate("/");
    setMobileMenuOpen(false);
  };

  const handleFraudDetection = () => {
    navigate("/fraud-detection");
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <div className={styles.mainNavContent}>
          <a href="/" className={styles.logo}>
            ⚡️ CPIDroid
          </a>

          <ul className={styles.navLinks}>
            <li
              onMouseEnter={() => handleMouseEnter("features")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">
                Features <FaChevronDown />
              </a>
              {openMenu === "features" && (
                <div
                  className={`${styles.dropdown} ${styles.featuresDropdown}`}
                >
                  {featuresData.map((item) => (
                    <a
                      href="#"
                      key={item.title}
                      className={styles.featureItem}
                      onClick={
                        item.title === "Fraud Detection"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/fraud-detection");
                            }
                          : item.title === "Boost Engagements"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/boost-engagement");
                            }
                          : item.title === "Tracking Solutions"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/tracking-solutions");
                            }
                          : item.title === "Android / iOS / Web"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/android-ios-web");
                            }
                          : item.title === "Incent / Non-Incent"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/incent-non-incent");
                            }
                          : item.title === "Multiple Pricing Models"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/multiple-pricing-models");
                            }
                          : undefined
                      }
                    >
                      <div className={styles.featureIcon}>{item.icon}</div>
                      <div className={styles.featureText}>
                        <h4>
                          {item.title}{" "}
                          {item.isHot && (
                            <span className={styles.hotBadge}>Hot</span>
                          )}
                        </h4>
                        <p>{item.subtitle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("advertise")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">
                Advertise <FaChevronDown />
              </a>
              {openMenu === "advertise" && (
                <div
                  className={`${styles.dropdown} ${styles.advertiseDropdown}`}
                >
                  <div className={styles.advertisePromo}>
                    <h3>The #1 Mobile App Marketing Platform</h3>
                    <p>
                      Experience a level of CPIDroid quality on this automated &
                      self-serve platform.
                    </p>
                    <button>Check Features</button>
                  </div>
                  <div className={styles.advertiseLinks}>
                    <div>
                      <h4>App Installs</h4>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/android-installs"); }}>Android Installs</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/ios-installs"); }}>iOS Installs</a>
                    </div>
                    <div>
                      <h4>Keyword Installs</h4>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/android-keyword-installs"); }}>Android Keyword Installs</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/ios-keyword-installs"); }}>iOS Keyword Installs</a>
                    </div>
                    <div>
                      <h4>
                        APK Installs{" "}
                        <span className={styles.newBadge}>New</span>
                      </h4>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/android-apk-installs"); }}>Android APK Installs</a>
                    </div>
                    <div>
                      <h4>
                        Web Traffic <span className={styles.newBadge}>New</span>
                      </h4>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/web-traffic"); }}>Buy Web Traffic</a>
                    </div>
                    <div>
                      <h4>MAM Booster</h4>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/android-booster"); }}>Android Booster</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate("/ios-booster"); }}>iOS Booster</a>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("monetize")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">
                Monetize <FaChevronDown />
              </a>
              {openMenu === "monetize" && (
                <div className={`${styles.dropdown} ${styles.simpleDropdown}`}>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate("/offerwall-monetization"); }}>Offerwall Monetization</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate("/become-publisher"); }}>Become Publisher</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">
                Resources <FaChevronDown />
              </a>
              {openMenu === "resources" && (
                <div
                  className={`${styles.dropdown} ${styles.resourcesDropdown}`}
                >
                  {resourcesData.map((item) => (
                    <a
                      href="#"
                      key={item.title}
                      className={styles.resourceItem}
                      onClick={
                        item.title === "CPIDroid Blog"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/cpidroid-blog");
                            }
                          : item.title === "CPIDroid Support"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/cpidroid-support");
                            }
                          : item.title === "Contact CPIDroid"
                          ? (e) => {
                              e.preventDefault();
                              navigate("/contact-cpidroid");
                            }
                          : undefined
                      }
                    >
                      <div className={styles.resourceIcon}>{item.icon}</div>
                      <div className={styles.resourceText}>
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <div className={styles.authButtons}>
            {isAuthenticated ? (
              <>
                <button
                  className={styles.dashboardButton}
                  onClick={handleDashboardClick}
                >
                  DASHBOARD
                </button>
                <button className={styles.logoutButton} onClick={handleLogout}>
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.loginButton}>
                  LOGIN
                </Link>
                <Link to="/signup" className={styles.signupButton}>
                  FREE SIGNUP
                </Link>
              </>
            )}
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Drawer --- */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          {/* Features with dropdown */}
          <div className={styles.mobileMenuItem}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMobileDropdown("features");
              }}
              className={styles.mobileMenuLink}
            >
              Features{" "}
              <FaChevronDown
                className={`${styles.dropdownIcon} ${
                  mobileDropdown === "features" ? styles.rotated : ""
                }`}
              />
            </a>
            {mobileDropdown === "features" && (
              <div className={styles.mobileDropdown}>
                {featuresData.map((item) => (
                  <a
                    href="#"
                    key={item.title}
                    className={styles.mobileDropdownItem}
                    onClick={
                      item.title === "Fraud Detection"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/fraud-detection");
                            setMobileMenuOpen(false);
                          }
                        : item.title === "Boost Engagements"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/boost-engagement");
                            setMobileMenuOpen(false);
                          }
                        : item.title === "Tracking Solutions"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/tracking-solutions");
                            setMobileMenuOpen(false);
                          }
                        : item.title === "Android / iOS / Web"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/android-ios-web");
                            setMobileMenuOpen(false);
                          }
                        : item.title === "Incent / Non-Incent"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/incent-non-incent");
                            setMobileMenuOpen(false);
                          }
                        : item.title === "Multiple Pricing Models"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/multiple-pricing-models");
                            setMobileMenuOpen(false);
                          }
                        : toggleMobileMenu
                    }
                  >
                    <div className={styles.mobileDropdownIcon}>{item.icon}</div>
                    <div className={styles.mobileDropdownText}>
                      <h4>
                        {item.title}{" "}
                        {item.isHot && (
                          <span className={styles.mobileHotBadge}>Hot</span>
                        )}
                      </h4>
                      <p>{item.subtitle}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Advertise with dropdown */}
          <div className={styles.mobileMenuItem}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMobileDropdown("advertise");
              }}
              className={styles.mobileMenuLink}
            >
              Advertise{" "}
              <FaChevronDown
                className={`${styles.dropdownIcon} ${
                  mobileDropdown === "advertise" ? styles.rotated : ""
                }`}
              />
            </a>
            {mobileDropdown === "advertise" && (
              <div className={styles.mobileDropdown}>
                <div className={styles.mobileAdvertisePromo}>
                  <h3>The #1 Mobile App Marketing Platform</h3>
                  <p>
                    Experience a level of CPIDroid quality on this automated &
                    self-serve platform.
                  </p>
                  <button>Check Features</button>
                </div>
                <div className={styles.mobileAdvertiseLinks}>
                  <div>
                    <h4>App Installs</h4>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/android-installs"); setMobileMenuOpen(false); }}>
                      Android Installs
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/ios-installs"); setMobileMenuOpen(false); }}>
                      iOS Installs
                    </a>
                  </div>
                  <div>
                    <h4>Keyword Installs</h4>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/android-keyword-installs"); setMobileMenuOpen(false); }}>
                      Android Keyword Installs
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/ios-keyword-installs"); setMobileMenuOpen(false); }}>
                      iOS Keyword Installs
                    </a>
                  </div>
                  <div>
                    <h4>
                      APK Installs{" "}
                      <span className={styles.mobileNewBadge}>New</span>
                    </h4>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/android-apk-installs"); setMobileMenuOpen(false); }}>
                      Android APK Installs
                    </a>
                  </div>
                  <div>
                    <h4>
                      Web Traffic{" "}
                      <span className={styles.mobileNewBadge}>New</span>
                    </h4>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/web-traffic"); setMobileMenuOpen(false); }}>
                      Buy Web Traffic
                    </a>
                  </div>
                  <div>
                    <h4>MAM Booster</h4>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/android-booster"); setMobileMenuOpen(false); }}>
                      Android Booster
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/ios-booster"); setMobileMenuOpen(false); }}>
                      iOS Booster
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Monetize with dropdown */}
          <div className={styles.mobileMenuItem}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMobileDropdown("monetize");
              }}
              className={styles.mobileMenuLink}
            >
              Monetize{" "}
              <FaChevronDown
                className={`${styles.dropdownIcon} ${
                  mobileDropdown === "monetize" ? styles.rotated : ""
                }`}
              />
            </a>
            {mobileDropdown === "monetize" && (
              <div className={styles.mobileDropdown}>
                <a
                  href="#"
                  className={styles.mobileSimpleLink}
                  onClick={(e) => { e.preventDefault(); navigate("/offerwall-monetization"); setMobileMenuOpen(false); }}
                >
                  Offerwall Monetization
                </a>
                <a
                  href="#"
                  className={styles.mobileSimpleLink}
                  onClick={(e) => { e.preventDefault(); navigate("/become-publisher"); setMobileMenuOpen(false); }}
                >
                  Become Publisher
                </a>
              </div>
            )}
          </div>

          {/* Resources with dropdown */}
          <div className={styles.mobileMenuItem}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMobileDropdown("resources");
              }}
              className={styles.mobileMenuLink}
            >
              Resources{" "}
              <FaChevronDown
                className={`${styles.dropdownIcon} ${
                  mobileDropdown === "resources" ? styles.rotated : ""
                }`}
              />
            </a>
            {mobileDropdown === "resources" && (
              <div className={styles.mobileDropdown}>
                {resourcesData.map((item) => (
                  <a
                    href="#"
                    key={item.title}
                    className={styles.mobileDropdownItem}
                    onClick={
                      item.title === "CPIDroid Blog"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/cpidroid-blog");
                            setMobileMenuOpen(false);
                          }
                        : item.title === "CPIDroid Support"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/cpidroid-support");
                            setMobileMenuOpen(false);
                          }
                        : item.title === "Contact CPIDroid"
                        ? (e) => {
                            e.preventDefault();
                            navigate("/contact-cpidroid");
                            setMobileMenuOpen(false);
                          }
                        : toggleMobileMenu
                    }
                  >
                    <div className={styles.mobileDropdownIcon}>{item.icon}</div>
                    <div className={styles.mobileDropdownText}>
                      <h4>{item.title}</h4>
                      <p>{item.subtitle}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <hr />
          {isAuthenticated ? (
            <>
              <button
                className={styles.dashboardButtonMobile}
                onClick={handleDashboardClick}
              >
                DASHBOARD
              </button>
              <button
                className={styles.logoutButtonMobile}
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={styles.loginButtonMobile}
                onClick={() => setMobileMenuOpen(false)}
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className={styles.signupButtonMobile}
                onClick={() => setMobileMenuOpen(false)}
              >
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

