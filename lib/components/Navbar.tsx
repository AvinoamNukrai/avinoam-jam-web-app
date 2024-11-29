import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#2a2a3c",
        padding: "10px 20px",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        color: "white",
        fontSize: "1.2rem",
      }}
    >
      <Link href="/" style={{ color: "#f9f871", textDecoration: "none" }}>
        Home
      </Link>
      <Link
        href="/tic-tac-toe"
        style={{ color: "#f9f871", textDecoration: "none" }}
      >
        Tic-Tac-Toe
      </Link>
      <Link href="/nasa" style={{ color: "#f9f871", textDecoration: "none" }}>
        NASA
      </Link>
      <Link href="/design" style={{ color: "#f9f871", textDecoration: "none" }}>
        Design
      </Link>
    </nav>
  );
}
