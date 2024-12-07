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
    <div className="min-h-screen bg-blue-700 flex justify-center">
      <div className="w-full max-w-[420px] flex flex-col bg-gray-50 shadow-lg min-h-screen">
        <header className="sticky top-0 z-50 bg-blue-600 px-6 py-4 border-b-4 border-blue-800">
          <div className="flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:10px_10px] animate-[gradient_2s_linear_infinite]"></div>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 blur-xl opacity-50 animate-pulse"></div>

            <h1 className="text-xl font-bold text-white relative group">
              <span className="flex items-center gap-3 p-2">
                <span className="transform hover:scale-125 transition-all duration-300 hover:rotate-12 animate-bounce">
                  📊
                </span>

                <span
                  className="text-xl font-sans font-extrabold tracking-wider 
                 
                  animate-[glow_2s_ease-in-out_infinite] 
                  hover:scale-105 transition-transform"
                >
                  بزرگداشت روز حسابدار
                </span>
              </span>
            </h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MobileLayout;
