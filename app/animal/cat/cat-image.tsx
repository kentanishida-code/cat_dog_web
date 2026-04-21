"use client";

import { useState } from "react";
import { fetchCatImage } from "@/lib/api/fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
  url: string;
};

export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState<string>(url);

  const refreshImage = async () => {
    setImageUrl(""); 
    const newUrl = await fetchCatImage(); 
    setImageUrl(newUrl);
  };

  return (
    <div className={styles.page}>
      <button onClick={refreshImage} className={styles.button}>
        他のにゃんこも見る
      </button>

      <div className={styles.frame}>
        {imageUrl && (
          <img src={imageUrl} className={styles.img} alt="猫の画像" />
        )}
      </div>
    </div>
  );
}