import { ScoreLayout } from "../../../layout";
import { MissionList, TimeEnd } from "../features";
  
const MissionsPage = () => {
  const endTime = new Date(2024, 12, 7, 22, 30, 0);
  const currentTime = new Date();
  const isTimeEnded = currentTime > endTime;

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
