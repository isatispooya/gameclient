import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLogin, useOtp } from "../hooks";

const SignupFrom = () => {
  const navigate = useNavigate();
  const { mutate: otpMutate } = useOtp();
  const { mutate: loginMutate } = useLogin();
  const [step, setStep] = useState<"phone" | "verify">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

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
        name: "",
      });
      navigate("/");
    } catch (error) {
      console.error("خطا در تایید کد:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 2 }}>
      {step === "phone" ? (
        <form onSubmit={handlePhoneSubmit}>
          <Typography variant="h5" mb={3}>
            ثبت‌نام
          </Typography>
          <TextField
            fullWidth
            label="شماره موبایل"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            dir="ltr"
            sx={{ mb: 2 }}
            inputProps={{
              pattern: "^09[0-9]{9}$",
              maxLength: 11,
            }}
            required
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={phoneNumber.length !== 11}
          >
            دریافت کد تایید
          </Button>
        </form>
      ) : (
        <form onSubmit={handleVerifySubmit}>
          <Typography variant="h5" mb={3}>
            تایید شماره موبایل
          </Typography>
          <TextField
            fullWidth
            label="شماره موبایل"
            value={phoneNumber}
            disabled
            dir="ltr"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="کد تایید"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            dir="ltr"
            sx={{ mb: 2 }}
            inputProps={{
              maxLength: 6,
            }}
            required
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={verificationCode.length !== 6}
          >
            تایید
          </Button>
          <Button
            fullWidth
            variant="text"
            onClick={() => setStep("phone")}
            sx={{ mt: 1 }}
          >
            تغییر شماره موبایل
          </Button>
        </form>
      )}
    </Box>
  );
};

export default SignupFrom;
