import MobileLayout from './layout/mobile.layout';
import { Outlet } from 'react-router-dom';
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function App() {
  return (
    <MobileLayout>
      <Outlet />
    </MobileLayout>
  );
}

export default App;
