import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={`cell${status ? " " + status : ""}`}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((index) => (
          <Cell
            key={index}
            letter={result ? result[index].letter : undefined}
            status={result ? result[index].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;
