"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" className={styles.logo} />
          </Link>
          <p className={styles.par0}>
            Feel free to reach out if you have any questions or just want to say
            hello!
          </p>
          <p className={styles.par}>📍 Address: 123 Art Street, New York.</p>
          <p className={styles.par}>📞 Phone: +1 (123) 456-7890</p>
          <p className={styles.par}>✉️ Email: contact@edenred.com</p>
        </div>

        <div className={styles.contactForm}>
          <h3>CONTACT ME</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={styles.input}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={styles.textarea}
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.socialLinks}>
          <h3>FOLLOW ME</h3>
          <div className={styles.icons}>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-gray-300 hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
