import styles from "./ImageGrid.module.css";

type ImageGridProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
