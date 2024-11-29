import Link from "next/link";

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
            <Link href="/tic-tac-toe">
              <span style={{ color: "#f9f871", cursor: "pointer" }}>
                Tic-Tac-Toe
              </span>
            </Link>
            : A classic and fun game you can play anytime.
          </li>
          <li style={{ marginBottom: "10px", paddingLeft: "20px" }}>
            <Link href="/nasa">
              <span style={{ color: "#f9f871", cursor: "pointer" }}>
                NASA Astronomy
              </span>
            </Link>
            : A collection of stunning astronomy photos, courtesy of NASA.
          </li>
          <li style={{ marginBottom: "10px", paddingLeft: "20px" }}>
            <Link href="/design">
              <span style={{ color: "#f9f871", cursor: "pointer" }}>
                Design Page
              </span>
            </Link>
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
