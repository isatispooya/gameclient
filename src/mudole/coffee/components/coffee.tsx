import React from "react";
import { useCoffee } from "../hooks";
import { useNavigate } from "react-router-dom";

const Coffee = () => {
  const [guesses, setGuesses] = React.useState<string[]>(Array(4).fill(""));
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const { mutate: coffee } = useCoffee("9");
  const navigate = useNavigate();

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
        coffee({ score: 100 });
      } else {
        setMessage("اشتباه است! دوباره تلاش کنید");
      }
    }
  };

  const resetGame = () => {
    setGuesses(Array(4).fill(""));
    setCurrentPosition(0);
    setMessage("");
    navigate("/missions");
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-md mx-auto">
      <div className="flex gap-3">
        {guesses.map((letter, index) => (
          <div
            key={index}
            className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center text-2xl font-semibold bg-white shadow-sm"
          >
            {letter}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 w-full">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option.letter)}
            className="aspect-square bg-white hover:bg-gray-50 rounded-xl flex flex-col items-center justify-center shadow-md active:shadow-inner active:translate-y-[1px] border border-gray-200 transition-all"
          >
            <span className="text-xl text-gray-500 mb-1">{option.number}</span>
            <span className="text-2xl font-bold">{option.letter}</span>
          </button>
        ))}
      </div>
      <p className="text-center text-gray-500">
        با توجه به لیوانهای قهوه موجود در رویداد,نام نماد سودآور آقای اصلانی را
        پیدا کنید.
      </p>
      {message && (
        <div className="mt-2 text-center">
          <p className="text-lg font-medium mb-3">{message}</p>
          <button
            onClick={resetGame}
            className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
          >
             بازگشت به ماموریت ها
          </button>
        </div>
      )}
    </div>
  );
};

export default Coffee;
