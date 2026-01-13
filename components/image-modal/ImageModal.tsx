import styles from "./ImageModal.module.css";

type ImageModalProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} />
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close image"
        >
          ×
        </button>
      </div>
    </div>
  );
}
