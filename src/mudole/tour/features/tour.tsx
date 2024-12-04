import React from "react";
import { TypeAnimation } from "react-type-animation";

const AccordionItem = ({
  title,
  content,
  isActive,
  onToggle,
  className,
  style,
}: {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={`border border-white/30 rounded-lg mb-3 shadow-lg hover:shadow-xl transition-all duration-300 ${className || ''}`} style={style}>
      <button
        className={`w-full text-right text-white/90 font-bold py-4 px-5 rounded-t-lg flex justify-between items-center ${
          isActive ? "bg-white/20" : "hover:bg-white/10"
        } transition-all duration-300`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-white/80 leading-8 text-justify text-lg p-5 bg-white/10 backdrop-blur-sm rounded-b-lg">
          {content}
        </div>
      </div>
    </div>
  );
};

const TourForm = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [showEvidence, setShowEvidence] = React.useState(false);
  const [showTypeAnimation, setShowTypeAnimation] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypeAnimation(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto bg-gradient-to-br from-[#00509d] to-[#0066cc] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
      <div className="w-full mb-6 animate-slide-down">
        <img
          src="/_13303318-5e39-4406-8bd4-dcf861b36f16.jpg"
          alt="بنر بازی کارآگاهی"
          className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          loading="lazy"
        />
      </div>

      <h1 className="text-3xl font-extrabold text-white border-b border-white/20 pb-4 text-right animate-fade-in">
        تور بازی: معمای مرگ مشکوک
      </h1>
      <div className="flex flex-col gap-6 text-right">
        <TypeAnimation
          sequence={["داستان پرونده:", 1000]}
          speed={50}
          wrapper="h2"
          className="text-2xl font-bold text-white/90 animate-slide-in"
          repeat={1}
        />

        <TypeAnimation
          sequence={[
            "در یک صبح سرد پاییزی، خبر شوکه‌کننده‌ای در شهر پیچید: آقای اصلانی، یکی از بهترین مدیران مالی شهر به طرز مرموزی جان خود را از دست داده است. بر اساس شواهد به دست آمده در پرونده خودکشی آقای اصلانی، کارآگاهان کلانتری نیاز به افرادی دارند که از سواد مالی برخوردار بوده و بتوانند آنها را در حل این پرونده همراهی کنند. جایزه بزرگی برای حل این معما در نظر گرفته‌اند. اکنون شما برای این کار انتخاب شده‌اید، لازم است ابتدا پرونده و گزارش‌ها را مشاهده کرده و با توجه به راهنمایی‌ها و سرنخ‌ها معماها را حل کرده و برنده جایزه بزرگ کلانتری شوید.",
            1000,
          ]}
          speed={50}
          wrapper="p"
          className="text-white/80 leading-8 text-justify text-lg animate-fade-in-up"
          repeat={1}
        />

        {showTypeAnimation && (
          <TypeAnimation
            sequence={[
              1000,
              "کارآگاهان مالی با لباس‌های .............. رنگ در کنار شما حضور دارند که می‌توانید برای حل سوالات به آنها مراجعه فرمایید.",
              1000,
              () => setShowEvidence(true),
            ]}
            speed={50}
            wrapper="div"
            className="mt-4 p-4 bg-white/10 rounded-xl text-white/90 text-lg font-semibold"
            repeat={1}
          />
        )}

        {showEvidence && (
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold text-white/90 animate-slide-in">
              شواهد و مدارک:
            </h2>
            <div className="space-y-3">
              <AccordionItem
                title="۱. گزارش مالی اخیر شرکت آفاق"
                content={
                  <ul className="list-disc pr-6">
                    <li>
                      این گزارش نشان می‌دهد که شرکت آفاق در ماه‌های اخیر دچار
                      کاهش شدیدی در ارزش دارایی‌های خود شده است.
                    </li>
                    <li>
                      ۴۰٪ از دارایی‌ها در بازار پرریسک ارز دیجیتال بوده است.
                    </li>
                    <li>۳۰٪ از دارایی‌ها در املاک و مستغلات ثابت مانده‌اند.</li>
                    <li>۳۰٪ از سرمایه در سهام پرنوسان تخصیص داده شده است.</li>
                  </ul>
                }
                isActive={activeIndex === 0}
                onToggle={() => setActiveIndex(activeIndex === 0 ? null : 0)}
                className="animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              />
              <AccordionItem
                title="۲. نامه‌های مشتریان کلیدی"
                content="برخی از مشتریان شرکت آفاق به دلیل کاهش ارزش دارایی‌های خود، به شدت ناراضی بوده و درخواست برداشت فوری سرمایه‌هایشان را داده‌اند."
                isActive={activeIndex === 1}
                onToggle={() => setActiveIndex(activeIndex === 1 ? null : 1)}
                className="animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              />
              <AccordionItem
                title="۳. یادداشت شخصی آقای اصلانی"
                content="در یادداشتی که در دفتر کار او پیدا شده است، او نوشته: 'تصمیمات اشتباه من باعث شده شرکت در بحران فرو رود. اما آیا من مقصر واقعی هستم؟'"
                isActive={activeIndex === 2}
                onToggle={() => setActiveIndex(activeIndex === 2 ? null : 2)}
                className="animate-fade-in-up"
                style={{ animationDelay: "600ms" }}
              />
              <AccordionItem
                title="۴. مدارک مالیاتی"
                content="بررسی‌ها نشان می‌دهد که شرکت آفاق در دو سال گذشته مالیات بسیار سنگینی پرداخت کرده است که می‌توانست با استفاده از معافیت‌ها کاهش یابد."
                isActive={activeIndex === 3}
                onToggle={() => setActiveIndex(activeIndex === 3 ? null : 3)}
                className="animate-fade-in-up"
                style={{ animationDelay: "800ms" }}
              />
              <AccordionItem
                title="۵. تحلیل بازار"
                content="بازار بورس در ماه گذشته دچار افت شدید شده است و شاخص کل بورس ۱۵٪ کاهش یافته است."
                isActive={activeIndex === 4}
                onToggle={() => setActiveIndex(activeIndex === 4 ? null : 4)}
                className="animate-fade-in-up"
                style={{ animationDelay: "1000ms" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourForm;
