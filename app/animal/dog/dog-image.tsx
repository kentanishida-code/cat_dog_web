"use client";

import { useState } from "react";
import { fetchDogImage } from "@/lib/api/fetch-image";
import styles from "./page.module.css";

type DogImageProps = {
  url: string;
};

export function DogImage({ url }: DogImageProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl("");
    const newUrl = await fetchDogImage();
    setImageUrl(newUrl);
  };

  return (
    <div className={styles.page}>
      <button onClick={refreshImage} className={styles.button}>
        他のわんこも見る
      </button>

      <div className={styles.frame}>
        {imageUrl && (
          <img src={imageUrl} className={styles.img} alt="犬の画像" />
        )}
      </div>
    </div>
  );
}