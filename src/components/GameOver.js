import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver () {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Adivinaste correctamente la palabra"
          : "o a veriguaste la palabra"}
      </h3>
      <h1>Palabra correcta: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>Lo conseguiste en {currAttempt.attempt} intentos</h3>
      )}
    </div>
  );
}

export default GameOver;