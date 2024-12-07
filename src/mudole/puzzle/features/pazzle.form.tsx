import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const PuzzleForm = () => {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center text-lg text-gray-800 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-indigo-200">
          در مسیر حل پرونده عکسی را یافتیم ولی متاسفانه این عکس تکه تکه شده ،نیاز است این عکس را با جابه جایی ترمیم کنید.(پازل را تکمیل کنید)
        </div>

        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl border border-indigo-200 relative">
          <div className="absolute border-4 border-dashed border-black-500/40 top-0 left-0 w-[50%] h-[50%]"></div>
          <div className="absolute border-4 border-dashed border-black-500/40 top-0 right-0 w-[50%] h-[50%]"></div>
          <div className="absolute border-4 border-dashed border-black-500/40 bottom-0 left-0 w-[50%] h-[50%]"></div>
          <div className="absolute border-4 border-dashed border-black-500/40 bottom-0 right-0 w-[50%] h-[50%]"></div>

          <JigsawPuzzle
            imageSrc="ngo.png"
            rows={2}
            columns={2}
            onSolved={() => alert("تبریک! شما با موفقیت پیتسو را حل کردید")}
          />
        </div>
      </div>
    </div>
  );
};

export default PuzzleForm;
