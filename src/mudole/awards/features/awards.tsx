import { useState, useEffect } from 'react';
import { awardsData } from './awardsData';

const Awards = () => {
  const [openAward, setOpenAward] = useState<number | null>(null);
  const [claimedAwards, setClaimedAwards] = useState<number[]>([]); 
  const [showCelebration, setShowCelebration] = useState(false); 
  const [isProcessing, setIsProcessing] = useState(false); 
  const [isAnimationComplete, setIsAnimationComplete] = useState(false); 
  const [showPopup, setShowPopup] = useState(false); 

  const createParticle = () => {
    const colors = ['#FF1493', '#FFD700', '#00BFFF', '#32CD32', '#FF4500', '#9400D3'];
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '12px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '-12px';
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;
    particle.style.opacity = '0.8';
    particle.style.pointerEvents = 'none';
    particle.style.animation = `confettiFall ${Math.random() * 2 + 1}s ease-in-out`;
    document.querySelector('.awards-container')?.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 3000);
  };

  const createBoxConfetti = (boxElement: Element) => {
    const rect = boxElement.getBoundingClientRect();
    const colors = ['#FF1493', '#FFD700', '#00BFFF', '#32CD32', '#FF4500', '#9400D3'];
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.width = '4px';
      particle.style.height = '10px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = `${rect.left}px`;
      particle.style.top = `${rect.top}px`;
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
      particle.style.opacity = '0.8';
      particle.style.pointerEvents = 'none';
      particle.style.animation = `boxConfetti ${Math.random() * 1.5 + 1}s ease-out`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 2500);
    }
  };

  useEffect(() => {
    if (showCelebration) {
      document.body.style.overflow = 'hidden'; 
      setShowPopup(true);
      const interval = setInterval(() => {
        for (let i = 0; i < 5; i++) { 
          createParticle();
        }
      }, 200);

      const openBox = document.querySelector(`[data-award-id="${openAward}"]`);
      if (openBox) {
        createBoxConfetti(openBox);
      }

      setTimeout(() => {
        clearInterval(interval);
        setShowCelebration(false);
        setIsProcessing(false);
        setIsAnimationComplete(true);
        document.body.style.overflow = ''; 
        setTimeout(() => setShowPopup(false), 2000);
      }, 2000);

      return () => {
        clearInterval(interval);
        document.body.style.overflow = ''; 
      };
    }
  }, [showCelebration, openAward]);

  const handleAwardClick = (id: number) => {
    if (isProcessing || claimedAwards.includes(id) || isAnimationComplete) return;
    
    setIsProcessing(true);
    setOpenAward(id);
    setClaimedAwards([...claimedAwards, id]);
    setShowCelebration(true);
  };

  return (
    <div className="awards-container relative overflow-hidden h-full">
      <style>
        {`
          .awards-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 12px;
            perspective: 1000px;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
          }

          .box {
            background: linear-gradient(135deg, #f09, #ff6);
            border-radius: 12px;
            padding: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), box-shadow 0.5s ease;
            will-change: transform, box-shadow;
            transform-style: preserve-3d;
          }

          .box:hover {
            transform: rotateY(8deg) rotateX(4deg) scale(1.03);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
          }

          .popup {
            background: linear-gradient(45deg, #32cd32, #00bfff);
            border-radius: 8px;
            padding: 12px;
            animation: fadeInUp 0.6s ease forwards;
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
            backdrop-filter: blur(6px);
          }

          .award-title {
            color: #ff6347;
            font-weight: 500;
            font-size: 1.25rem;
            text-align: center;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          }

          .award-description {
            color: #555;
            font-size: 0.75rem;
            text-align: justify;
            line-height: 1.4;
          }

          @keyframes confettiFall {
            0% {
              transform: translateY(0) rotate(0deg) scale(1);
              opacity: 0.8;
            }
            100% {
              transform: translateY(100vh) rotate(720deg) scale(0.3);
              opacity: 0;
            }
          }

          @keyframes boxConfetti {
            0% {
              transform: translate(0, 0) rotate(0deg) scale(1);
              opacity: 0.8;
            }
            100% {
              transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)
                        rotate(${Math.random() * 720}deg) scale(0.3);
              opacity: 0;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .popup span {
            font-size: 2rem;
            animation: bounce 0.8s infinite;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .hover-effect:hover {
            transform: rotateZ(2deg) scale(1.02);
          }
        `}
      </style>

      <div className="flex flex-col gap-2 p-3">
        {awardsData.awards.map((award) => (
          <div key={award.id} className="w-full">
            <div
              data-award-id={award.id}
              className={`rounded-xl p-4 transition-all duration-400 bg-gradient-to-br
                ${claimedAwards.includes(award.id) 
                  ? 'from-gray-100 to-gray-200 opacity-50' 
                  : 'from-[#0d3b66] via-[#084c8d] to-[#12527c] hover:from-[#0b2f4a] hover:via-[#07395e] hover:to-[#0a4971]'
                }
                ${(claimedAwards.includes(award.id) || isProcessing || isAnimationComplete) 
                  ? 'cursor-not-allowed' 
                  : 'hover:shadow-lg hover:shadow-[#0d3b66]/30 cursor-pointer hover:scale-102 hover:-translate-y-0.5'
                }`}
              onClick={() => handleAwardClick(award.id)}
            >
              <div className="flex items-start text-white">
                <div className="w-16 h-16 flex text-white items-center justify-center animate-[floatAnimation_1.5s_ease-in-out_infinite] ml-2">
                  <span className="text-4xl filter text-gray-100 drop-shadow-sm">🎁</span>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-base font-medium text-white">{award.title}</h3>
                  <p className="text-2xs text-white mt-0.5">{award.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {showPopup && (
        <div className="fixed left-1/2 bottom-[4vh] transform -translate-x-1/2 
          bg-gradient-to-r from-green-400 to-emerald-500 rounded p-2
          shadow-sm animate-[popupAnimation_0.4s_ease] z-50 max-w-[200px]
          border border-white/15 backdrop-blur-sm"
        >
          <div className="text-center">
            <span className="text-lg mb-0.5 block animate-bounce">🎉</span>
            <p className="text-white font-normal text-xs">تبریک! شما برنده شدید</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;