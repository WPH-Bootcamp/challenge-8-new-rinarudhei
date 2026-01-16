import { useFavoriteMovies } from "../../../features/favorites/hooks";
import { useGetVideos } from "../../../features/videos/hooks";
import FavoriteButton from "../../ui/FavoriteButton";
import PlayButton from "../../ui/PlayButton";
import LoadingSpinner from "../LoadingSpinner";

type FavCardProps = {
  id: number;
  title: string;
  rating: string;
  overview: string;
  imagePath: string;
};
const FavCard: React.FC<FavCardProps> = ({
  id,
  title,
  rating,
  overview,
  imagePath,
}) => {
  const { data: dataVideo, isPending, isError } = useGetVideos({ movieId: id });
  const { isFavorited, toggleFavorite } = useFavoriteMovies();

  if (isPending || isError) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="flex flex-col gap-6 xl:gap-0 xl:flex-row xl:justify-between w-90.25 md:w-95 lg:w-4xl xl:w-290 lg:pt-0 first:pt-0 pb-8 xl:pb-12 last:pb-0 last:border-none border-b border-[#252b37] last:mb-8.5 last:lg:mb-20 last:xl:mb-41.5">
      <div className="flex gap-4 p-0  lg:justify-between xl:p-0">
        <img
          src={imagePath}
          className="w-26 h-39 rounded-lg md:w-32 md:h-50 lg:w-40 lg:h-62 xl:w-45.5 xl:h-67.5"
        />
        <div className="flex flex-col w-56.5 md:w-60 lg:w-165 xl:w-full gap-1 md:gap-2 lg:gap-4 xl:gap-6">
          <h3 className="w-54.5 h-fit font-bold text-base leading-7.5 md:text-xl lg:text-3xl md:w-60 lg:w-160 xl:w-193 xl:text-4xl xl:leading-9 text-[#fdfdfd]">
            {title}
          </h3>
          <div className="flex w-43.25 md:w-50 gap-1 lg:w-full items-center">
            <svg
              className="w-4.5 h-4.5 xl:w-5.5 xl:h-5.5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.14317 2.2571C9.53183 1.61128 10.4681 1.61128 10.8568 2.2571L12.7988 5.4841C12.9385 5.71611 13.1662 5.88158 13.43 5.94268L17.0992 6.79246C17.8335 6.96253 18.1228 7.853 17.6287 8.42221L15.1598 11.2664C14.9823 11.4709 14.8953 11.7386 14.9187 12.0084L15.2443 15.7606C15.3095 16.5115 14.552 17.0619 13.858 16.7678L10.3901 15.2986C10.1407 15.193 9.85922 15.193 9.60989 15.2986L6.14196 16.7678C5.44793 17.0619 4.69045 16.5115 4.75562 15.7606L5.08126 12.0084C5.10467 11.7386 5.01768 11.4709 4.84017 11.2664L2.37123 8.42221C1.87713 7.85301 2.16646 6.96253 2.90077 6.79247L6.56995 5.94268C6.83376 5.88158 7.0615 5.71611 7.20113 5.4841L9.14317 2.2571Z"
                fill="#E4A802"
                stroke="#E4A802"
                strokeWidth="1.25"
              />
            </svg>
            <p className="text-[#fdfdfd] leading-7 text-sm h-7 md:text-base md:leading-7.5 lg:text-lg lg:leading-8 lg:h-8">
              {rating}/10
            </p>
          </div>
          <p className="text-sm leading-7 text-[#a4a7ae] h-14 xl:h-15 lg:w-150 xl:w-193 w-54.5 line-clamp-2">
            {overview}
          </p>
          <div className="lg:flex gap-4 hidden">
            {!isError &&
              dataVideo &&
              dataVideo.results.length > 0 &&
              dataVideo.results[0].key !== "" && (
                <PlayButton
                  data={dataVideo}
                  isPending={isPending}
                  maskId="play-button-1"
                ></PlayButton>
              )}

            <div className="inline lg:hidden">
              <FavoriteButton
                isFavorite={isFavorited(id)}
                toggleFavorite={toggleFavorite}
                favMovieData={{
                  id: id,
                  posterPath: imagePath,
                  title: title,
                  trailerKey: dataVideo?.results[0]?.key,
                  overview: overview,
                  rating: rating,
                }}
              ></FavoriteButton>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline xl:hidden">
          <FavoriteButton
            isFavorite={isFavorited(id)}
            toggleFavorite={toggleFavorite}
            favMovieData={{
              id: id,
              posterPath: imagePath,
              title: title,
              trailerKey: dataVideo?.results[0]?.key,
              overview: overview,
              rating: rating,
            }}
          ></FavoriteButton>
        </div>
      </div>
      <div className="lg:hidden gap-4 flex">
        {!isError &&
          dataVideo &&
          dataVideo.results.length > 0 &&
          dataVideo.results[0].key !== "" && (
            <PlayButton
              data={dataVideo}
              isPending={isPending}
              maskId="play-button-1"
            ></PlayButton>
          )}
        <div className="inline lg:hidden">
          <FavoriteButton
            isFavorite={isFavorited(id)}
            toggleFavorite={toggleFavorite}
            favMovieData={{
              id: id,
              posterPath: imagePath,
              title: title,
              trailerKey: dataVideo?.results[0]?.key,
              overview: overview,
              rating: rating,
            }}
          ></FavoriteButton>
        </div>
      </div>
      <div className="hidden xl:inline">
        <FavoriteButton
          isFavorite={isFavorited(id)}
          toggleFavorite={toggleFavorite}
          favMovieData={{
            id: id,
            posterPath: imagePath,
            title: title,
            trailerKey: dataVideo?.results[0]?.key,
            overview: overview,
            rating: rating,
          }}
        ></FavoriteButton>
      </div>
    </div>
  );
};

export default FavCard;
