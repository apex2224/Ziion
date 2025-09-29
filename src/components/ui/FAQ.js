import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import styles from './FAQ.module.css';

const mockFAQs = [
    {
        question: 'How do I change my password?',
        answer: 'You can change your password in the "Manage Account" section.',
    },
    {
        question: 'How do I update my profile?',
        answer: 'You can update your profile in the "Manage Account" section.',
    },
    {
        question: 'How do I enable dark mode?',
        answer: 'You can enable dark mode using the toggle switch in the user panel.',
    },
];

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem}>
            <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
                <span>{faq.question}</span>
                <FiChevronRight className={`${styles.arrowIcon} ${isOpen ? styles.open : ''}`} />
            </div>
            <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
                {faq.answer}
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <div className={styles.container}>
            {mockFAQs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
            ))}
        </div>
    );
};

export default FAQ;
