import React, { useEffect } from "react";

const Qa = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [message, setMessage] = React.useState("");

  const questions = [
    {
      question:
        "شواهدی وجود دارد که این فرد در یکی از صندوق ها سرمایه گذاری کرده اما نام این صندوق برای ما مشخص نیست اما بر اساس دفترچه یادداشت که نام این صندوق هم نام یکی از نقوش معروف استان یزد است.",
      hint: "راهنما: برای یافتن نام به تصاویر یکی از دستورات ریوباند موجود است توجه فرمایید.",
      answer: "ترمه",
    },
    {
      question: "نام نماد گروه پیشگامان کویر چیست",
      hint: "",
      answer: "بازرگام",
    },
    {
      question: "تعداد لوگوهای پیشگامان کویر چندعدد است؟ عدد را وارد کنید.",
      hint: "حال به درب ورودی سالن مراجعه کرده و تعداد تکرار لوگو های موجود در در را پیدا کنید.",
      answer: "5",
    },
    {
      question:
        "یاسین دهقان یکی از مشاوران مشهور کسب‌وکاری بوده که توانست آقای اصلانی را از بحران های زیادی نجات دهد. او می‌تواند اطلاعات خوبی از روش برون رفت از بحران به ما دهد باید اورا ملاقات کنیم. با توجه به نمایشگر های گشواره کنار ها این اسم را پیدا کنید و با توجه به آن به سوال زیر پاسخ دهید. با پاسخ به این سوال برنده جایزه 5 بلیت ورودی رایگان به این سمینار با موضوع (نقشه راه مدیران مراکز آموزشی) شوید. زمان برگزاری دوره در چه روزی صورت گرفته است؟",
      hint: "باکس پاسخگویی: جمعه",
      answer: "جمعه",
    },
  ];

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (
      userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()
    ) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer("");
        setMessage("آفرین! جواب درست بود.");
      } else {
        setMessage("تبریک! شما به همه سوالات پاسخ دادید.");
      }
    } else {
      setMessage("جواب اشتباه است. لطفا دوباره تلاش کنید.");
    }
  };

  useEffect(() => {
    setMessage("");
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">سوالات متداول</h2>

      <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              سوال {currentQuestionIndex + 1}
            </label>
            <p className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50">
              {currentQuestion.question}
            </p>
            {currentQuestion.hint && (
              <p className="text-sm text-gray-500 mt-2">
                {currentQuestion.hint}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              پاسخ شما
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="پاسخ خود را وارد کنید..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              ثبت پاسخ
            </button>
            {message && (
              <p
                className={`text-sm ${
                  message.includes("آفرین") || message.includes("تبریک")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qa;
