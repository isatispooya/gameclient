import { useState, useEffect, useCallback } from 'react';

interface RecaptchaProps {
  onVerify?: (success: boolean) => void;
}

const Recaptcha = ({ onVerify }: RecaptchaProps) => {
  const [position, setPosition] = useState(10);
  const [isDragging, setIsDragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  
  // موقعیت هدف که کاربر باید مربع رو بهش برسونه
  const targetPosition = 75; // این عدد باید رندوم باشه
  const threshold = 5; // حد مجاز خطا
  
  const checkPosition = useCallback(() => {
    const isCorrect = Math.abs(position - targetPosition) <= threshold;
    setIsVerified(isCorrect);
    onVerify?.(isCorrect);
  }, [position, targetPosition, onVerify]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    checkPosition();
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">شروع بازی</h3>
        <p className="text-sm text-gray-500">مربع را به محل مناسب بکشید</p>
      </div>
      
      <div className="relative w-full aspect-video mb-4">
        <img 
          className="w-full rounded-lg" 
          src="/puzzle_image.png" 
          alt="captcha" 
        />
        <div 
          className={`absolute w-20 h-20 top-1/2 -translate-y-1/2 transition-all
            ${isDragging ? 'scale-105' : 'scale-100'}
            ${isVerified ? 'bg-green-400/30' : 'bg-white/30'}
            backdrop-blur-sm border rounded-lg cursor-pointer
            ${isVerified ? 'border-green-500' : 'border-white/40'}`}
          style={{ right: `calc(${position}% - ${position * 0.2}px)` }}
        />
      </div>

      <input 
        className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer 
          dark:bg-gray-700 accent-blue-500 hover:accent-blue-600 
          hover:bg-gray-300 dark:hover:bg-gray-600
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200"
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

      {isVerified && (
        <div className="mt-4 text-center text-green-600">
          ✓ تایید شد
        </div>
      )}
    </div>
  );
};

export default Recaptcha;