import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
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
                <Link to="/android-installs">Promote Android App</Link>
              </li>
              <li>
                <Link to="/ios-installs">Promote iOS App</Link>
              </li>
              <li>
                <Link to="/web-traffic">Promote Web App</Link>
              </li>
              <li>
                <Link to="/aso-booster">Promote ASO App</Link>
              </li>
              <li>
                <Link to="/web-traffic">
                  Buy Web Traffic{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </Link>
              </li>
              <li>
                <Link to="/all-plans">Campaigns & Pricing</Link>
              </li>
              <li>
                <Link to="/contact">
                  Advertiser API{" "}
                  <span className={`${styles.badge} ${styles.live}`}>Live</span>
                </Link>
              </li>
            </ul>

            <h3 className={`${styles.footerHeading} ${styles.subHeading}`}>
              For Publishers
            </h3>
            <ul>
              <li>
                <Link to="/boost-engagement">Monetization Solutions</Link>
              </li>
              <li>
                <Link to="/offerwall-monetization">
                  Offerwall Monetization{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </Link>
              </li>
              <li>
                <Link to="/become-publisher">Become Publisher</Link>
              </li>
              <li>
                <Link to="/contact">
                  Publisher API{" "}
                  <span className={`${styles.badge} ${styles.live}`}>Live</span>
                </Link>
              </li>
            </ul>

            <h3 className={`${styles.footerHeading} ${styles.subHeading}`}>
              For Partners
            </h3>
            <ul>
              <li>
                <Link to="/contact">
                  Referral Program{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Company</h3>
            <ul>
              <li>
                <a href="#">Pitch Deck</a>
              </li>
              <li>
                <a href="#">Our Clients</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">About Us: The Team</a>
              </li>
              <li>
                <a href="#">The Brand</a>
              </li>
              <li>
                <a href="#">
                  Careers{" "}
                  <span className={`${styles.badge} ${styles.hiring}`}>
                    We're Hiring
                  </span>
                </a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Cancellation Policy</a>
              </li>
              <li>
                <a href="#">Infringement Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Resources</h3>
            <ul>
              <li>
                <a href="#">Developer</a>
              </li>
              <li>
                <Link to="/cpidroid-blog">CPIDroid Blog</Link>
              </li>
              <li>
                <a href="#">Mobile App Marketing</a>
              </li>
              <li>
                <a href="#">
                  Glossary{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </a>
              </li>
              <li>
                <a href="#">CPIDroid Alternatives</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">EULA</a>
              </li>
            </ul>

            <h3 className={`${styles.footerHeading} ${styles.subHeading}`}>
              Useful Links
            </h3>
            <ul>
              <li>
                <a href="#">Getting Started</a>
              </li>
              <li>
                <a href="#">
                  Free CPI Money{" "}
                  <span className={`${styles.badge} ${styles.new}`}>New</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Voucher{" "}
                  <span className={`${styles.badge} ${styles.redeem}`}>
                    Redeem
                  </span>
                </a>
              </li>
              <li>
                <a href="#">Startup Program</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Need Help? */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Need Help?</h3>
            <ul>
              <li>
                <Link to="/cpidroid-support">Live Chat</Link>
              </li>
              <li>
                <Link to="/cpidroid-support">Help Center</Link>
              </li>
              <li>
                <a href="#">Help Center (Zendesk)</a>
              </li>
              <li>
                <Link to="/cpidroid-support">Support</Link>
              </li>
              <li>
                <Link to="/contact-cpidroid">Contact</Link>
              </li>
              <li>
                <a href="#">Overseas Requests</a>
              </li>
              <li>
                <a href="#">Request Feature</a>
              </li>
              <li>
                <a href="#">Report Bug</a>
              </li>
              <li>
                <a href="#">Status Page</a>
              </li>
              <li>
                <a href="#" className={styles.supportLink}>
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