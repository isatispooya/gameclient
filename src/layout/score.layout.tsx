import { ReactNode, useState, useEffect } from 'react';
import { BsClockFill } from 'react-icons/bs';
import { MdOutlineSportsScore } from 'react-icons/md';
import { GiPodium } from 'react-icons/gi';
import { FaTasks } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { THEME_COLOR } from '../config';
import { RiPuzzleFill } from 'react-icons/ri';

interface ScoreLayoutProps {
    children: ReactNode;
}

const ScoreLayout = ({ children }: ScoreLayoutProps) => {
    const endTime = new Date(2024, 12, 2, 15, 0, 0);
    const [timeLeft, setTimeLeft] = useState<string>('');

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime.getTime() - now;

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft('پایان زمان');
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-40 w-full bg-white shadow-md">
                <div className="flex items-center justify-between px-6 py-3 border-b">
                    <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
                        <GiPodium className="text-gray-700 text-xl" />
                        <span className="text-xl font-bold text-green-600">۳</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
                        <MdOutlineSportsScore className="text-gray-700 text-xl" />
                        <span className="text-xl font-bold text-blue-600">۱۲۰</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
                        <BsClockFill className="text-gray-700 text-xl" />
                        <span className="text-xl font-mono font-bold text-red-600" dir="ltr">{timeLeft}</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 pb-6 mt-4 px-4">
                {children}
            </div>
            
            <div style={{ backgroundColor: THEME_COLOR }} className="fixed bottom-0 left-0 right-0 flex justify-between items-center gap-2 p-3 w-full max-w-[420px] mx-auto">
                <button onClick={() => navigate('/missions')} className="flex-1 flex flex-col items-center gap-1 text-white py-2 px-4 rounded-xl font-bold transition-colors">
                    <FaTasks className="text-xl" />
                    <span>ماموریت‌ها</span>
                </button>
                <button onClick={() => navigate('/')} className="flex-1 flex flex-col items-center gap-1 text-white py-2 px-4 rounded-xl font-bold transition-colors">
                    <FaMapMarkedAlt className="text-xl" />
                    <span>نقشه راه </span>
                </button>
                <button onClick={() => navigate('/tour')} className="flex-1 flex flex-col items-center gap-1 text-white py-2 px-4 rounded-xl font-bold transition-colors">
                    <RiPuzzleFill className="text-xl" />
                    <span>تور بازی</span>
                </button>
                <button onClick={() => navigate('/ranking')} className="flex-1 flex flex-col items-center gap-1 text-white py-2 px-4 rounded-xl font-bold transition-colors">
                    <IoStatsChart className="text-xl" />
                    <span>نتایج</span>
                </button>
            </div>
        </div>
    );
};

export default ScoreLayout;
