import { getData } from "./utils";
import { Apod } from "./components/Apod";
import styles from "./page.module.css";

type ApodItem = {
  title: string;
  explanation: string;
  date: string;
  url: string;
};

export default async function NASA() {
  const data: ApodItem[] | null = await getData(10); // Fetch 10 items, adjust as needed

  if (!data) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to NASA Astronomy Pictures</h1>
        <p style={{ color: "red", fontSize: "1.2rem", marginTop: "20px" }}>
          Failed to load data from NASA API. Please try again later.
        </p>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to NASA Astronomy Pictures</h1>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <Apod
            key={index}
            title={item.title}
            date={item.date}
            explanation={item.explanation}
            url={item.url}
          />
        ))}
      </div>
    </main>
  );
}
