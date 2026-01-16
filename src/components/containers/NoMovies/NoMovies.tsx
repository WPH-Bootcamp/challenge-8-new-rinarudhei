import NoMoviesSvg from "../../svgs/NoMoviesSvg";
import ExploreMovieButton from "../../ui/ExploreMovieButton";

const NoMovies: React.FC = () => {
  return (
    <div>
      <div>
        <NoMoviesSvg></NoMoviesSvg>
        <h3 className="font-bold text-white">Data Empty</h3>
        <p className="text-[#a4a7ae]">You don't have favorite movie yet</p>
      </div>
      <ExploreMovieButton></ExploreMovieButton>
    </div>
  );
};

export default NoMovies;
