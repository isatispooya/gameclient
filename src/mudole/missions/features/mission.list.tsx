import useMissionsGet from "../hooks/useMissionsGet";
import { MissionType } from "../types";
import MissionCart from "./mission.cart";
import { useNavigate } from "react-router-dom";
import { BsLock } from "react-icons/bs";

const MissionList = () => {
  const { missions, isPending } = useMissionsGet();
  const navigate = useNavigate();

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const mission_list: MissionType[] = [
    {
      image: "sejam.png",
      title: "سجام",
      isCompleted: missions?.mission.sejam_done ?? false,
      score: missions?.mission.sejam_score ?? 0,
      totalScore: 100,
      description: "برای شروع بازی باید ابتدا این مرحله را تکمیل کنید",
      route: "/sejam",
      isLocked: false
    },
  
    {
      image: "puzzle.svg", 
      title: "پازل",
      isCompleted: missions?.mission.puzzle_done ?? false,
      score: missions?.mission.puzzle_score ?? 0,
      totalScore: 100,
      description: "برای باز شدن این مرحله باید مرحله کارگزاری را تکمیل کنید",
      route: "/puzzle",
      isLocked: !(missions?.mission.broker_done ?? false) || (missions?.mission.broker_score === 100)
    },
    {
      image: "qa-training.png",
      title: "سوالات سری اول",
      isCompleted: missions?.mission.test_question_1_done ?? false,
      score: missions?.mission.test_question_1_score ?? 0,
      totalScore: 100,
      description: "برای باز شدن این مرحله باید مرحله پازل را تکمیل کنید",
      route: "/4_choice_questions", 
      isLocked: !(missions?.mission.puzzle_done ?? false) || (missions?.mission.puzzle_score === 100)
    },
    {
      image: "SL-050620-30640-14.jpg",
      title: "سوالات سری دوم",
      isCompleted: missions?.mission.test_question_2_done ?? false,
      score: missions?.mission.test_question_2_score ?? 0,
      totalScore: 100,
      description: "برای باز شدن این مرحله باید مرحله سوالات سری اول را تکمیل کنید",
      route: "/question2",
      isLocked: !(missions?.mission.test_question_1_done ?? false) || (missions?.mission.test_question_1_score === 100)
    },
    {
      image: "SL-050620-30640-14.jpg",
      title: "سوالات سری سوم",
      isCompleted: missions?.mission.test_question_3_done ?? false,
      score: missions?.mission.test_question_3_score ?? 0,
      totalScore: 100,
      description: "برای باز شدن این مرحله باید مرحله سوالات سری دوم را تکمیل کنید",
      route: "/4_option",
      isLocked: !(missions?.mission.test_question_2_done ?? false) || (missions?.mission.test_question_2_score === 100)
    },
    {
      image: "coffee.avif",
      title: "قهوه",
      isCompleted: missions?.mission.coffee_done ?? false,
      score: missions?.mission.coffee_score ?? 0,
      totalScore: 100,
      description: "برای باز شدن این مرحله باید مرحله سوالات سری سوم را تکمیل کنید",
      route: "/coffee",
      isLocked: !(missions?.mission.test_question_3_done ?? false) || (missions?.mission.test_question_3_score === 100)
    },
    {
      image: "qa-training.png",
      title: "سوالات سری چهارم",
      isCompleted: missions?.mission.test_question_4_done ?? false,
      score: missions?.mission.test_question_4_score ?? 0,
      totalScore: 100,
      description: "برای باز شدن این مرحله باید مرحله قهوه را تکمیل کنید",
      route: "/qa",
      isLocked: !(missions?.mission.coffee_done ?? false) || (missions?.mission.coffee_score === 100)
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <button 
        onClick={() => missions?.mission.sejam_done && missions?.mission.sejam_score === 100 ? null : navigate('/sejam')}
        className={`px-8 py-3 ${missions?.mission.sejam_done && missions?.mission.sejam_score === 100 ? 'bg-[#38a3a5] cursor-not-allowed' : 'bg-blue-800'} text-white text-6xl font-bold rounded-3xl transition-all duration-300 w-full mb-6 shadow-lg flex items-center justify-center gap-3`}
      >
        شروع بازی
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
        {mission_list.map((mission, index) => (
          <div 
            key={index}
            className={`relative transform hover:scale-[1.02] transition-all duration-300 ${
              mission.isLocked ? 'opacity-50 pointer-events-none filter grayscale' : 
              mission.isCompleted && mission.score === 100 ? 'bg-[#e8f5e9] pointer-events-none' : 'hover:shadow-xl'
            }`}
            onClick={() => !mission.isLocked && mission.score !== 100 && navigate(mission.route)}
          >
            {mission.isLocked && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <BsLock className="text-gray-600 text-4xl" />
              </div>
            )}
            <MissionCart {...mission} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionList;
