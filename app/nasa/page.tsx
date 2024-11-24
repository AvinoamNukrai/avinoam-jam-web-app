import styles from "./page.module.css";
import { getData } from "./utils";
import { Apod } from "./components/Apod";

export default async function NASA() {
  const data = await getData(20);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to NASA's Astronomy Pictures</h1>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <Apod
            key={index}
            title={item.title}
            explanation={item.explanation}
            date={item.date}
            url={item.url}
          />
        ))}
      </div>
    </main>
  );
}
