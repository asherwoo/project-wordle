import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <>
      <p className="guess">
        {range(5).map((index) => (
          <span
            className={`cell${
              guess[index].status ? " " + guess[index].status : ""
            }`}
            key={index}
          >
            {guess[index].letter}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
