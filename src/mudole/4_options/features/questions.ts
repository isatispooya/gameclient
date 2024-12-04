import { Question } from '../types/types';

export const questions: Question[] = [

  {
    id: 1,
    text: "در زمان رکود اقتصادی، کدام دارایی برای شما امن‌تر است؟",
    options: [
      { id: 1, text: "طلا" },
      { id: 2, text: "اوراق قرضه" },
      { id: 3, text: "سهام فناوری" },
      { id: 4, text: "ارز دیجیتال" }
    ],
    correctOptionId: 1
  },
  {
    id: 1,
    text: "اگر در یک شرایط بحرانی بودجه محدود داشته باشید، کدام حوزه سرمایه‌گذاری را ترجیح می‌دهید؟",
    options: [
      { id: 1, text: "سهام بلندمدت" },
      { id: 2, text: "صندوق‌های سرمایه‌گذاری" },
      { id: 3, text: "بازار املاک" },
      { id: 4, text: "هیچکدام" }
    ],
    correctOptionId: 2
  }
];

export type { Question } from '../types/types';