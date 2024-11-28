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
  let data: ApodItem[] | null = null;

  try {
    // Attempt to fetch data
    data = await getData(20);
  } catch (error) {
    console.error("Error fetching NASA data:", error);
  }

  // Handle the case where data is null (API failure)
  if (!data) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to NASA Astronomy Pictures</h1>
        <div className={styles.grid}>
          <p className={styles.error}>
            Failed to load data from NASA API. Please try again later.
          </p>
        </div>
      </main>
    );
  }

  // Render the page with the fetched data
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
