import styles from "./ContentBlock.module.css";

type ContentBlockProps = {
  title?: string;
  children: React.ReactNode;
};

export function ContentBlock({ title, children }: ContentBlockProps) {
  return (
    <div className={styles.contentBlock}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
}
