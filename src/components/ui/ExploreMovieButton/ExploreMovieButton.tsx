import { Link } from "react-router-dom";

const ExploreMovieButton: React.FC = () => {
  return (
    <Link to={"/"}>
      <button className="flex h-11 xl:h-13 w-full p-2 gap-2 bg-[#961200] rounded-full justify-center items-center lg:w-57.5 cursor-pointer">
        <div className="font-semibold text-sm lg:text-base leading-7 lg:leading-7.5 text-[#fdfdfd]">
          Explore Movie
        </div>
      </button>
    </Link>
  );
};

export default ExploreMovieButton;
