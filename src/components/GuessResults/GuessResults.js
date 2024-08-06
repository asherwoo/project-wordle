import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
          <Guess
            guess={guesses[i] ? guesses[i] : undefined}
            answer={answer}
            key={i}
            id={i}
          />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
