import React, { useState } from "react";
import styles from "./Publisher.module.css";
import { FaArrowLeft } from "react-icons/fa";

const PublisherBilling = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [paymentDetails, setPaymentDetails] = useState({
    paypal: 'publisher@example.com',
    bank: '****1234 - Bank of America'
  });

  const transactions = [
    { id: 1, date: '2025-09-01', description: 'Monthly earnings', amount: '$1,234.50', status: 'Completed' },
    { id: 2, date: '2025-08-01', description: 'Monthly earnings', amount: '$987.25', status: 'Completed' },
    { id: 3, date: '2025-07-01', description: 'Monthly earnings', amount: '$1,450.00', status: 'Completed' },
    { id: 4, date: '2025-06-01', description: 'Monthly earnings', amount: '$875.75', status: 'Completed' },
  ];

  const currentBalance = 1234.50;
  const pendingAmount = 456.75;
  const lifetimeEarnings = 8750.25;

  return (
    <div className={styles.billingSection}>
      <div className={styles.sectionHeader}>
        <h2>Publisher Billing</h2>
      </div>

      <div className={styles.billingSummary}>
        <div className={styles.balanceCard}>
          <h3>Current Balance</h3>
          <p className={styles.balanceAmount}>${currentBalance.toFixed(2)}</p>
          <button className={styles.requestPayoutBtn}>Request Payout</button>
        </div>
        
        <div className={styles.balanceCard}>
          <h3>Pending Amount</h3>
          <p className={styles.balanceAmount}>${pendingAmount.toFixed(2)}</p>
          <p className={styles.balanceDesc}>Will be available on Oct 1, 2025</p>
        </div>
        
        <div className={styles.balanceCard}>
          <h3>Lifetime Earnings</h3>
          <p className={styles.balanceAmount}>${lifetimeEarnings.toFixed(2)}</p>
          <p className={styles.balanceDesc}>Total earnings to date</p>
        </div>
      </div>

      <div className={styles.paymentSettings}>
        <h3>Payment Settings</h3>
        <div className={styles.paymentForm}>
          <div className={styles.formGroup}>
            <label>Preferred Payment Method</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
              <option value="check">Check</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Payment Details</label>
            <input
              type="text"
              value={paymentMethod === 'paypal' 
                ? paymentDetails.paypal 
                : paymentDetails.bank}
              onChange={(e) => {
                if (paymentMethod === 'paypal') {
                  setPaymentDetails({...paymentDetails, paypal: e.target.value});
                } else {
                  setPaymentDetails({...paymentDetails, bank: e.target.value});
                }
              }}
              placeholder={paymentMethod === 'paypal' 
                ? 'Enter PayPal email' 
                : 'Enter bank account details'}
            />
          </div>

          <div className={styles.formActions}>
            <button className={styles.saveBtn}>Update Payment Info</button>
          </div>
        </div>
      </div>

      <div className={styles.transactionHistory}>
        <h3>Transaction History</h3>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td className={styles.amountPositive}>{transaction.amount}</td>
                  <td>
                    <span className={`${styles.status} ${styles[transaction.status.toLowerCase()]}`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PublisherBilling;