import React, { useState, useEffect } from 'react';
import { questions } from './questions';
import { QuizState } from '../types/types';
import QuizModal from './QuizModal';

const QuestionCircles: React.FC<{ total: number; current: number }> = ({ total, current }) => {
  return (
    <div className="flex gap-2 justify-center mb-4">
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
            ${index === current 
              ? 'bg-blue-400 border-2 border-white scale-110' 
              : index < current 
                ? `${questions[index].correctAnswer === questions[index].selectedAnswer ? 'bg-green-500/50' : 'bg-red-500/50'}`
                : 'bg-white/30'
            }`}
        >
          {index < current ? (
            questions[index].correctAnswer === questions[index].selectedAnswer ? '✓' : '✗'
          ) : (
            index + 1
          )}
        </div>
      ))}
    </div>
  );
};

const ChoiceQuiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResult: false,
    selectedAnswer: null,
    showModal: false,
    timeLeft: 30,
    timerActive: true
  });

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    
    if (quizState.timerActive && quizState.timeLeft > 0) {
      timer = setInterval(() => {
        setQuizState((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
    } else if (quizState.timeLeft === 0 && quizState.timerActive) {
      questions[quizState.currentQuestionIndex].selectedAnswer = -1;
      setQuizState((prev) => ({ ...prev, showModal: true, showResult: true, timerActive: false }));
    }

    return () => clearInterval(timer);
  }, [quizState.timeLeft, quizState.timerActive, quizState.currentQuestionIndex]);

  const currentQuestion = questions[quizState.currentQuestionIndex];

  const handleAnswer = (selectedIndex: number) => {
    setQuizState((prev) => ({ 
      ...prev, 
      selectedAnswer: selectedIndex, 
      showResult: true,
      timerActive: false 
    }));
    
    const correct = selectedIndex === currentQuestion.correctAnswer;
    if (correct) {
      setQuizState((prev) => ({ ...prev, score: prev.score + 1 }));
    }
    
    questions[quizState.currentQuestionIndex].selectedAnswer = selectedIndex;

    setTimeout(() => {
      setQuizState((prev) => ({ ...prev, showModal: true }));
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState((prev) => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1, showResult: false, selectedAnswer: null, showModal: false, timeLeft: 30, timerActive: true }));
    }
  };

  const handleQuit = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      selectedAnswer: null,
      showModal: false,
      timeLeft: 30,
      timerActive: true
    });
  };

  const getButtonStyle = (index: number) => {
    if (!quizState.showResult) return 'bg-gradient-to-br from-[#0d3b66] via-[#084c8d] to-[#12527c] text-white'; 
    
    if (index === currentQuestion.correctAnswer) {
      return 'bg-green-500 text-white'; 
    }
    
    if (index === quizState.selectedAnswer && quizState.selectedAnswer !== currentQuestion.correctAnswer) {
      return 'bg-red-500 text-white';
    }
    
    return 'bg-gradient-to-br from-[#0d3b66] via-[#084c8d] to-[#12527c] text-white'; 
  };

  const getTimerColor = () => {
    if (quizState.timeLeft <= 10) return 'bg-red-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen w-full bg-white rounded-xl text-[#0d3b66] p-8">
      <div className="w-full max-w-3xl mx-auto">
          <QuestionCircles 
            total={questions.length} 
            current={quizState.currentQuestionIndex} 
          />
          
          <div className="w-full flex justify-between items-center mb-2">
            <span className="text-lg text-[#0d3b66] px-4 py-1">
              {/* امتیاز: {quizState.score} */}
            </span>
          </div>

          <div className="w-full mt-4 h-4 bg-gray-200 rounded-full mb-4 border-2 border-[#0d3b66]/50">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${getTimerColor()}`}
              style={{ 
                width: `${(quizState.timeLeft / 30) * 100}%`,
                boxShadow: quizState.timeLeft <= 10 ? '0 0 10px rgba(239, 68, 68, 0.5)' : '0 0 10px rgba(34, 197, 94, 0.5)'
              }}
            />
          </div>

          <div className="w-full flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-[#0d3b66] px-4 py-1.5">
              {/* امتیاز: {quizState.score} */}
            </span>
          </div>

          <h2 className="w-full text-xl mb-6 text-center text-[#0d3b66]">
            {currentQuestion.question}
          </h2>

          {quizState.showResult && (
            <div className={`w-full p-4 mb-4 text-center rounded-xl ${quizState.selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {quizState.selectedAnswer === currentQuestion.correctAnswer ? 'پاسخ صحیح بود! 👏' : 'پاسخ اشتباه بود! 😕'}
            </div>
          )}

          <div className="w-full grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={quizState.showResult}
                className={`aspect-square p-4 text-base text-center flex items-center justify-center
                         ${quizState.showResult ? 'cursor-not-allowed' : 'hover:opacity-90 hover:scale-102 hover:shadow-lg'} 
                         ${getButtonStyle(index)} rounded-xl transition-all duration-300
                         font-medium`}
              >
                {option}
              </button>
            ))}
          </div>
        
      </div>

      {quizState.showModal && (
        <QuizModal
          timeLeft={quizState.timeLeft}
          selectedAnswer={quizState.selectedAnswer}
          correctAnswer={currentQuestion.correctAnswer}
          options={currentQuestion.options}
          explanation={currentQuestion.explanation}
          onNextQuestion={handleNextQuestion}
          onQuit={handleQuit}
        />
      )}
    </div>
  );
};

export default ChoiceQuiz;