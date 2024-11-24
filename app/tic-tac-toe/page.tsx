"use client";
import styles from "./page.module.css";
import Board from "./components/Board";

export default function TicTacToe() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to Tic-Tac-Toe Game!</h1>
      <div className={styles.ticTacToeContainer}>
        <Board />
      </div>
    </main>
  );
}
