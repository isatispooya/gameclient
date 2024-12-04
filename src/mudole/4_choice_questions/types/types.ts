export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  selectedAnswer?: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResult: boolean;
  selectedAnswer: number | null;
  showModal: boolean;
  timeLeft: number;
  timerActive: boolean;
} 