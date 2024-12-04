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
    <div className="min-h-screen  flex  bg-gradient-to-br from-[#0d3b66] via-[#084c8d] to-[#12527c] ">
      <div className="w-full max-w-[450px] p-6 rounded-lg backdrop-blur-lg m-auto">
        {step === "phone" ? (
          <form onSubmit={handlePhoneSubmit}>
            <h1 className="text-4xl mt-4 mb-8 text-white text-center drop-shadow-md">
              ثبت‌نام
            </h1>

            <div className="mb-6 w-full">
              <label className="block text-white/90 mb-2">نام (نمایشی)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 px-5 text-lg outline-none mb-2 hover:border-white/50 focus:border-white focus:scale-[1.01] transition duration-200"
              />
            </div>

            <div className="mb-6 w-full">
              <label className="block text-white/90 mb-2">شماره موبایل</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                pattern="^09[0-9]{9}$"
                maxLength={11}
                required
                dir="ltr"
                className="w-full h-14 text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 px-5 text-lg outline-none mb-2 hover:border-white/50 focus:border-white focus:scale-[1.01] transition duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={phoneNumber.length !== 11}
              className="w-full h-[60px] text-xl bg-gradient-to-r from-[#1976d2] to-[#42a5f5] backdrop-blur-sm text-white rounded-2xl border-2 border-white/20 shadow-[0_4px_15px_rgba(33,203,243,0.3)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(33,203,243,0.4)] disabled:bg-gradient-to-r disabled:from-gray-500 disabled:to-gray-400 disabled:text-white/60 disabled:border-white/10 disabled:shadow-none"
            >
              دریافت کد تایید
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifySubmit}>
            <h2 className="text-3xl mb-6 text-white text-center drop-shadow-md w-full">
              تایید شماره موبایل
            </h2>

            <div className="mb-6 w-full">
              <label className="block text-white/90 mb-2">نام (اختیاری)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 px-5 text-lg outline-none mb-2 hover:border-white/50 focus:border-white focus:scale-[1.01] transition duration-200"
              />
            </div>

            <div className="mb-6 w-full">
              <label className="block text-white/90 mb-2">شماره موبایل</label>
              <input
                type="tel"
                value={phoneNumber}
                disabled
                className="w-full h-14 text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 px-5 text-lg outline-none mb-2"
              />
            </div>

            <div className="mb-6 w-full">
              <label className="block text-white/90 mb-2">کد تایید</label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                required
                className="w-full h-14 text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 px-5 text-lg outline-none mb-2 text-center tracking-[4px] hover:border-white/50 focus:border-white focus:scale-[1.01] transition duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={verificationCode.length !== 6}
              className="w-full h-[60px] text-xl bg-gradient-to-r from-[#1976d2] to-[#42a5f5] backdrop-blur-sm text-white rounded-2xl border-2 border-white/20 shadow-[0_4px_15px_rgba(33,203,243,0.3)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:translate-y-[-3px] hover:shadow-[0_8px_25px_rgba(33,203,243,0.4)] disabled:bg-gradient-to-r disabled:from-[#455a64] disabled:to-[#607d8b] disabled:text-white/70 disabled:border-white/15 disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-80"
            >
              تایید
            </button>

            <button
              type="button"
              onClick={() => setStep("phone")}
              className="w-full mt-2 text-white/80 text-sm transition-all duration-300 hover:text-white"
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
