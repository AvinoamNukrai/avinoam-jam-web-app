// import styles from "./page.module.css";
// import { getData } from "./utils";
// import { ApodItem } from "./utils";

// export default async function NasaPage() {
//   let data: ApodItem[] = []; // Initialize an empty array for data

//   try {
//     data = await getData(20); // Fetch 8 items
//   } catch (error) {
//     console.error("Failed to fetch NASA data:", error);
//   }

//   return (
//     <main className={styles.main}>
//       <h1 className={styles.header}>NASA Astronomy Pictures</h1>
//       {data.length === 0 ? (
//         <p style={{ color: "red", fontSize: "1.2rem", marginTop: "2rem" }}>
//           Failed to load data from NASA API. Please try again later.
//         </p>
//       ) : (
//         <div className={styles.grid}>
//           {data.map((item, index) => (
//             <div key={index} className={styles.card}>
//               <img src={item.url} alt={item.title} className={styles.image} />
//               <h2 className={styles.cardTitle}>{item.title}</h2>
//               <p className={styles.cardText}>
//                 <strong>Date:</strong> {item.date}
//               </p>
//               <p className={styles.cardText}>{item.explanation}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }
