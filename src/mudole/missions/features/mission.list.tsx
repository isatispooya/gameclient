import { MissionType } from "../types";
import MissionCart from "./mission.cart";

const MissionList = () => {
  const mission_list: MissionType[] = [
    {
      image: "وکتور-لوگو-آرم-سجام-1.png",
      title: "سجام",
      isCompleted: false,
      score: 50,
      totalScore: 100,
      description: "توضیحات",
      route: "/sejam",
    },
    {
      image: "broker.png",
      title: "کارگزاری",
      isCompleted: false,
      score: 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/broker",
    },
    {
      image: "puzzle.svg",
      title: "پازل",
      isCompleted: false,
      score: 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/puzzle",
    },
    {
      image: "qa-training.png",
      title: "سوالات سری اول",
      isCompleted: false,
      score: 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/4_choice_questions",
    },
    {
      image: "SL-050620-30640-14.jpg",
      title: "سوالات سری دوم",
      isCompleted: false,
      score: 0,
      totalScore: 100,
      description: "توضیحات",
      route: "/4_option",
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
