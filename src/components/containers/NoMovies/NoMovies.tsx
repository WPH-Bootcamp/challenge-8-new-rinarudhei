import NoMoviesSvg from "../../svgs/NoMoviesSvg";
import ExploreMovieButton from "../../ui/ExploreMovieButton";

const NoMovies: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full mb-200 gap-4">
      <div className="flex flex-col justify-center items-center w-full h-full gap-4">
        <NoMoviesSvg></NoMoviesSvg>
        <div className="flex flex-col justify-start items-center h-full w-full gap-4">
          <h3 className="font-bold text-white">Data Empty</h3>
          <p className="text-[#a4a7ae]">No movie found</p>
        </div>
      </div>
      <ExploreMovieButton></ExploreMovieButton>
    </div>
  );
};

export default NoMovies;
