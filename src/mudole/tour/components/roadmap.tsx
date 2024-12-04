import { RiGameFill } from "react-icons/ri";

import { Step as StepType } from "../types";
import Step from "./step";

const Roadmap = () => {
  const steps: StepType[] = [
    {
      id: 1,
      title: "ثبت نام سجام",
      icon: <RiGameFill />,
      done: true,
    },
    {
      id: 2,
      title: "عضویت در کارگذاری",
      icon: <RiGameFill />,
      done: false,
    },
    {
      id: 3,
      title: "پازل",
      icon: <RiGameFill />,
      done: false,
    },
    {
      id: 4,
      title: "سوالات",
      icon: <RiGameFill />,
      done: false,
    },
    {
      id: 5,
      title: "رمز",
      icon: <RiGameFill />,
      done: false,
    },
  ];
  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold mb-8">Roadmap</h1>
      <div className="relative">

        <div className="relative">
          {steps.map((step, index) => (
            <Step key={index} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
