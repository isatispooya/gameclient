import { useState } from "react";
import { Button, TextField, Box, Typography, Paper } from "@mui/material";
import { useSejamOtp, useSejamVerify } from "../hooks";


const SejamForm = () => {
  const [step, setStep] = useState<"nationalCode" | "otp">("nationalCode");
  const [nationalCode, setNationalCode] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { otpSejamMutate } = useSejamOtp();
  const { verifyOtpSejamMutate } = useSejamVerify();

  const handleNationalCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      otpSejamMutate(nationalCode);
      setStep("otp");
    } catch (error) {
      console.error("خطا در ارسال کد ملی:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      verifyOtpSejamMutate({ otp, uniqueIdentifier: nationalCode });
    } catch (error) {
      console.error("خطا در تایید کد:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        {step === "nationalCode" ? (
          <form onSubmit={handleNationalCodeSubmit}>
            <Typography variant="h6" gutterBottom>
              ورود کد ملی
            </Typography>
            <TextField
              fullWidth
              label="کد ملی"
              value={nationalCode}
              onChange={(e) => setNationalCode(e.target.value)}
              margin="normal"
              required
              inputProps={{
                maxLength: 10,
                pattern: "[0-9]*",
              }}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading || nationalCode.length !== 10}
              sx={{ mt: 2 }}
            >
              دریافت کد تایید
            </Button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <Typography variant="h6" gutterBottom>
              تایید کد ملی
            </Typography>
            <TextField
              fullWidth
              label="کد ملی"
              value={nationalCode}
              disabled
              margin="normal"
            />
            <TextField
              fullWidth
              label="کد تایید"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              margin="normal"
              required
              inputProps={{
                maxLength: 6,
                pattern: "[0-9]*",
              }}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              onClick={handleOtpSubmit}
              sx={{ mt: 2 }}
            >
              تایید
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => setStep("nationalCode")}
              sx={{ mt: 1 }}
            >
              بازگشت به مرحله قبل
            </Button>
          </form>
        )}
      </Paper>
    </Box>
  );
};

export default SejamForm;
