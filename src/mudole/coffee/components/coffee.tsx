import React from "react";

const Coffee = () => {
  const [guesses, setGuesses] = React.useState<string[]>(Array(4).fill(""));
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [message, setMessage] = React.useState("");

  const targetWord = "بتیس"; 
  const options = [
    { number: "۱", letter: "ا" },
    { number: "۲", letter: "ب" },
    { number: "۳", letter: "پ" },
    { number: "۴", letter: "س" },
    { number: "۵", letter: "ث" },
    { number: "۶", letter: "ی" },
    { number: "۷", letter: "ت" },
    { number: "۸", letter: "ط" },
    { number: "۹", letter: "ض" },
  ];
 
  const handleOptionClick = (letter: string) => {
    if (currentPosition >= 4) return;

    const newGuesses = [...guesses];
    newGuesses[currentPosition] = letter;
    setGuesses(newGuesses);
    setCurrentPosition(currentPosition + 1);

   

    if (currentPosition === 3) {
      const guessedWord = newGuesses.join("");
      if (guessedWord === targetWord) {
        setMessage("آفرین! کلمه درست است");
      } else {
        setMessage("اشتباه است! دوباره تلاش کنید");
      }
    }
  };

  const resetGame = () => {
    setGuesses(Array(4).fill(""));
    setCurrentPosition(0);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex gap-2">
        {guesses.map((letter, index) => (
          <div
            key={index}
            className="w-12 h-12 border-2 flex items-center justify-center text-xl"
          >
            {letter}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 w-64">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option.letter)}
            className="w-20 h-20 bg-gray-200 hover:bg-gray-300 rounded-lg flex flex-col items-center justify-center shadow-md active:shadow-inner active:translate-y-[1px]"
          >
            <span className="text-2xl    text-gray-600">{option.number}</span>
            <span className="text-2xl font-bold">{option.letter}</span>
          </button>
        ))}
      </div>

      {message && (
        <div className="mt-4">
          <p className="text-lg">{message}</p>
          <button
            onClick={resetGame}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            بازی جدید
          </button>
        </div>
      )}
    </div>
  );
};

export default Coffee;
