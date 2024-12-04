import { RiUserAddLine, RiBuilding4Line, RiPuzzleFill, RiQuestionLine, RiLockPasswordLine } from "react-icons/ri";

import { Step as StepType } from "../types";
import Step from "./step";

const Roadmap = () => {
  const steps: StepType[] = [
    {
      id: 1,
      title: "ثبت نام سجام",
      icon: <RiUserAddLine />,
      done: true,
    },
    {
      id: 2,
      title: "عضویت در کارگذاری", 
      icon: <RiBuilding4Line />,
      done: false,
    },
    {
      id: 3,
      title: "پازل",
      icon: <RiPuzzleFill />,
      done: false,
    },
    {
      id: 4,
      title: "سوالات",
      icon: <RiQuestionLine />,
      done: false,
    },
    {
      id: 5,
      title: "رمز",
      icon: <RiLockPasswordLine />,
      done: false,
    },
  ];

  return (
    <div className="px-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center">نقشه راه </h1>
      <div className="relative min-h-[400px]">
        <svg 
          className="absolute t op-0 left-0 w-full h-full" 
          style={{
            zIndex: 0,
            pointerEvents: 'none'
          }}
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
        >
          <path
            d="M200,40 
               C50,50 50,100 200,100
               S350,170 200,170
               S50,240 200,240
               S350,310 200,310
               S50,380 200,380"
            stroke="#E2E8F0"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="10,5"
          />
        </svg>
        <div className="relative flex flex-col gap-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`w-full flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              } scale-90`}
            >
              <Step step={step} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;