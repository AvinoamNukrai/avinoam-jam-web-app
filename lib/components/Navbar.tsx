import Link from "next/link";
import { APP_NAME, TIC_TAC_TOE, NASA, DESIGN, DEMOS_ENABLED } from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Link href={TIC_TAC_TOE}>Tic-Tac-Toe</Link>
        <Link href={NASA}>Nasa</Link>
        {DEMOS_ENABLED ? <Link href={DESIGN}>Design</Link> : null}
      </nav>
    </header>
  );
}
