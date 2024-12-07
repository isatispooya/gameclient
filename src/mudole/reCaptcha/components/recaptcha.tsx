import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface RecaptchaProps {
  onVerify?: (success: boolean) => void;
}

const Recaptcha = ({ onVerify }: RecaptchaProps) => {
  const navigate = useNavigate();
  const [position, setPosition] = useState(10);
  const [isDragging, setIsDragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  
  const targetPosition = 75; 
  const threshold = 5; 
  
  const checkPosition = useCallback(() => {
    const isCorrect = Math.abs(position - targetPosition) <= threshold;
    setIsVerified(isCorrect);
    onVerify?.(isCorrect);
    
    if (isCorrect) {
      setTimeout(() => {
        navigate('/tour');
      }, 1000);
    }
  }, [position, targetPosition, onVerify, navigate]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    checkPosition();
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl   border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">بازی سود و سقوط</h3>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg text-gray-700 text-sm leading-relaxed">
        <h4 className="font-bold mb-2">خلاصه داستان:</h4>
        <p>در یک صبح پاییزی، خبر مرگ مشکوک آقای اصلانی، یکی از مدیران مالی برجسته شهر منتشر شد. کارآگاهان برای حل این پرونده به دنبال افرادی با دانش مالی هستند.</p>
      </div>
      
      <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
        <img 
          className="w-full h-full object-cover" 
          src="/ngo.png" 
          alt="captcha" 
        />
        <div 
          className={`absolute w-20 h-20 top-1/2 -translate-y-1/2 transition-all duration-300
            ${isDragging ? 'scale-110 shadow-2xl' : 'scale-100 shadow-lg'} 
            ${isVerified ? 'bg-green-400/40' : 'bg-white/40'}
            backdrop-blur-md border-2 rounded-xl cursor-pointer
            ${isVerified ? 'border-green-500 ring-4 ring-green-300/30' : 'border-white/60'}
            hover:shadow-xl hover:scale-105`}
          style={{ right: `calc(${position}% - ${position * 0.2}px)` }}
        />
        <div 
          className="absolute w-20 h-20 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md border-2 border-white/60 rounded-xl"
          style={{ right: `calc(${targetPosition}% - ${targetPosition * 0.2}px)` }}
        />
      </div>

      <input 
        className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full appearance-none cursor-pointer 
          hover:from-blue-300 hover:to-purple-300
          focus:outline-none focus:ring-4 focus:ring-blue-200
          transition-all duration-300"
        value={position}
        onChange={(e) => setPosition(parseInt(e.target.value))}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        type="range"
        min="0"
        max="80"
        step="1"
      />
        <p className="text-gray-600 mt-2">جهت دسترسی به جزئیات پرونده باید مربع را به محل مناسب بکشید</p>


      {isVerified && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            تایید شد
          </div>
        </div>
      )}
    </div>
  );
};

export default Recaptcha;