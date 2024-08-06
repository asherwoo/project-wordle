import React from "react";

function GuessInput({ addGuessOnSubmit }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit() {
    addGuessOnSubmit(guess);
    setGuess("");
  }

  return (
    <div>
      <form
        className="guess-input-wrapper"
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
          pattern="[a-zA-Z]{5}"
          maxLength={5}
          minLength={5}
          title="5 letter"
        />
      </form>
    </div>
  );
}

export default GuessInput;
