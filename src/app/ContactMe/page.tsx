"use client";
import React from "react";
import styles from "../../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.details}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.description}>
            Have questions or need more information? Reach out to us, and we&apos;ll be happy to help.
          </p>
          <div className={styles.contactInfo}>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, New York.
            </p>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799043664!2d-74.25987568777464!3d40.697670063040614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245f8b1e1d697%3A0x36e3a6c8c3c3c8d3!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2s!4v1689012345678!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
