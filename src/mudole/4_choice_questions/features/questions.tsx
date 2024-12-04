import { Question } from '../types/types';

export const questions: Question[] = [
  {
    id: 1,
    question: "پایتخت ایران کدام شهر است؟",
    options: ["اصفهان", "تهران", "شیراز", "تبریز"],
    correctAnswer: 1,
    explanation: "تهران از سال ۱۱۶۵ هجری شمسی پایتخت ایران است"
  },
  {
    id: 2,
    question: "کدام عنصر در جدول تناوبی با نماد 'Au' نشان داده می‌شود؟", 
    options: ["نقره", "طلا", "مس", "آهن"],
    correctAnswer: 1,
    explanation: "نماد Au از کلمه لاتین Aurum به معنای طلا گرفته شده است"
  },
  {
    id: 3,
    question: "بلندترین قله ایران کدام است؟",
    options: ["دماوند", "علم‌کوه", "سبلان", "تفتان"],
    correctAnswer: 0,
    explanation: "قله دماوند با ارتفاع ۵۶۱۰ متر بلندترین قله ایران است"
  }
];