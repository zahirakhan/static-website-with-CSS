"use client";
import React from "react";
import styles from "../../styles/Team.module.css"; 

const Team = () => {
  const teamMembers = [
    {
      name: "Selena",
      position: "Support Photographer",
      bio: "Selena is a professional photographer with over 5 years of experience. Her expertise is capturing the natural beauty of landscapes and portraits.",
      image: "/images/team1.webp",
    },
    {
      name: "Medine",
      position: "Editor",
      bio: "Medine has an eye for detail and brings photos to life through expert editing and retouching.",
      image: "/images/team2.jpg",
    },
    {
      name: "Sam Wilson",
      position: "Creative Director",
      bio: "Sam leads the creative vision of our projects and ensures everything aligns with our brand aesthetic.",
      image: "/images/team3.jpg",
    },
    {
        name: "Alice",
        position: "Equipment Expert",
        bio: "Alice leads the equipment controls and setup according to the capture requirements.",
        image: "/images/team4.jpg",
      }
  ];

  return (
    <section className={styles.teamContainer}>
      <h1 className={styles.pageTitle}>Meet the Team</h1>
      <p className={styles.subtitle}>Our team is dedicated to capturing and editing your precious moments.</p>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.profileImageWrapper}>
              <img src={member.image} alt={member.name} className={styles.profileImage} />
            </div>
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
            <p className={styles.bio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
