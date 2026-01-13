import styles from "./Callout.module.css";
import { Button } from "@/components/ui/Button";

type CalloutProps = {
  heading: string;
  body?: string;
  buttonText: string;
  href: string;
};

export function Callout({
  heading,
  body,
  buttonText,
  href,
}: CalloutProps) {
  return (
    <div className={styles.callout}>
      <div className={styles.text}>
        <h2>{heading}</h2>
        {body && <p>{body}</p>}
      </div>

      <Button href={href}>
        {buttonText}
      </Button>
    </div>
  );
}
