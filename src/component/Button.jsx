import { Link } from "react-router-dom";
import Magnet from "../UI/Magnet";
import StarBorder from "../UI/StarBorder";

function Button({ text, link, width, height }) {
  // Function to scroll to top when link is clicked
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Magnet magnetStrength={20}>
      <StarBorder
        color="cyan"
        speed="4s"
        className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
      >
        <Link to={link} onClick={handleClick}>
          {text}
        </Link>
      </StarBorder>
    </Magnet>
  );
}

export default Button;
