import styles from "../styles/button.module.css";

interface ButtonProps {
  text: string;
  type: "button" | "submit";
}

export function Button({ text, type }: ButtonProps) {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
}
