import styles from "./About.module.css";

type AboutProps = {
  imageSrc: string;
  imageAlt: string;
  heading?: string;
  children: React.ReactNode;
};

export function About({
  imageSrc,
  imageAlt,
  heading = "About",
  children,
}: AboutProps) {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div className={styles.content}>
        <h2>{heading}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
