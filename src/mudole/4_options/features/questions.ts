import { Question } from '../types/types';

export const questions: Question[] = [
  {
    id: 1,
    text: "پایتخت ایران کدام شهر است؟",
    options: [
      { id: 1, text: "تهران" },
      { id: 2, text: "اصفهان" },
      { id: 3, text: "تبریز" },
      { id: 4, text: "شیراز" }
    ],
    correctOptionId: 1
  },
  {
    id: 2,
    text: "کدام گزینه از عناصر اصلی زبان برنامه نویسی جاوااسکریپت نیست؟",
    options: [
      { id: 1, text: "متغیر" },
      { id: 2, text: "حلقه" },
      { id: 3, text: "شرط" },
      { id: 4, text: "کامپایلر" }
    ],
    correctOptionId: 4
  },
  {
    id: 3,
    text: "بزرگترین سیاره منظومه شمسی کدام است؟",
    options: [
      { id: 1, text: "زمین" },
      { id: 2, text: "مشتری" },
      { id: 3, text: "زحل" },
      { id: 4, text: "مریخ" }
    ],
    correctOptionId: 2
  }
];

export type { Question } from '../types/types'; 