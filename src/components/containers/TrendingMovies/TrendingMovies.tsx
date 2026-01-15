import type { Movie } from "../../../features/movies/type";
import RightArrowScrollSvg from "../../svgs/RightArrowScrollSvg";
import MovieCard from "../MovieCard";

type TrendingMoviesProps = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  movies: Movie[];
};

const TrendingMovies: React.FC<TrendingMoviesProps> = ({
  scrollRef,
  movies,
}) => {
  const handleScrollButton = (scrollOffset: number) => {
    if (scrollRef.current) {
      const width = window.innerWidth;

      if (width <= 640) {
        scrollOffset = scrollOffset * 1;
      } else if (width <= 1048) {
        scrollOffset = scrollOffset * 2;
      } else {
        scrollOffset = scrollOffset * 3;
      }
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className=" flex flex-col py-10 xl:py-0 px-4 gap-6 xl:gap-10 sm:justify-start items-start h-fit  w-full">
      <h2 className="h-9 text-2xl md:text-3xl lg:text-4xl leading-9 lg:leading-12 tracking-tight font-bold mb-2 text-start text-[#fdfdfd] sm:ml-12 lg:ml-25 xl:ml-32">
        Trending Now
      </h2>
      <div className="absolute w-19/20 sm:left-15 sm:w-10/12 lg:w-7/8 lg:left-30 xl:left-35 h-fit top-25 xl:top-22 z-40">
        <div
          ref={scrollRef}
          className="h-fit scroll-smooth overflow-x-scroll overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="absolute top-0 right-0 md:-right-px w-30.75 h-87.75 sm:w-40 lg:w-80 xl:w-107.5 xl:h-149 bg-linear-to-r from-black/0 from-50% to-black border-none z-50"></div>
          <div
            onClick={() => handleScrollButton(380)}
            className="cursor-pointer absolute top-27.5 xl:top-34 -right-1 w-11 h-11 p-[6.29px] gap-[6.29px] rounded-[7856.36px] bg-[#0a0d12]/60 backdrop-blur[31.43px] flex justify-center items-center z-50"
          >
            <RightArrowScrollSvg></RightArrowScrollSvg>
          </div>
          <div className="grid gap-4 xl:gap-5 grid-flow-col auto-cols-[173px] xl:auto-cols-[216px]">
            {movies.map((movie, i) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                i={i}
                posterPath={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                usePopularRank={true}
              ></MovieCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
