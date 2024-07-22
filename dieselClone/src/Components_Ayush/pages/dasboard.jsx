import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>My Account</h1>
      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <h2>Account Dashboard</h2>
          <ul>
            <li><a href="#address-book">My Address Book</a></li>
            <li><a href="#orders">My Orders</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>
        <div className="dashboard-main">
          <section id="profile">
            <h2>My profile</h2>
            <p>Profile Information</p>
            <p>Name:</p>
            <p>Email:</p>
            <p>Password: *******</p>
            <p>Date of Birth: 1993-05-10</p>
            <button>Edit my profile</button>
          </section>
          <section id="address-book">
            <h2>My Address book</h2>
            <p>Name:</p>
            <p>Address: No active address</p>
            <button>View Address book</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
