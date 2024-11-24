import styles from "./apod.module.css";

interface ApodProps {
  title: string;
  explanation: string;
  date: string;
  url: string;
}

export function Apod({ title, explanation, date, url }: ApodProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={url} alt={title} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.explanation}>{explanation}</p>
    </div>
  );
}
