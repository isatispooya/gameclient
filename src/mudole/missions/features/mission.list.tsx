import useMissionsGet from "../hooks/useMissionsGet";
import { MissionType } from "../types";
import MissionCart from "./mission.cart";
import { useNavigate } from "react-router-dom";
import { BsLock } from "react-icons/bs";

const MissionList = () => {
  const { data: missions, isPending } = useMissionsGet();
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
      isLocked: !missions?.mission?.sejam_open,
    },

    {
      image: "qa-training.png",
      title: "کمک به کارآگاه",
      isCompleted: missions?.mission.test_question_1_done ?? false,
      score: missions?.mission.test_question_1_score ?? 0,
      totalScore: 100,
      description: "برای کمک به حل پرونده به سوالات پاسخ دهید",
      route: "/4_choice_questions",
      isLocked: !missions?.mission?.test_question_1_open,
    },

    {
      image: "puzzle.svg",
      title: "ترمیم عکس",
      isCompleted: missions?.mission.puzzle_done ?? false,
      score: missions?.mission.puzzle_score ?? 0,
      totalScore: 100,
      description: "در مسیر حل پرونده عکسی را یافتیم ولی متاسفانه این عکس تکه تکه شده است با جا بجایی آن را به یکدیگر متصل کنید",
      route: "/puzzle",
      isLocked: !missions?.mission?.puzzle_open,
    },

    {
      image: "SL-050620-30640-14.jpg",
      title: "در مسیر پرونده",
      isCompleted: missions?.mission.test_question_2_done ?? false,
      score: missions?.mission.test_question_2_score ?? 0,
      totalScore: 100,
      description:
        "برای باز شدن این مرحله باید مرحله سوالات سری اول را تکمیل کنید",
      route: "/question2",
      isLocked: !missions?.mission?.test_question_2_open,
    },
    {
      image: "SL-050620-30640-14.jpg",
      title: "رمز گاو صندوق",
      isCompleted: missions?.mission.code_done ?? false,
      score: missions?.mission.code_score ?? 0,
      totalScore: 100,
      description:
        "برای باز شدن این مرحله باید مرحله سوالات سری اول را تکمیل کنید",
      route: "/safepassword",
      isLocked: !missions?.mission?.code_open,
    },
    {
      image: "coffee.avif",
      title: "قهوه آقای اصلانی",
      isCompleted: missions?.mission.coffee_done ?? false,
      score: missions?.mission.coffee_score ?? 0,
      totalScore: 100,
      description:
        "برای باز شدن این مرحله باید مرحله سوالات سری سوم را تکمیل کنید",
      route: "/coffee",
      isLocked: !missions?.mission?.coffee_open,
    },
    {
      image: "SL-050620-30640-14.jpg",
      title: "خودت کارآگاه باش",
      isCompleted: missions?.mission.test_question_3_done ?? false,
      score: missions?.mission.test_question_3_score ?? 0,
      totalScore: 100,
      description:
        "برای باز شدن این مرحله باید مرحله سوالات سری دوم را تکمیل کنید",
      route: "/4_option",
      isLocked: !missions?.mission?.test_question_3_open,
    },   
    {
      image: "qa-training.png",
      title: "کشف سرنخ ها",
      isCompleted: missions?.mission.test_question_4_done ?? false,
      score: missions?.mission.test_question_4_score ?? 0,
      totalScore: 100,
      description: "برای باز شدن این مرحله باید مرحله قهوه را تکمیل کنید",
      route: "/qa",
      isLocked: !missions?.mission?.test_question_4_open,
    },
    {
      image: "uploadpic.png",
      title: "آپلود عکس",
      isCompleted: missions?.mission.upload_photo_done ?? false,
      score: missions?.mission.upload_photo_score ?? 0,
      totalScore: 100,
      description:
        "برای باز شدن این مرحله باید مرحله سوالات سری چهارم را تکمیل کنید",
      route: "/uploadpic",
      isLocked: !missions?.mission?.upload_photo_open,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() =>
          missions?.mission.sejam_done && missions?.mission.sejam_score === 100
            ? null
            : navigate("/sejam")
        }
        className={`px-4 py-4 ${
          missions?.mission.sejam_done && missions?.mission.sejam_score === 100
            ? "bg-[#38a3a5] "
            : "bg-blue-800"
        } text-white text-6xl font-bold rounded-3xl transition-all duration-300 w-full mb-6 shadow-lg flex items-center justify-center gap-3 text-center flex justify-center items-center`}
      >
        <span className="mx-auto">شروع بازی</span>
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
        {mission_list.map((mission, index) => (
          <div
            key={index}
            className={`relative transform hover:scale-[1.02] transition-all duration-300 ${
              mission.isLocked
                ? "opacity-50 pointer-events-none filter grayscale"
                : mission.isCompleted && mission.score === 100
                ? "bg-[#e8f5e9] pointer-events-none"
                : "hover:shadow-xl"
            }`}
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
