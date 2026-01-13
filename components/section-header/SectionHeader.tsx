import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
};

export function SectionHeader({
  title,
  subtitle,
  variant = "light",
}: SectionHeaderProps) {
  return (
    <header
      className={`${styles.header} ${
        variant === "dark" ? styles["header--dark"] : styles["header--light"]
      }`}
    >
      <h2 className={styles.title}>{title}</h2>

      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
    </header>
  );
}
