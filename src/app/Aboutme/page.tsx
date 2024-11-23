"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/AboutMe.module.css"; 

const Aboutme = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.subHeading}>A passionate photographer and visual storyteller</p>
        
        <div className={styles.detailsContainer}>
          <div className={styles.textSection}>
            <p className={styles.description}>
              Hello! I&apos;m a professional photographer with over 10 years of experience capturing moments that 
              tell compelling stories. My work ranges from portrait photography to event and landscape photography. 
              I believe in the power of photography to connect people and evoke emotions.
            </p>
            <p className={styles.description}>
              My goal is to create beautiful, timeless images that my clients can cherish for years to come. 
              I&apos;m always excited to take on new projects and explore new creative avenues.
            </p>
          </div>

          <div className={styles.imageSection}>
            <img
              src="/images/eden.jpg" 
              alt="Profile Picture"
              className={styles.profileImage}
            />
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/Mygallery">
            <button className={styles.ctaButton}>View My Work</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
