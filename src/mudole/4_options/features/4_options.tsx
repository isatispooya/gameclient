import { useState } from 'react';
import { questions, Question } from './questions';

const getRandomQuestions = (allQuestions: Question[], count: number) => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const FourOptionsQuestion = () => {
  const [randomQuestions] = useState(() => getRandomQuestions(questions, 5));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: number | null}>({});

  const currentQuestion: Question = randomQuestions[currentQuestionIndex];

  const handleOptionSelect = (optionId: number) => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentQuestionIndex]: optionId
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white rounded-xl text-[#0d3b66] p-8 pt-16">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="flex justify-center gap-4 mb-8">
            {randomQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === currentQuestionIndex
                    ? 'bg-gradient-to-br from-[#0d3b66] via-[#084c8d] to-[#12527c] text-white scale-110'
                    : 'bg-[#0d3b66]/30'
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <h2 className="text-xl font-medium mt-4 text-right text-[#0d3b66]">
            {currentQuestion.text}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              className={`aspect-square p-4 text-base text-center flex items-center justify-center text-white relative
                hover:scale-105 hover:shadow-lg hover:shadow-[#0d3b66]/30 ${
                selectedOptions[currentQuestionIndex] === option.id 
                  ? 'bg-gradient-to-br from-[#1976d2] via-[#42a5f5] to-[#64b5f6] scale-105 shadow-lg shadow-[#0d3b66]/50 font-bold'
                  : 'bg-gradient-to-br from-[#0d3b66] via-[#084c8d] to-[#12527c] hover:from-[#084c8d] hover:to-[#0d3b66]'
                } rounded-xl transition-all duration-300 active:scale-95`}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button 
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === randomQuestions.length - 1}
            className={`px-6 py-2 rounded-lg text-white ${
              currentQuestionIndex === randomQuestions.length - 1
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#0d3b66] hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30 active:scale-95'
            }`}
          >
            سوال بعدی
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourOptionsQuestion;
