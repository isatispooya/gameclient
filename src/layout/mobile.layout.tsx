import { ReactNode, useEffect } from "react";
import { THEME_COLOR } from "../config";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR);
  }, []);

  return (
    <div className="min-h-screen bg-indigo-600 flex justify-center">
      <div className="w-full max-w-[420px] relative flex flex-col bg-gray-50 shadow-2xl min-h-screen">
        <header className="sticky top-0 z-50 bg-indigo-600 px-4 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-white">
              بزرگداشت روز حسابدار
            </h1>
          </div>
        </header>

        <main className="flex-1  overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MobileLayout;
