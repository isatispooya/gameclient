import React from 'react';

const AccordionItem = ({ title, content, isActive, onToggle }: { title: string; content: React.ReactNode, isActive: boolean, onToggle: () => void }) => {
    return (
        <div className="border-b border-white/20">
            <button 
                className="w-full text-right text-white/90 font-bold py-3 px-4 hover:bg-white/10 transition-all duration-300 flex justify-between items-center"
                onClick={onToggle}
            >
                <span>{title}</span>
                <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="text-white/80 leading-8 text-justify text-lg p-4 bg-white/10 backdrop-blur-sm rounded-lg m-2">
                    {content}
                </div>
            </div>
        </div>
    );
};

const TourForm = () => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    return (
        <div className="flex flex-col gap-6 w-full bg-gradient-to-br from-[#00509d] to-[#0066cc] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
            <div className="w-full mb-6 animate-slide-down">
                <img 
                    src="/_13303318-5e39-4406-8bd4-dcf861b36f16.jpg" 
                    alt="بنر بازی کارآگاهی" 
                    className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    loading="lazy"
                />
            </div>
            
            <h1 className="text-3xl font-extrabold text-white border-b border-white/20 pb-4 text-right animate-fade-in">تور بازی: معمای مرگ مشکوک</h1>
            <div className="flex flex-col gap-6 text-right">
                <h2 className="text-2xl font-bold text-white/90 animate-slide-in">داستان پرونده:</h2>
                <p className="text-white/80 leading-8 text-justify text-lg animate-fade-in-up">
                    در یک صبح سرد پاییزی، خبر شوکه‌کننده‌ای در شهر پیچید: آقای اصلانی، یکی از بهترین مدیران مالی شهر به طرز مرموزی جان خود را از دست داده است. بر اساس شواهد به دست آمده در پرونده خودکشی آقای اصلانی، کارآگاهان کلانتری نیاز به افرادی دارند که از سواد مالی برخوردار بوده و بتوانند آنها را در حل این پرونده همراهی کنند. جایزه بزرگی برای حل این معما در نظر گرفته‌اند.
                </p>
                <p className="text-white/80 leading-8 text-justify text-lg animate-fade-in-up">
                    اکنون شما برای این کار انتخاب شده‌اید، لازم است ابتدا پرونده و گزارش‌ها را مشاهده کرده و با توجه به راهنمایی‌ها و سرنخ‌ها معماها را حل کرده و برنده جایزه بزرگ کلانتری شوید.
                </p>
                <div className="mt-4 p-4 bg-white/10 rounded-xl animate-pulse">
                    <p className="text-white/90 text-lg font-semibold">
                        کارآگاهان مالی با لباس‌های .............. رنگ در کنار شما حضور دارند که می‌توانید برای حل سوالات به آنها مراجعه فرمایید.
                    </p>
                </div>
                <AccordionItem 
                    title="1. قافآ تکرش ریخا یلام شرازگ"
                    content={
                        <ul className="list-disc pr-6">
                            <li>یم ناشن شرازگ نیا هام رد قافآ تکرش هک دهد ییاراد شزرا رد یدیدش شهاک راچد ریخا یاه دوخ یاه تسا هدش.</li>
                            <li>۴۰٪ ییاراد زا تسا هدوب لاتیجید زرا کسیررپ رازاب رد اه.</li>
                            <li>۳۰٪ ییاراد زا هدنام تباث تلاغتسم و کلاما رد اه دنا.</li>
                            <li>۳۰٪ تسا هدش هداد صیصخت ناسونرپ ماهس رد هیامرس زا.</li>
                        </ul>
                    }
                    isActive={activeIndex === 0}
                    onToggle={() => setActiveIndex(activeIndex === 0 ? null : 0)}
                />
                <AccordionItem 
                    title="2. همان یدیلک نایرتشم یاه"
                    content="ییاراد شزرا شهاک لیلد هب قافآ تکرش نایرتشم زا یخرب تساوخرد و هدوب یضاران تدش هب ،دوخ یاه هیامرس یروف تشادرب هداد ار ناش دنا."
                    isActive={activeIndex === 1}
                    onToggle={() => setActiveIndex(activeIndex === 1 ? null : 1)}
                />
                <AccordionItem 
                    title="3. تشاددای ینلاصا یاقآ یصخش"
                    content="هتشون وا ،تسا هدش ادیپ وا راک رتفد رد هک یتشاددای رد: '؟متسه یعقاو رصقم نم ایآ اما .دور ورف نارحب رد تکرش هدش ثعاب نم هابتشا تامیمصت'"
                    isActive={activeIndex === 2}
                    onToggle={() => setActiveIndex(activeIndex === 2 ? null : 2)}
                />
                <AccordionItem 
                    title="4. یتایلام کرادم"
                    content="یسررب یم ناشن اه هک تسا هدرک تخادرپ ینیگنس رایسب تایلام هتشذگ لاس ود رد قافآ تکرش هک دهد یم تیفاعم زا هدافتسا اب تسناوت دبای شهاک اه."
                    isActive={activeIndex === 3}
                    onToggle={() => setActiveIndex(activeIndex === 3 ? null : 3)}
                />
                <AccordionItem 
                    title="5. رازاب لیلحت"
                    content="سروب لک صخاش و تسا هدش دیدش تفا راچد هتشذگ هام رد سروب رازاب 15٪ تسا هتفای شهاک."
                    isActive={activeIndex === 4}
                    onToggle={() => setActiveIndex(activeIndex === 4 ? null : 4)}
                />
            </div>
        </div>
    );
};

export default TourForm;
