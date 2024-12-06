import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, useOtp } from "../hooks";

const SignupFrom = () => {  
  const navigate = useNavigate();
  const { mutate: otpMutate } = useOtp();
  const { mutate: loginMutate } = useLogin();
  const [step, setStep] = useState<"phone" | "verify">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [name, setName] = useState("");


  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      otpMutate(phoneNumber);
      setStep("verify");
    } catch (error) {
      console.error("خطا در ارسال کد تایید:", error);
    }
  };

  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      loginMutate({
        mobile: phoneNumber,
        code: verificationCode,
        name: name,
      });
      navigate("/recaptcha");
    } catch (error) {
      console.error("خطا در تایید کد:", error);
    }
  };

  return (
    <div className="flex bg-white">
      <div className="w-full max-w-[450px] p-6 rounded-lg m-auto">
        {step === "phone" ? (
          <form onSubmit={handlePhoneSubmit}>
            <h1 className="text-4xl mt-4 mb-8 text-gray-800 text-center">
              ثبت‌نام
            </h1>

            <div className="mb-6 w-full">
              <label className="block text-gray-700 mb-2">نام (نمایشی)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 text-gray-800 bg-gray-50 rounded-xl border-2 border-gray-200 px-5 text-lg outline-none mb-2 hover:border-gray-300 focus:border-blue-500 focus:scale-[1.01] transition duration-200"
              />
            </div>

            <div className="mb-6 w-full">
              <label className="block text-gray-700 mb-2">شماره موبایل</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                pattern="^09[0-9]{9}$"
                maxLength={11}
                required
                dir="ltr"
                className="w-full h-14 text-gray-800 bg-gray-50 rounded-xl border-2 border-gray-200 px-5 text-lg outline-none mb-2 hover:border-gray-300 focus:border-blue-500 focus:scale-[1.01] transition duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={phoneNumber.length !== 11}
              className="w-full h-[60px] text-xl bg-gradient-to-r from-[#1976d2] to-[#42a5f5] text-white rounded-2xl shadow-[0_4px_15px_rgba(25,118,210,0.3)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(25,118,210,0.4)] disabled:bg-gradient-to-r disabled:from-gray-300 disabled:to-gray-200 disabled:text-gray-400 disabled:shadow-none"
            >
              دریافت کد تایید
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifySubmit}>
            <h2 className="text-3xl mb-6 text-gray-800 text-center w-full">
              تایید شماره موبایل
            </h2>

            <div className="mb-6 flex justify-between items-center w-full">
              <label className="text-gray-700 mb-2">شماره موبایل</label>
              <p className="text-gray-800 text-lg mb-2 font-semibold">{phoneNumber}</p>
            </div>

            <div className="mb-6 w-full">
              <label className="block text-gray-700 mb-2">کد تایید</label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                required
                className="w-full h-14 text-gray-800 bg-gray-50 rounded-xl border-2 border-gray-200 px-5 text-lg outline-none mb-2 text-center tracking-[4px] hover:border-gray-300 focus:border-blue-500 focus:scale-[1.01] transition duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={verificationCode.length !== 6}
              className="w-full h-[60px] text-xl bg-gradient-to-r from-[#1976d2] to-[#42a5f5] text-white rounded-2xl shadow-[0_4px_15px_rgba(25,118,210,0.3)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(25,118,210,0.4)] disabled:bg-gradient-to-r disabled:from-gray-300 disabled:to-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-80"
            >
              تایید
            </button>

            <button
              type="button"
              onClick={() => setStep("phone")}
              className="w-full mt-2 text-gray-600 text-sm transition-all duration-300 hover:text-gray-800"
            >
              تغییر شماره موبایل
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupFrom;
