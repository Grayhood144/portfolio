import React from 'react';
import './Page.css';
import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section className="page home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Welcome!</h2>
      <p>I'm Grayson, a web developer passionate about crafting interactive and accessible experiences.</p>
      <img src={profileImg} alt="Grayson Zrelak" className="profile-img" />
    </motion.section>
  );
};

export default Home;
