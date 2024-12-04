import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 1000,
  margin: "32px auto",
  borderRadius: 16,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
  "& .MuiStepConnector-root": {
    display: "none",
  },
  "& .MuiStep-root": {
    marginBottom: theme.spacing(8),
    "&:last-child": {
      marginBottom: 0,
    },
  },
}));

const StepContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "index" && prop !== "done",
})<{ index: number; done: boolean }>(({ theme, index, done }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  marginLeft: index % 2 === 0 ? "0" : "120px",
  marginRight: index % 2 === 0 ? "120px" : "0",
  transition: "all 0.3s ease",

  "& .step-icon": {
    width: 45,
    height: 45,
    borderRadius: "50%",
    backgroundColor: done
      ? theme.palette.success.main
      : theme.palette.grey[200],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginBottom: theme.spacing(2),
    position: "relative",
    left: index % 2 === 0 ? "0" : "100px",
    right: index % 2 === 0 ? "100px" : "0",
  },

  "& .step-content": {
    flex: 1,
    padding: theme.spacing(2),
    borderRadius: 8,

    "& .step-title": {
      fontSize: "0.95rem",
      fontWeight: "bold",
      color: done
        ? theme.palette.success.dark
        : theme.palette.grey[600],
    },
  },
}));

const StepIconContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "index",
})<{ index: number }>(({ theme, index }) => ({
  position: "relative",
  left: index % 2 === 0 ? "0" : "100px",
  right: index % 2 === 0 ? "100px" : "0",
}));

const steps = [
  {
    label: "ثبت‌نام",
    icon: <PersonAddIcon />,
    done: true,
  },
  {
    label: "تکمیل پروفایل",

    icon: <AccountCircleIcon />,
    done: false,
  },
  {
    label: "تایید هویت",

    icon: <VerifiedUserIcon />,
    done: false,
  },
  {
    label: "شروع فعالیت",

    icon: <RocketLaunchIcon />,
    done: false,
  },
];

const Roadmap = () => {
  return (
    <StyledPaper>
      <Typography
        variant="h5"
        textAlign="center"
        mb={6}
        sx={{
          fontWeight: "bold",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        مسیر شروع کار
      </Typography>
      <StyledStepper activeStep={1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              icon={
                <StepIconContainer index={index}>
                  <Box className="step-icon">{step.icon}</Box>
                </StepIconContainer>
              }
            >
              <StepContent index={index} done={step.done}>
                <Box className="step-content">
                  <Typography className="step-title">{step.label}</Typography>
                </Box>
              </StepContent>
            </StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </StyledPaper>
  );
};

export default Roadmap;
