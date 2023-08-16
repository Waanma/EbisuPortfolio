import React from "react";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.aboutContainer}>
            <div className={styles.aboutMe}>
                <h1>Sobre mí</h1>
            </div>
            <div className={styles.textContainer}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam error minima fuga natus. Deleniti hic doloribus praesentium! Rerum cupiditate, ullam quam natus maxime sequi accusantium recusandae omnis qui laborum.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam error minima fuga natus. Deleniti hic doloribus praesentium! Rerum cupiditate, ullam quam natus maxime sequi accusantium recusandae omnis qui laborum.
                </p>
            </div>
        </div>
    </div>
  );
};

export default About;
