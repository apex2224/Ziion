import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.gridContainer}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>About CPIDroid</h3>
            <p className={styles.footerText}>
              We are a D.PI S.G.W 900 Certified AdTech Platform with built-in
              SDK & S2S tracking. Advertisers can promote Android & iOS Apps,
              ASO, Web... CPIDroid reduces Cost Per Install (CPI/CPI). Buy App
              Downloads for Android, iOS App. Cheap & fast. Buy Android Installs
              (Play Store), iOS Installs (App Store). Buy CPI traffic for
              Android, iOS App. Cheap & Fast.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaSquareXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Email">
                <MdOutlineEmail />
              </a>
            </div>
            <button className={styles.languageSelector}>
              <IoGlobeOutline />
              <span>English</span>
              <IoMdArrowDropdown />
            </button>
          </div>

          {/* Column 2: For... */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>For Advertisers</h3>
            <ul>
              <li>
                <a href="/promote-android-app" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/promote-android-app");
                }}>Promote Android App</a>
              </li>
              <li>
                <a href="/promote-ios-app" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/promote-ios-app");
                }}>Promote iOS App</a>
              </li>
              <li>
                <a href="/promote-web-app" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/promote-web-app");
                }}>Promote Web App</a>
              </li>
              <li>
                <a href="/promote-aso-app" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/promote-aso-app");
                }}>Promote ASO App</a>
              </li>
              <li>
                <a href="/android-installs" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/android-installs");
                }}>Android Installs</a>
              </li>
              <li>
                <a href="/ios-installs" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/ios-installs");
                }}>iOS Installs</a>
              </li>
              <li>
                <a href="/android-keyword-installs" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/android-keyword-installs");
                }}>Android Keyword Installs</a>
              </li>
              <li>
                <a href="/ios-keyword-installs" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/ios-keyword-installs");
                }}>iOS Keyword Installs</a>
              </li>
              <li>
                <a href="/android-apk-installs" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/android-apk-installs");
                }}>Android APK Installs</a>
              </li>
              <li>
                <a href="/web-traffic" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/web-traffic");
                }}>Web Traffic</a>
              </li>
              <li>
                <a href="/buy-web-traffic" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/buy-web-traffic");
                }}>
                  Buy Web Traffic{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </a>
              </li>
              <li>
                <a href="/android-booster" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/android-booster");
                }}>Android Booster</a>
              </li>
              <li>
                <a href="/ios-booster" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/ios-booster");
                }}>iOS Booster</a>
              </li>
              <li>
                <a href="/campaigns-pricing" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/campaigns-pricing");
                }}>Campaigns & Pricing</a>
              </li>
              <li>
                <a href="/advertiser-api" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/advertiser-api");
                }}>
                  Advertiser API{" "}
                  <span className={`${styles.badge} ${styles.live}`}>Live</span>
                </a>
              </li>
            </ul>

            <h3 className={`${styles.footerHeading} ${styles.subHeading}`}>
              For Publishers
            </h3>
            <ul>
              <li>
                <a href="/monetization-solutions" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/monetization-solutions");
                }}>Monetization Solutions</a>
              </li>
              <li>
                <a href="/offerwall-monetization-footer" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/offerwall-monetization-footer");
                }}>
                  Offerwall Monetization{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </a>
              </li>
              <li>
                <a href="/offerwall-monetization" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/offerwall-monetization");
                }}>Offerwall Monetization</a>
              </li>
              <li>
                <a href="/become-publisher" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/become-publisher");
                }}>Become Publisher</a>
              </li>
              <li>
                <a href="/publisher-api" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/publisher-api");
                }}>
                  Publisher API{" "}
                  <span className={`${styles.badge} ${styles.live}`}>Live</span>
                </a>
              </li>
            </ul>

            <h3 className={`${styles.footerHeading} ${styles.subHeading}`}>
              For Partners
            </h3>
            <ul>
              <li>
                <a href="/referral-program" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/referral-program");
                }}>
                  Referral Program{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </a>
              </li>
            </ul>

            <h3 className={`${styles.footerHeading} ${styles.subHeading}`}>
              Features
            </h3>
            <ul>
              <li>
                <a href="/fraud-detection" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/fraud-detection");
                }}>Fraud Detection</a>
              </li>
              <li>
                <a href="/boost-engagement" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/boost-engagement");
                }}>Boost Engagement</a>
              </li>
              <li>
                <a href="/tracking-solutions" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/tracking-solutions");
                }}>Tracking Solutions</a>
              </li>
              <li>
                <a href="/android-ios-web" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/android-ios-web");
                }}>Android / iOS / Web</a>
              </li>
              <li>
                <a href="/incent-non-incent" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/incent-non-incent");
                }}>Incent / Non-Incent</a>
              </li>
              <li>
                <a href="/multiple-pricing-models" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/multiple-pricing-models");
                }}>Multiple Pricing Models</a>
              </li>
              <li>
                <a href="/aso-booster" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/aso-booster");
                }}>ASO Booster</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Company</h3>
            <ul>
              <li>
                <a href="/pitch-deck" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/pitch-deck");
                }}>Pitch Deck</a>
              </li>
              <li>
                <a href="/our-clients" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/our-clients");
                }}>Our Clients</a>
              </li>
              <li>
                <a href="/testimonials" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/testimonials");
                }}>Testimonials</a>
              </li>
              <li>
                <a href="/about-us-the-team" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/about-us-the-team");
                }}>About Us: The Team</a>
              </li>
              <li>
                <a href="/the-brand" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/the-brand");
                }}>The Brand</a>
              </li>
              <li>
                <a href="/careers" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/careers");
                }}>
                  Careers{" "}
                  <span className={`${styles.badge} ${styles.hiring}`}>
                    We're Hiring
                  </span>
                </a>
              </li>
              <li>
                <a href="/privacy-policy" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/privacy-policy");
                }}>Privacy Policy</a>
              </li>
              <li>
                <a href="/refund-policy" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/refund-policy");
                }}>Refund Policy</a>
              </li>
              <li>
                <a href="/cancellation-policy" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/cancellation-policy");
                }}>Cancellation Policy</a>
              </li>
              <li>
                <a href="/infringement-policy" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/infringement-policy");
                }}>Infringement Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Resources</h3>
            <ul>
              <li>
                <a href="/developer" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/developer");
                }}>Developer</a>
              </li>
              <li>
                <a href="/cpidroid-blog-footer" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/cpidroid-blog-footer");
                }}>CPIDroid Blog</a>
              </li>
              <li>
                <a href="/cpidroid-blog" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/cpidroid-blog");
                }}>CPIDroid Blog (Header)</a>
              </li>
              <li>
                <a href="/cpidroid-support" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/cpidroid-support");
                }}>CPIDroid Support</a>
              </li>
              <li>
                <a href="/contact-cpidroid" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/contact-cpidroid");
                }}>Contact CPIDroid</a>
              </li>
              <li>
                <a href="/mobile-app-marketing" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/mobile-app-marketing");
                }}>Mobile App Marketing</a>
              </li>
              <li>
                <a href="/glossary" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/glossary");
                }}>
                  Glossary{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </a>
              </li>
              <li>
                <a href="/cpidroid-alternatives" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/cpidroid-alternatives");
                }}>CPIDroid Alternatives</a>
              </li>
              <li>
                <a href="/terms-of-service" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/terms-of-service");
                }}>Terms of Service</a>
              </li>
              <li>
                <a href="/eula" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/eula");
                }}>EULA</a>
              </li>
            </ul>

            <h3 className={`${styles.footerHeading} ${styles.subHeading}`}>
              Useful Links
            </h3>
            <ul>
              <li>
                <a href="/getting-started" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/getting-started");
                }}>Getting Started</a>
              </li>
              <li>
                <a href="/free-cpi-money" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/free-cpi-money");
                }}>
                  Free CPI Money{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </a>
              </li>
              <li>
                <a href="/voucher" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/voucher");
                }}>
                  Voucher{" "}
                  <span className={`${styles.badge} ${styles.redeem}`}>
                    Redeem
                  </span>
                </a>
              </li>
              <li>
                <a href="/startup-program" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/startup-program");
                }}>Startup Program</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Need Help? */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Need Help?</h3>
            <ul>
              <li>
                <a href="/live-chat" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/live-chat");
                }}>Live Chat</a>
              </li>
              <li>
                <a href="/help-center" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/help-center");
                }}>Help Center</a>
              </li>
              <li>
                <a href="/help-center-zendesk" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/help-center-zendesk");
                }}>Help Center (Zendesk)</a>
              </li>
              <li>
                <a href="/support" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/support");
                }}>Support</a>
              </li>
              <li>
                <a href="/contact-footer" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/contact-footer");
                }}>Contact</a>
              </li>
              <li>
                <a href="/overseas-requests" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/overseas-requests");
                }}>Overseas Requests</a>
              </li>
              <li>
                <a href="/request-feature" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/request-feature");
                }}>Request Feature</a>
              </li>
              <li>
                <a href="/report-bug" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/report-bug");
                }}>Report Bug</a>
              </li>
              <li>
                <a href="/status-page" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/status-page");
                }}>Status Page</a>
              </li>
              <li>
                <a href="/support" onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/support");
                }} className={styles.supportLink}>
                  <BsCircleFill className={styles.onlineIcon} />
                  Support
                  <span className={styles.onlineBadge}>Online</span>
                  <IoMdArrowDropdown />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment methods section */}
      <div className={styles.paymentMethods}>
        <div className={`${styles.paymentIconsContainer} text-center mb-3`}>
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.stripe.svg" 
            height="24" 
            alt="Payment Stripe" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.tazapay.svg" 
            height="24" 
            alt="Payment Tazapay" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.payoneer.svg" 
            height="24" 
            alt="Payment Payoneer" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.paytm.svg" 
            height="24" 
            alt="Payment Paytm" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.instarem.png" 
            height="24" 
            alt="Payment InstaReM" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.instamojo.jpg" 
            height="24" 
            alt="Payment InstaMojo" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.paypal.svg" 
            height="24" 
            alt="Payment PayPal" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.bitpay.svg" 
            height="24" 
            alt="Payment Bitpay" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.nowpayments.png" 
            height="24" 
            alt="Payment NowPayments" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/brand.coinbase.svg" 
            height="24" 
            alt="Payment Coinbase" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/payment_visa.svg" 
            alt="Payment Visa" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/payment_mastercard.svg" 
            height="24" 
            alt="Payment MasterCard" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/payment_amex.svg" 
            height="24" 
            alt="Payment AmEx" 
          />
          <img 
            className={styles.paymentIcon} 
            src="//tswcdn.xyz/assets/img/payment_bitcoin.svg" 
            height="24" 
            alt="Payment Bitcoin" 
          />
        </div>
      </div>

      {/* Credits section */}
      <div className={styles.credits}>
        <div className={styles.creditsContainer}>
          <div className={styles.logo}>CPIDroid</div>
          <p>
            Made with <FaHeart className={styles.heartIcon} /> in{" "}
            <strong>India</strong> for <strong>World</strong>
          </p>
          <p>
            DPI Certified (DPI6842) | #BrandIndia #StartupIndia
            #AtmaNirbharBharat
          </p>
          <p>© CPIDroid, 2023 SmartPixel P.P — All rights reserved.</p>
          <p>UIN: ALD-PIS1-UISTN-SMARTCPIWEBUI | E-Stamp: IN-RJ187729271</p>
        </div>
      </div>

      {/* Disclaimer section */}
      <div className={styles.disclaimer}>
        <div className={styles.disclaimerContainer}>
          <p>
            Copyright | DMCA Disclaimer: All trademarks, logos and brand names
            are the property of their respective owners. All company, product
            and service names used in this website are for identification
            purposes only. Use of these names, trademarks and brands does not
            imply endorsement.
          </p>
          <p>
            Copyright | DMCA Claims: If the Complaining Party would like to
            submit a copyright complaint for material on which you hold a valid
            copyright, CPIDroid requests that the Complaining Party
            substantively comply with the Digital Millennium Copyright Act
            ("DMCA"). Any copyright complaint should include the following
            information in an email to legal@cpidroid.com and
            legal@smartpixel.com. The words "Copyright Claim" should appear in
            the subject line of the email.
          </p>
          <p>
            Android is a trademark of Google LLC. iOS is a trademark of Apple.
            CPIDroid is not affiliated to Google & Apple.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
