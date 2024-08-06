import React from "react";

function HappyBanner({ numberOfGuesses }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {numberOfGuesses} guesses</strong>.
    </p>
  );
}
function SadBanner({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
}
function Banner({ gameState, answer, numberOfGuesses }) {
  return (
    <div className={`${gameState} banner`}>
      {gameState === "sad" ? (
        <SadBanner answer={answer} />
      ) : (
        <HappyBanner numberOfGuesses={numberOfGuesses} />
      )}
    </div>
  );
}

export default Banner;
