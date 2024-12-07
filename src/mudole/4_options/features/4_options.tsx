import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions, Question } from "./questions";
import { useSeri3 } from "../hooks";

const FourOptionsQuestion = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number | null;
  }>({});
  const [showStartModal, setShowStartModal] = useState(true);

  const { mutate: seri3 } = useSeri3("8");

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionId,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const answeredCount = Object.keys(selectedOptions).length;
      seri3({ score: answeredCount*50 });
      navigate("/missions");
    }
  };

  const handleStart = () => {
    setShowStartModal(false);
  };

  return (
    <div className=" w-full bg-white rounded-xl text-[#0d3b66] p-8 pt-16">
      {showStartModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white/90 rounded-2xl p-6 max-w-sm w-full mx-4 text-center">
            <h3 className="text-lg font-bold mb-4 text-[#0d3b66]">
              هدف: جمع‌آوری اطلاعات در مورد سواد مالی و استراتژی جمعی
              شرکت‌کنندگان
            </h3>
            <button
              onClick={handleStart}
              className="px-6 py-2 bg-[#0d3b66] text-white rounded-lg hover:bg-[#084c8d] transition-colors"
            >
              ادامه
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="flex justify-center gap-4 mb-8">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === currentQuestionIndex
                    ? "bg-gradient-to-br from-[#0d3b66] via-[#084c8d] to-[#12527c] text-white scale-110"
                    : "bg-[#0d3b66]/30"
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
                    ? "bg-gradient-to-br from-[#1976d2] via-[#42a5f5] to-[#64b5f6] scale-105 shadow-lg shadow-[#0d3b66]/50 font-bold"
                    : "bg-gradient-to-br from-[#0d3b66] via-[#084c8d] to-[#12527c] hover:from-[#084c8d] hover:to-[#0d3b66]"
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
            className={`px-6 py-2 rounded-lg text-white ${
              currentQuestionIndex === questions.length - 1 && Object.keys(selectedOptions).length === questions.length
                ? "bg-green-500 hover:bg-green-600"
                : "bg-[#0d3b66] hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30 active:scale-95"
            }`}
          >
            {currentQuestionIndex === questions.length - 1 ? "پایان" : "سوال بعدی"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourOptionsQuestion;
