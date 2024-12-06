import useMissionsGet from "../hooks/useMissionsGet";
import { MissionType } from "../types";
import MissionCart from "./mission.cart";

const MissionList = () => {
  const { missions, isPending } = useMissionsGet();
  console.log(missions);

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
      description: "توضیحات",
      route: "/sejam",
    },
    {
      image: "broker.png",
      title: "کارگزاری",
      isCompleted: missions?.mission.broker_done ?? false,
      score: missions?.mission.broker_score ?? 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/broker",
    },
    {
      image: "puzzle.svg",
      title: "پازل",
      isCompleted: missions?.mission.puzzle_done ?? false,
      score: missions?.mission.puzzle_score ?? 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/puzzle",
    },
    {
      image: "qa-training.png",
      title: "سوالات سری اول",
      isCompleted: missions?.mission.test_question_1_done ?? false,
      score: missions?.mission.test_question_1_score ?? 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/4_choice_questions",
    },
    {
      image: "SL-050620-30640-14.jpg",
      title: "سوالات سری دوم",
      isCompleted: missions?.mission.test_question_2_done ?? false,
      score: missions?.mission.test_question_2_score ?? 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/question2",
    },
    {
      image: "SL-050620-30640-14.jpg",
      title: "سوالات سری سوم",
      isCompleted: missions?.mission.test_question_3_done ?? false,
      score: missions?.mission.test_question_3_score ?? 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/4_option",
    },
    {
      image: "coffee.avif",
      title: "قهوه",
      isCompleted: missions?.mission.coffee_done ?? false,
      score: missions?.mission.coffee_score ?? 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/coffee",
    },
    {
      image: "qa-training.png",
      title: "سوالات سری چهارم",
      isCompleted: missions?.mission.test_question_4_done ?? false,
      score: missions?.mission.test_question_4_score ?? 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/qa",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
      {mission_list.map((mission, index) => (
        <MissionCart key={index} {...mission} />
      ))}
    </div>
  );
};

export default MissionList;
