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
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
        }}
      >
        {step === "nationalCode" ? (
          <form onSubmit={handleNationalCodeSubmit}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mb: 3,
                color: "#1976d2",
              }}
            >
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#1976d2",
                  },
                },
                mb: 2,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading || nationalCode.length !== 10}
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                boxShadow: 2,
                "&:hover": {
                  boxShadow: 4,
                },
              }}
            >
              دریافت کد تایید
            </Button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mb: 3,
                color: "#1976d2",
              }}
            >
              تایید کد ملی
            </Typography>
            <TextField
              fullWidth
              label="کد ملی"
              value={nationalCode}
              disabled
              margin="normal"
              sx={{ mb: 2 }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#1976d2",
                  },
                },
                mb: 2,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                boxShadow: 2,
                "&:hover": {
                  boxShadow: 4,
                },
              }}
            >
              تایید
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => setStep("nationalCode")}
              sx={{
                mt: 2,
                textTransform: "none",
                color: "#666",
                "&:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.04)",
                },
              }}
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
