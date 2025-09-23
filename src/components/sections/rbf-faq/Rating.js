import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Rating.module.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const StarRating = ({ count }) => (
  <div className={styles.starRating}>
    {[...Array(count)].map((_, i) => (
      <FaStar key={i} />
    ))}
  </div>
);

const TrustpilotLogo = ({ className }) => (
  <div className={`${styles.trustpilotLogo} ${className || ""}`}>
    <FaStar className={styles.trustpilotIcon} />
    <span>Trustpilot</span>
  </div>
);

const Rating = () => {
  // Array of testimonial data
  const testimonials = [
    {
      id: 1,
      title: "You can't find a better company.",
      text: "You can't find a better company. We tried a lot of Install Providers and non of them gave us such service like CPIDroid. We inte tracebility. Also their support works during normal working hours AND out of that, they also support urgent matters. :) Very use thousands here and moving ahead for more!",
      author: "Gustavo De Metrio",
      date: "September 11, 2020"
    },
    {
      id: 2,
      title: "Outstanding service and support",
      text: "The team at CPIDroid went above and beyond to help us with our installation needs. Their attention to detail and quick response times made all the difference in our project timeline.",
      author: "Sarah Johnson",
      date: "August 15, 2020"
    },
    {
      id: 3,
      title: "Reliable and professional",
      text: "We've been working with CPIDroid for over a year now, and their service has been consistently excellent. They're reliable, professional, and always deliver on time.",
      author: "Michael Chen",
      date: "July 3, 2020"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`${styles.ratingSection} reveal`}>
      <h2 className={`${styles.title} reveal-top`}>
        Everyone's talking about{" "}
        <span className={styles.highlight}>CPIDroid</span>
      </h2>

      <div className={`${styles.contentWrapper} reveal-bottom`}>
        {/* Left Card: Trustpilot Summary */}
        <div className={`${styles.trustpilotCard} reveal-left`}>
          <p className={styles.excellent}>Excellent</p>
          <div className={styles.cardStars}>
            {/* This simulates the 5-star graphic from Trustpilot */}
            <StarRating count={5} />
          </div>
          <p className={styles.reviewCount}>Based on 67+ reviews</p>
          <TrustpilotLogo />
        </div>

        {/* Right Card: Testimonial Carousel */}
        <div className={`${styles.testimonialWrapper} reveal-right`}>
          <div className={styles.carouselContainer}>
            <button className={styles.carouselButtonLeft} onClick={goToPrevious}>
              <FaChevronLeft />
            </button>
            
            <div className={styles.testimonialCarousel}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`${styles.testimonial} ${index === currentIndex ? styles.active : ''} ${index === currentIndex ? 'reveal' : ''}`}
                >
                  <div className={styles.testimonialStars}>
                    <StarRating count={5} />
                  </div>
                  <h3 className={styles.testimonialTitle}>
                    {testimonial.title}
                  </h3>
                  <p className={styles.testimonialText}>
                    {testimonial.text}
                  </p>
                  <p className={styles.author}>{testimonial.author}</p>
                  <p className={styles.date}>{testimonial.date}</p>
                </div>
              ))}
            </div>
            
            <button className={styles.carouselButtonRight} onClick={goToNext}>
              <FaChevronRight />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className={styles.carouselIndicators}>
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`${styles.footer} reveal`}>
        <span className={styles.footerText}>See our 67+ reviews on</span>
        <TrustpilotLogo className={styles.footerLogo} />
        <Link to="/signup" className={styles.ctaButton}>Get Started</Link>
      </div>
    </section>
  );
};

export default Rating;
