import { useState } from 'react';
import { questions, Question } from './questions';

const FourOptionsQuestion = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: number | null}>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId: number) => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentQuestionIndex]: optionId
    }));
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowResult(false);
    }
  };


  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <div className="flex justify-center gap-4 mb-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index === currentQuestionIndex
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-white'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold mt-2 text-right">{currentQuestion.text}</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4 px-2">
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            className={`aspect-square p-2 rounded-xl text-center flex items-center justify-center transition-all ${
              !showResult 
                ? 'hover:bg-blue-50 hover:border-blue-300'
                : ''
            } ${
              selectedOptions[currentQuestionIndex] === option.id 
                ? 'bg-blue-100 border-2 border-blue-500'
                : 'bg-gray-50 border-2 border-gray-200'
            }`}
            onClick={() => handleOptionSelect(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">

        <button 
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
          className={`px-6 py-2 rounded-lg ${
            currentQuestionIndex === questions.length - 1
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          سوال بعدی
        </button>
      </div>
    </div>
  );
};

export default FourOptionsQuestion;
