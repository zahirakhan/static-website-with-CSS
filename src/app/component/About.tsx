"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.subtitle}>
            I&apos;m EDEN, a passionate photographer dedicated to capturing
            life&apos;s most beautiful moments. Whether it&apos;s a Nature, a
            family portrait, or an artistic photo shoot, I aim to preserve
            memories through my lens.
          </p>
          <p className={styles.description}>
            With over 7 years of experience in photography, I bring creativity,
            attention to detail, and a personalized approach to every session.
            My goal is to not just take photos but to create art that tells a
            story.
          </p>
          <Link href="/Aboutme">
            <button className={styles.cta}>My Captures</button>
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/images/eden.jpg"
            alt="Photographer"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
