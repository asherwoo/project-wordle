import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("guessing");

  function addGuessOnSubmit(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameState("happy");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState("sad");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {gameState === "guessing" ? (
        <GuessInput addGuessOnSubmit={addGuessOnSubmit} />
      ) : (
        <Banner
          gameState={gameState}
          answer={answer}
          numberOfGuesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
