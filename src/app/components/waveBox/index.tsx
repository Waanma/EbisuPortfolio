"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";

const WaveBox = () => {
  useEffect(() => {
    const h1 = document.getElementById("text") as HTMLHeadingElement;
    const originalText = h1.innerText || "";
    h1.innerText = "";

    let currentIndex = 0;

    const showNextLetter = () => {
      if (currentIndex < originalText.length) {
        const letter = document.createTextNode(originalText[currentIndex]);
        h1.appendChild(letter);
        currentIndex++;

        setTimeout(showNextLetter, 400);
      }
    };

    showNextLetter();
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.titleContainer}>
      <h2 className={styles.title2}>Hola! Soy</h2>
      <h1 id="text" className={styles.title}>
        Ébisu
      </h1>
      <p>
        Artista visual, Ilustradora, Muralista y Dibujante Argentina
      </p>
      </div>
    </div>
  );
};

export default WaveBox;