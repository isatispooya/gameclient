import React from 'react';

interface QuizModalProps {
  isCorrect: boolean;
  correctAnswer: string;
  explanation?: string;
  onNextQuestion: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({
  isCorrect,
  correctAnswer,
  explanation,
  onNextQuestion,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white/90 rounded-2xl p-6 max-w-sm w-full mx-4">
        <h3 className={`text-xl font-bold mb-3 text-center ${
          isCorrect ? 'text-green-600' : 'text-red-600'
        }`}>
          {isCorrect ? 'آفرین! پاسخ صحیح بود!��' : 'متأسفانه اشتباه بود! 😕'}
        </h3>
        
        <p className="text-gray-700 mb-3 text-center text-sm">
          {!isCorrect && (
            <>
              پاسخ صحیح: {correctAnswer}
              <br />
            </>
          )}
          {explanation && (
            <span className="block mt-2 text-xs">
              {explanation}
            </span>
          )}
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onNextQuestion}
            className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            {isCorrect ? 'سوال بعدی' : 'سوال بعدی'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal; 