import React from 'react';
import './App.css'; 
import Navbar from './Navbar';

const Contact = () => {
  return (
    <section id="contact" className="contact">
        <Navbar />
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>Email: doylej1616@gmail.com</p>
          <p>Phone: 562-668-8233</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/doyle-jones-b69566256/">my-profile</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

