import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const PuzzleForm = () => {
  return (
    <div className="bg-gray-300  h-full rounded-lg shadow-lg">
      <JigsawPuzzle
        imageSrc="puzzle_image.png"
        rows={2}
        columns={2}
        onSolved={() => alert("تبریک! شما با موفقیت  پیتسو را حل کردید")}
      />
    </div>
  );
};

export default PuzzleForm;
