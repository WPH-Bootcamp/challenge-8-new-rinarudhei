import React from "react";
import FavCard from "../components/containers/FavCard";
import Nav from "../components/containers/NavBar";
import { useFindInfiniteMovies } from "../features/movies/hooks";
import Footer from "../components/containers/Footer";
import LoadingSpinner from "../components/containers/LoadingSpinner";
import ErrorMessage from "../components/containers/ErrorMessage";
import { useSearchParams } from "react-router-dom";
import NoMovies from "../components/containers/NoMovies";

const SearchedPage: React.FC = () => {
  const imageBase = import.meta.env.VITE_IMAGE_BASE_URL;
  const [urlSearchParam] = useSearchParams();

  const { data, error, isError, isFetching, isFetchingNextPage, status } =
    useFindInfiniteMovies({
      query: urlSearchParam.get("q") ?? "",
      page: 1,
    });

  if (status === "pending" || (isFetching && !isFetchingNextPage)) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isError) {
    return (
      <ErrorMessage
        errorMessage={error ? error.message : "Error getting movie list"}
      ></ErrorMessage>
    );
  }
  return (
    <div className="relative">
      <Nav></Nav>
      <main className="min-w-98.25 md:max-w-4xl lg:max-w-7xl  xl:max-w-360 h-max flex flex-col pt-6 pb-10 px-4 md:pt-8 md:pb-12 md:px-6 lg:pt-0 lg:pb-0 lg:px-0 mx-auto  items-center gap-8 md:gap-10 lg:gap-11 xl:gap-12 lg:mt-14 xl:mt-16">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.length > 0 ? (
              page.results
                .filter((m) => m.poster_path)
                .sort((a, b) => b.popularity - a.popularity)
                .map((movie) => (
                  <FavCard
                    key={movie.id}
                    id={movie.id}
                    imagePath={imageBase + "/w200" + movie.poster_path}
                    overview={movie.overview}
                    rating={movie.vote_average.toFixed(1)}
                    title={movie.title}
                  ></FavCard>
                ))
            ) : (
              <NoMovies></NoMovies>
            )}
          </React.Fragment>
        ))}
        {/* {hasNextPage && ( */}
        {/*   <> */}
        {/*     <div className="absolute z-15 bottom-6 left-0 md:left-0 w-full h-95.75 md:h-105 lg:h-124 bg-linear-to-t from-black from-30% to-black/0 border-none"></div> */}
        {/*     <button */}
        {/*       className="z-50 flex h-11 xl:h-13 w-50 xl:w-57.5 p-2 gap-2 border border-[#181d27] bg-[#0a0d12]/60 rounded-full justify-center items-center backdrop-blur-2xl absolute bottom-28.25 xl:bottom-56 left-24.25 sm:left-[calc(50%-80px)] xl:left-151.25 cursor-pointer" */}
        {/*       onClick={() => fetchNextPage()} */}
        {/*       disabled={!hasNextPage || isFetching} */}
        {/*     > */}
        {/*       <p className="font-semibold text-center text-sm lg:text-base leading-7 lg:leading-7.5 text-[#fdfdfd]"> */}
        {/*         {isFetchingNextPage ? "Loading more..." : "Load More"} */}
        {/*       </p> */}
        {/*     </button> */}
        {/*   </> */}
        {/* )} */}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SearchedPage;
