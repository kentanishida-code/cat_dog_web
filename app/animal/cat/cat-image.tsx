"use client";

import { useState } from "react";
import { fetchCatImage } from "@/lib/api/animalImage";
import styles from "./page.module.css";

type CatImageProps = {
  url: string;
};

export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState<string>(url);

  const refreshImage = async () => {
    setImageUrl(""); // ローディング用リセット
    const newUrl = await fetchCatImage(); // ← URL直接取得
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