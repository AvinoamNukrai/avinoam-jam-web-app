import styles from "./apod.module.css";

export function Apod({
  title,
  date,
  explanation,
  url,
}: {
  title: string;
  date: string;
  explanation: string;
  url: string;
}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.date}>{date}</p>
      <img className={styles.image} src={url} alt={title} />
      <p className={styles.explanation}>{explanation}</p>
    </div>
  );
}
