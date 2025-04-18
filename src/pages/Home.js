import React from 'react';
import './Page.css';

const Home = () => {
  return (
    <section className="page home">
      <h2>Welcome!</h2>
      <p>I'm Grayson, a web developer passionate about crafting interactive and accessible experiences.</p>
      <img src="/assets/profile.jpg" alt="Grayson" className="profile-img" />
    </section>
  );
};

export default Home;