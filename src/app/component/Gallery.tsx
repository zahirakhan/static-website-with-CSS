"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Work</h2>
        <div className={styles.linecontainer3}>
          <hr className={styles.line3} />
        </div>
        <p className={styles.subtitle}>
          A collection of moments I&apos;ve captured with passion and precision.
        </p>

        <div className={styles.galleryGrid}>
          <div className={styles.imageItem}>
            <img
              src="/images/photo1.png"
              alt="Gallery Image 1"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.imageItem}>
            <img
              src="/images/photo2.jpg"
              alt="Gallery Image 2"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.imageItem}>
            <img
              src="/images/photo3.jpg"
              alt="Gallery Image 3"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.imageItem}>
            <img
              src="/images/photo4.jpg"
              alt="Gallery Image 4"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.imageItem}>
            <img
              src="/images/photo5.jpg"
              alt="Gallery Image 5"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.imageItem}>
            <img
              src="/images/photo6.webp"
              alt="Gallery Image 6"
              className={styles.galleryImage}
            />
          </div>
        </div>

        <div className={styles.viewMoreWrapper}>
          <Link href="/Mygallery">
            <button className={styles.viewMoreBtn}>View More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
