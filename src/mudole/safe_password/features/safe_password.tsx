import React from "react";
import { useSafe } from "../hooks";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Safe = () => {
  const { mutate: safePatch } = useSafe("6");
  const navigate = useNavigate();
  const inputRefs = Array(4)
    .fill(null)
    .map(() => React.useRef<HTMLInputElement>(null));

  const handleInput = (index: number, value: string) => {
    if (value.length === 1 && index < 3) {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredPassword = inputRefs
      .map((ref) => ref.current?.value || "")
      .join("");

    if (enteredPassword === "1384") {
      safePatch(
        { password: enteredPassword },
        {
          onSuccess: () => {
            toast.success("رمز صحیح است!");
            navigate("/missions");
          },
          onError: () => {
            toast.error("خطا در ارسال اطلاعات!");
          },
        }
      );
    } else {
      toast.error("رمز اشتباه است!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 ">
      <div className="w-full max-w-md p-6 rounded-xl bg-white shadow-2xl border-4 border-blue-200">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-800">
          رمز گاو صندوق مخفی
        </h2>
        <p className="text-gray-600 text-center mb-6">
          در مسیر حل این پرونده به <span className="font-bold">گاوصندوقی</span>{" "}
          برخوردیم که برخی از شواهد دیگر در آن قرار دارد،لازم است رمز را از{" "}
          <span className="font-bold">کارآگاهان</span> ما که در انتهای سالن قرار
          دارند بگیرید تا سرنخ هارا پیدا کنید.
        </p>
        <p className="text-gray-600 text-center mb-6 font-bold">
          برای دسترسی به اسناد مهم باید رمز صحیح را وارد کنید
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-4 gap-2">
            {[4, 3, 2, 1].map((_, i) => (
              <input
                key={i}
                ref={inputRefs[3 - i]}
                type="text"
                maxLength={1}
                onChange={(e) => handleInput(3 - i, e.target.value)}
                className="w-full h-16 text-3xl text-center bg-white 
                         text-blue-600 border-2 border-blue-300 rounded-lg
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                         transition-all duration-200 shadow-inner
                         hover:bg-blue-50"
                placeholder="*"
              />
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors font-medium
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            تایید رمز
          </button>
        </div>
      </div>
    </div>
  );
};

export default Safe;
