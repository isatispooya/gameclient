import { ScoreLayout } from "../../../layout";
import { MissionList, TimeEnd } from "../features";
import { useEffect, useState } from "react";
  
const MissionsPage = () => {
  const endTime = new Date();
  endTime.setHours(22, 30, 0);
  
  const [currentTime, setCurrentTime] = useState(new Date());
  console.log(currentTime.getTime());
  const isTimeEnded = false //currentTime.getTime() >= endTime.getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);


  return (
    <ScoreLayout>
      {isTimeEnded ? (
        <TimeEnd />
      ) : (
        <MissionList />
      )}
    </ScoreLayout>
  );
};

export default MissionsPage;
