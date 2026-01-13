"use client";
import { useState } from "react";
import styles from "./ImageGrid.module.css";
import { ImageModal } from "@/components/image-modal/ImageModal";

type ImageGridProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export function ImageGrid({ images }: ImageGridProps) {
  const isFourImages = images.length === 4;

  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <div
        className={`${styles.grid} ${
          isFourImages ? styles["grid--four"] : ""
        }`}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setActiveImage(image)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {activeImage && (
        <ImageModal
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}


