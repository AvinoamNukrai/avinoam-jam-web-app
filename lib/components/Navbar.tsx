import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Link href="http://localhost:3000/tic-tac-toe">Tic-Tac-Toe</Link>
        <Link href={COURSE_GITHUB} target="http://localhost:3000/nasa">
          Nasa
        </Link>
        {DEMOS_ENABLED ? (
          <Link href="http://localhost:3000/design">Design</Link>
        ) : null}
      </nav>
    </header>
  );
}
