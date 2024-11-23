"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/MyGallery.module.css"; 

const Mygallery = () => {
  const images = [
    "/images/photo1.png",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.webp",
    "/images/photo7.jfif",
    "/images/photo8.jpg",
  ];

  return (
    <section className={styles.galleryContainer}>
      <h1 className={styles.pageTitle}>Photography Gallery</h1>
      <p className={styles.subtitle}>Explore the moments captured through my lens</p>

      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={image} alt={`Gallery Image ${index + 1}`} className={styles.galleryImage} />
          </div>
        ))}
      </div>

      <div className={styles.ctaContainer}>
        <Link href="/ContactMe">
          <button className={styles.ctaButton}>Get in Touch</button>
        </Link>
      </div>
    </section>
  );
};

export default Mygallery;
