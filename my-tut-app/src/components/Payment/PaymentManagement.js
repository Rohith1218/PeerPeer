import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Payment.css';

const PaymentManagement = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/api/payments/');
        setPayments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="payment-container">
      <h2>Payment Management</h2>
      <ul className="payment-list">
        {payments.map((payment) => (
          <li key={payment.id} className="payment-item">
            {payment.amount} - {payment.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentManagement;
