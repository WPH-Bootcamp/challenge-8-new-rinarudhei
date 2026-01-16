import { useParams } from "react-router-dom";
import Nav from "../components/containers/NavBar";
import { useGetDetail } from "../features/movies/hooks";
import LoadingSpinner from "../components/containers/LoadingSpinner";
import Footer from "../components/containers/Footer";
import ErrorMessage from "../components/containers/ErrorMessage";
import Backdrop from "../components/containers/Backdrop";
import CalendarSvg from "../components/svgs/CalendarSvg";
import { formatDateToString } from "../lib/utils";
import PlayButton from "../components/ui/PlayButton";
import { useGetVideos } from "../features/videos/hooks";
import FavoriteButton from "../components/ui/FavoriteButton";
import MovieMetrics from "../components/containers/MovieMetrics/MovieMetrics";
import { useGetCasts } from "../features/casts/hooks";
import CastCard from "../components/containers/CastCard";
import { useFavoriteMovies } from "../features/favorites/hooks";

const DetailsPage = () => {
  const imageBase = import.meta.env.VITE_IMAGE_BASE_URL;
  const params = useParams();
  let paramsId = 0;
  if (params.id) {
    paramsId = +params.id;
  }
  const { isFavorited, toggleFavorite } = useFavoriteMovies();
  const { data, isPending, isError, error } = useGetDetail({
    movieId: +paramsId,
  });
  const {
    data: dataCasts,
    isPending: isPendingCasts,
    isError: isErrorCasts,
    error: errorCasts,
  } = useGetCasts({
    movieId: +paramsId,
  });

  const {
    data: dataVideo,
    isPending: isPendingVideo,
    isError: isErrorVideo,
    error: errorVideo,
  } = useGetVideos({ movieId: +paramsId });

  if (isPending || isPendingVideo || isPendingCasts) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isError || isErrorVideo || isErrorCasts) {
    return (
      <ErrorMessage
        errorMessage={
          isError
            ? error.message
            : isErrorVideo
              ? errorVideo.message
              : errorCasts?.message || ""
        }
      ></ErrorMessage>
    );
  }

  return (
    <>
      <Nav></Nav>
      <div className="min-w-98.25 xl:max-w-360 lg:max-w-7xl h-max mx-auto relative z-40">
        <Backdrop
          sourceImage={imageBase + "/original" + data.backdrop_path}
        ></Backdrop>
        <div className="hidden lg:flex flex-col lg:w-5xl xl:w-290 lg:-mt-90 xl:-mt-99.5 mx-auto gap-12 items-center">
          <div className="flex gap-8">
            <img
              src={imageBase + "/w200" + data.poster_path}
              className="rounded-xl lg:h-80 lg:w-50 xl:h-96 xl:w-65 z-50"
            />
            <div className="flex flex-col gap-6 border">
              <div className="flex flex-col gap-4 z-50 h-fit">
                <h1 className="font-bold lg:text-4xl xl:text-[40px] lg:leading-9 leading-14 tracking-tight lg:w-180 xl:w-217 text-[#FDFDFD]">
                  {data.title}
                </h1>
                <div className="gap-2 flex items-center">
                  <CalendarSvg></CalendarSvg>
                  <p className="text-base leading-7.5 text-white">
                    {formatDateToString(data.release_date)}
                  </p>
                </div>
                <div className="flex gap-4 justify-between lg:justify-start items-center z-50">
                  {!isErrorVideo &&
                    dataVideo &&
                    dataVideo.results.length > 0 &&
                    dataVideo.results[0].key !== "" && (
                      <PlayButton
                        data={dataVideo}
                        isPending={isPendingVideo}
                        maskId="play-button-1"
                      ></PlayButton>
                    )}
                  <FavoriteButton
                    isFavorite={isFavorited(paramsId)}
                    toggleFavorite={toggleFavorite}
                    favMovieData={{
                      id: paramsId,
                      posterPath: data.poster_path,
                      title: data.title,
                      trailerKey: dataVideo.results[0].key,
                      overview: data.overview,
                      rating: data.vote_average.toFixed(1),
                    }}
                  ></FavoriteButton>
                </div>
                <div className="flex gap-3 lg:gap-5 items-center justify-start w-90.25 lg:w-180 xl:w-fit mx-auto">
                  <MovieMetrics
                    rating={data.vote_average.toFixed(1)}
                    genre=""
                    isAdult={false}
                    metricTypeText="Rating"
                    isRating={true}
                    isGenre={false}
                    isAgeLimit={false}
                  ></MovieMetrics>
                  <MovieMetrics
                    rating=""
                    genre={data.genres[0].name}
                    isAdult={false}
                    metricTypeText="Genre"
                    isRating={false}
                    isGenre={true}
                    isAgeLimit={false}
                  ></MovieMetrics>
                  <MovieMetrics
                    rating=""
                    genre=""
                    isAdult={data.adult}
                    metricTypeText="Age Limit"
                    isRating={false}
                    isGenre={false}
                    isAgeLimit={true}
                  ></MovieMetrics>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 z-50 lg:w-14/15 xl:w-full mx-auto lg:mx-0 xl:mx-auto">
            <h2 className="font-bold text-xl lg:text-3xl xl:text-[32px] leading-8.5 lg:leading-9 xl:leading-11.5 text-[#fdfdfd]">
              Overview
            </h2>
            <p className="text-sm lg:text-base leading-7 lg:leading-7.5 text-[#a4a7ae]">
              {data.overview}
            </p>
          </div>
          <div className="flex flex-col w-90.25 gap-4 lg:pb-37.25 lg:w-14/15 xl:w-full">
            <h2 className="font-bold text-xl lg:text-[32px]  leading-8.5 lg:leading-11.5 text-[#fdfdfd]">
              Cast & Crew
            </h2>
            <div className="grid grid-cols-3 gap-10">
              {dataCasts.cast
                .filter((c) => c.profile_path)
                .slice(0, 5)
                .map((c, i) => (
                  <CastCard
                    key={i}
                    sourceImage={imageBase + "/w200" + c.profile_path}
                    name={c.name}
                    character={c.character}
                  ></CastCard>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col -mt-30.75 sm:-mt-44 md:-mt-50 px-4 w-full max-w-100 md:max-w-140 mx-auto pb-10 z-50 gap-6 h-max lg:hidden">
          <div className="flex gap-4 justify-start">
            <img
              src={imageBase + "/w200" + data.poster_path}
              className="rounded-xl h-42.75 md:h-60 w-29 md:w-40 z-50"
            />
            <div className="flex flex-col gap-1 z-50 h-fit w-full">
              <h1 className="font-bold text-xl md:text-2xl leading-8.5 md:leading-9  text-[#FDFDFD]">
                {data.title}
              </h1>
              <div className="gap-1 flex items-center">
                <CalendarSvg></CalendarSvg>
                <p className="text-sm md:text-base leading-7 md:leading-7.5 text-white">
                  {formatDateToString(data.release_date)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between z-50 items-center w-90.25 md:w-132 mx-auto">
            {!isErrorVideo &&
              dataVideo &&
              dataVideo.results.length > 0 &&
              dataVideo.results[0].key !== "" && (
                <PlayButton
                  data={dataVideo}
                  isPending={isPendingVideo}
                  maskId="play-button-2"
                ></PlayButton>
              )}
            <FavoriteButton
              isFavorite={isFavorited(paramsId)}
              toggleFavorite={toggleFavorite}
              favMovieData={{
                id: paramsId,
                posterPath: data.poster_path,
                title: data.title,
                trailerKey: dataVideo.results[0].key,
                overview: data.overview,
                rating: data.vote_average.toFixed(1),
              }}
            ></FavoriteButton>
          </div>
          <div className="flex gap-3 items-center justify-between w-90.25 md:w-136 mx-auto">
            <MovieMetrics
              rating={data.vote_average.toFixed(1)}
              genre=""
              isAdult={false}
              metricTypeText="Rating"
              isRating={true}
              isGenre={false}
              isAgeLimit={false}
            ></MovieMetrics>
            <MovieMetrics
              rating=""
              genre={data.genres[0].name}
              isAdult={false}
              metricTypeText="Genre"
              isRating={false}
              isGenre={true}
              isAgeLimit={false}
            ></MovieMetrics>
            <MovieMetrics
              rating=""
              genre=""
              isAdult={data.adult}
              metricTypeText="Age Limit"
              isRating={false}
              isGenre={false}
              isAgeLimit={true}
            ></MovieMetrics>
          </div>
          <div className="flex flex-col w-89.75 md:w-143 gap-2 mx-auto">
            <h2 className="font-bold text-xl md:text-2xl leading-8.5 md:leading-9 text-[#fdfdfd]">
              Overview
            </h2>
            <p className="text-sm md:text-base leading-7 md:leading-7.5 text-[#a4a7ae]">
              {data.overview}
            </p>
          </div>
          <div className="flex flex-col w-90.25 md:w-143 gap-4 mx-auto">
            <h2 className="font-bold text-xl md:text-2xl leading-8.5 md:leading-9 text-[#fdfdfd]">
              Cast & Crew
            </h2>
            <div className="flex flex-col w-full gap-4">
              {dataCasts.cast.slice(0, 5).map((c, i) => (
                <CastCard
                  key={i}
                  sourceImage={imageBase + "/w200" + c.profile_path}
                  name={c.name}
                  character={c.character}
                ></CastCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DetailsPage;
