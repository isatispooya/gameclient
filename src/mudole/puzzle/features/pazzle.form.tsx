import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const PuzzleForm = () => {
  return (
    <JigsawPuzzle
      imageSrc="puzzle_image.png"
      rows={2}
      columns={2}
      onSolved={() => alert("Solved!")}
    />
  );
};

export default PuzzleForm;
