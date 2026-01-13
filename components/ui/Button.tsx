import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
};

export function Button({ children, href }: ButtonProps) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
