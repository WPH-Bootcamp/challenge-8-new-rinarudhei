import { Link } from "react-router-dom";

const ExploreMovieButton: React.FC = () => {
  return (
    <Link to={"/"}>
      <button>EXPLORE MOVIE</button>
    </Link>
  );
};

export default ExploreMovieButton;
