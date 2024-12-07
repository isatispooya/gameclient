interface QuizModalProps {
  timeLeft: number;
  selectedAnswer: number | null;
  correctAnswer: number;
  options: string[];
  explanation: string;
  onNextQuestion: () => void;
  onQuit: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({
  timeLeft,
  selectedAnswer,
  correctAnswer,
  options,
  explanation,
  onNextQuestion,
}) => {
  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white/90 rounded-2xl p-6 max-w-sm w-full mx-4">
        <h3 className={`text-xl font-bold mb-3 text-center ${
          timeLeft === 0 ? 'text-red-600' : 
          isCorrect ? 'text-green-600' : 'text-red-600'
        }`}>
          {timeLeft === 0 ? 'وقت تمام شد! ⏰' :
           isCorrect ? 'آفرین! پاسخ صحیح بود! 🎉' : 'متأسفانه اشتباه بود! 😕'}
        </h3>
        
        <p className="text-gray-700 mb-3 text-center text-sm">
          {!isCorrect && (
            <>
              پاسخ صحیح: {options[correctAnswer]}
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
            سوال بعدی
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;