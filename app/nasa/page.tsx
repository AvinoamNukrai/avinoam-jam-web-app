import styles from "./page.module.css";
import { getData } from "./utils";
import { Apod } from "./components/Apod";

// Define the type for each item in the data array
type ApodItem = {
  title: string;
  explanation: string;
  date: string;
  url: string;
};

export default async function NASA() {
  // Specify that getData returns an array of ApodItem
  const data: ApodItem[] = await getData(20);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to NASA Astronomy Pictures</h1>
      <div className={styles.grid}>
        {data.map((item: ApodItem, index: number) => (
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
