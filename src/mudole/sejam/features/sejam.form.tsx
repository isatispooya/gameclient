import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useSejamOtp, useSejamVerify } from "../hooks";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface SejamResponse {
  message: string;
}

const SejamForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"nationalCode" | "otp">("nationalCode");
  const [nationalCode, setNationalCode] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { otpSejamMutate } = useSejamOtp();
  const { verifyOtpSejamMutate } = useSejamVerify();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const handleNationalCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = (await otpSejamMutate(nationalCode)) as
        | string
        | SejamResponse;
      console.log("response:", response);
      if (typeof response === "string") {
        toast.error(response);
      } else if ("message" in response) {
        if (response.message === "شما سجامی نیستید") {
          toast.error(response.message);
          setTimeout(() => {
            navigate("/missions");
          }, 2000);
          return;
        }
      }
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
      verifyOtpSejamMutate(
        { otp, uniqueIdentifier: nationalCode },
        {
          onSuccess: (response: any) => {
            setServerMessage(response.message);
            setShowSuccessModal(true);
          },
          onError: (error: any) => {
            setServerMessage(error.response?.message || "خطایی رخ داده است");
            setShowSuccessModal(true);
          },
        }
      );
    } catch (error) {
      console.error("خطا در تایید کد:", error);
      setServerMessage("خطایی در ارتباط با سرور رخ داده است");
      setShowSuccessModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
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

      <Dialog
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: 2, sm: 4 },
            p: { xs: 1, sm: 2 },
            width: {
              xs: "95%",
              sm: "80%",
              md: "60%",
              lg: "40%",
            },
            margin: "auto",
            background: "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            border: "2px solid #e0e0e0",
            transform: "scale(1)",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: { xs: "none", sm: "scale(1.02)" },
            },
          },
        }}
      >
        <DialogContent sx={{ py: { xs: 1, sm: 2 } }}>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              fontWeight: 600,
              color: "#000000",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            {serverMessage}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ pb: { xs: 0.5, sm: 1 }, px: { xs: 1, sm: 2 } }}>
          {!serverMessage.includes("خطا") ? (
            <Button
              onClick={() => navigate("/missions")}
              variant="contained"
              size="large"
              fullWidth
              sx={{
                minWidth: { xs: "auto", sm: 100 },
                borderRadius: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
                boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: { xs: "none", sm: "translateY(-2px)" },
                },
              }}
            >
              ادامه بازی
            </Button>
          ) : (
            <Button
              onClick={() => setShowSuccessModal(false)}
              variant="outlined"
              size="large"
              fullWidth
              sx={{
                minWidth: { xs: "auto", sm: 100 },
                borderRadius: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                borderWidth: 2,
                transition: "all 0.2s",
                "&:hover": {
                  borderWidth: 2,
                  background: "rgba(211, 47, 47, 0.04)",
                },
              }}
            >
              بستن
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SejamForm;
