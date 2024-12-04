import type { Step as StepType } from "../types";

const Step = ({ step }: { step: StepType }) => {
  const isEven = step.id % 2 === 0;

  return (
    <div className="flex items-center my-12">
      {!isEven && (
        <div className="flex-1 w-1/2 pr-8 ml-4">
          <h1 className="text-xl text-left font-bold mb-2">{step.title}</h1>
        </div>
      )}

      {isEven && <div className="flex-1" />}

      <div
        className={`
        w-12 h-12 rounded-full flex items-center justify-center shrink-0
        ${step.done ? "bg-green-500" : "bg-gray-300"}
        transition-colors duration-300 z-10
      `}
      >
        <div className="text-white text-2xl">{step.icon}</div>
      </div>

      {!isEven && <div className="flex-1" />}

      {isEven && (
        <div className="flex-1 w-1/2 pl-8 mr-4">
          <h1 className="text-xl text-right font-bold mb-2">{step.title}</h1>
        </div>
      )}
    </div>
  );
};

export default Step;
