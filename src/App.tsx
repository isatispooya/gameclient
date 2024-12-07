import MobileLayout from "./layout/mobile.layout";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <MobileLayout>
      <Outlet />
    </MobileLayout>
  );
}

export default App;
