import { Link } from "react-router-dom";
import RatingStarSvg from "../../svgs/RatingStarSvg";

const imageBase = import.meta.env.VITE_IMAGE_BASE_URL;
type MovieCardProps = {
  i: number;
  posterPath: string;
  title: string;
  voteAverage: number;
  usePopularRank: boolean;
  id: number;
};
const MovieCard: React.FC<MovieCardProps> = ({
  i,
  posterPath,
  title,
  voteAverage,
  usePopularRank,
  id,
}) => {
  return (
    <div className="w-fit h-fit flex flex-col">
      <div className="w-fit h-fit rounded-xl relative">
        {usePopularRank && (
          <div className="flex rounded-full p-[4.57px] gap-[4.57px] xl:p-[6.86px] xl:gap-[6.86px] w-8 h-8 xl:w-12 xl:h-12 bg-[#0a0d12]/60 backdrop-blur-[22.86px] absolute justify-center items-center top-2 left-2">
            <p className="font-semibold text-sm leading-7 text-[#fdfdfd] text-center">
              {i + 1}
            </p>
          </div>
        )}
        <Link to={`/details/${id}`} className="z-50">
          <img
            src={imageBase + "/w200" + posterPath}
            className="w-43.25 h-66.5 xl:w-54 xl:h-80.25 rounded-lg"
          />
        </Link>
      </div>
      <div className="text-nowrap max-w-43.25 xl:max-w-54 overflow-clip">
        <span className="text-[#fdfdfd] font-semibold text-base xl:text-lg xl:leading-8 ">
          {title}
        </span>
        <div className="text-[#fdfdfd] flex gap-1 items-center">
          <RatingStarSvg></RatingStarSvg>
          <p className="h-7 text-sm xl:text-base xl:leading-7.5 leading-7 text-[#a4a7ae]">
            {voteAverage.toFixed(1)}/10
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
