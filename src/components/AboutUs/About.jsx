import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <div className="logo">Foodie Delivery</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main className="about-us-content">
        <section className="intro">
          <h1>Welcome to Foodie Delivery</h1>
          <p>
            At Foodie Delivery, we believe in delivering the best culinary
            experiences right to your doorstep. Our mission is to connect you
            with delicious meals from your favorite local restaurants.
          </p>
          <img
            src="https://via.placeholder.com/600x300" // Replace with a relevant image
            alt="Food Delivery"
          />
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide an effortless and enjoyable food delivery
            experience while supporting local businesses and promoting healthy
            eating.
          </p>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150" // Replace with a team member image
              alt="Team Member"
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150" // Replace with a team member image
              alt="Team Member"
            />
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          {/* Add more team members as needed */}
        </section>
      </main>

      <footer className="about-us-footer">
        <p>Contact us: info@foodiedelivery.com</p>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
