"use client";
import "/styles/tic-tac-toe.css";
import Board from "./App"; // Adjust the path if necessary

export default function TicTacToe() {
  return (
    <main>
      <h1>Welcome to Tic-Tac-Toe Game!</h1>
      <div>
        <Board />
      </div>
    </main>
  );
}
