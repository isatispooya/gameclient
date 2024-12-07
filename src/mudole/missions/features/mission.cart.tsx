import { MissionType } from "../types";
import { BsCheckCircleFill, BsClockFill, BsPlayFill } from "react-icons/bs";
import { MdOutlineSportsScore, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMissionsGet } from "../hooks";

const MissionCart = ({
  image,
  title,
  isCompleted,
  score,
  totalScore,
  description,
  route,
}: MissionType) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col gap-2 p-4 rounded-lg ${score === 100 ? 'bg-[#e8f5e9]' : 'bg-white'} shadow-lg cursor-pointer transition-all duration-300`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center relative">
          <img
            src={typeof image === 'string' ? image : ''}
            alt={title}
            className="w-full h-full object-cover rounded-md"
            width={48}
            height={48}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/puzzle.svg";
            }}
          />
        </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <div className="flex items-center gap-2">
              {isCompleted ? (
                <BsCheckCircleFill className="text-green-600 text-lg" />
              ) : (
                <BsClockFill className="text-gray-500 text-lg" />
              )}
              <MdKeyboardArrowDown
                className={`text-gray-500 text-xl transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          <div className="flex w-11/12 items-center gap-2 mt-1">
            <span className="text-sm text-blue-600">
              {score}/{totalScore}
            </span>
            <div className="w-9/12 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${(score / 100) * 100}%` }}
              />
            </div>
            <MdOutlineSportsScore className="text-gray-500 text-2xl" />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          {!isCompleted ? (
            <button
              onClick={() => navigate(route)}
              className="mt-2 px-3 py-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm flex items-center justify-center ml-auto"
            >
              <BsPlayFill className="inline text-lg" />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default MissionCart;
