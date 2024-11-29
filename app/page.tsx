import { TIC_TAC_TOE, NASA, DESIGN } from "../lib/config";

export default function Home() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#1e1e2f",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Welcome To Avinoam Jam Website!
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Welcome to my personal website!
        </p>
        <p
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Here, you’ll find a variety of exciting content:
        </p>
        <ul
          style={{
            listStylePosition: "inside",
            paddingLeft: "0",
            marginLeft: "0",
            fontSize: "1.2rem",
            lineHeight: "1.6",
          }}
        >
          <li style={{ marginBottom: "10px", paddingLeft: "20px" }}>
            <a href={TIC_TAC_TOE} style={{ color: "#f9f871" }}>
              Tic-Tac-Toe
            </a>
            : A classic and fun game you can play anytime.
          </li>
          <li style={{ marginBottom: "10px", paddingLeft: "20px" }}>
            <a href={NASA} style={{ color: "#f9f871" }}>
              NASA Astronomy
            </a>
            : A collection of stunning astronomy photos, courtesy of NASA.
          </li>
          <li style={{ marginBottom: "10px", paddingLeft: "20px" }}>
            <a href={DESIGN} style={{ color: "#f9f871" }}>
              Design Page
            </a>
            : A modern and unique design interface showcasing creative elements.
          </li>
        </ul>
        <p
          style={{ fontSize: "1.2rem", textAlign: "center", marginTop: "20px" }}
        >
          Feel free to explore, play, and enjoy the features of this site. Have
          fun! 😊
        </p>
      </div>
    </main>
  );
}
