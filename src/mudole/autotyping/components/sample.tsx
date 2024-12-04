import { TypeAnimation } from "react-type-animation";

const TypingSampleingSample = () => {
  return (
    <TypeAnimation
      sequence={["Hello, I am a typing animation", 1000]}
      speed={50}
      deletionSpeed={50}
      repeat={Infinity}
    />
  );
};

export default TypingSampleingSample;
