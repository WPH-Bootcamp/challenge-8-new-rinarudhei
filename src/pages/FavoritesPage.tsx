import { useState } from "react";
import FavCard from "../components/containers/FavCard";
import Footer from "../components/containers/Footer";
import Nav from "../components/containers/NavBar";
import { useFavoriteMovies } from "../features/favorites/hooks";
import NoMovies from "../components/containers/NoMovies";

const FavoritesPage: React.FC = () => {
  const { getListOfFavorites } = useFavoriteMovies();
  const [listFavorites] = useState(() => {
    const favorites = getListOfFavorites();
    return favorites;
  });
  const imageBase = import.meta.env.VITE_IMAGE_BASE_URL;
  return (
    <>
      <Nav></Nav>
      <main className="min-w-98.25 md:max-w-4xl lg:max-w-7xl  xl:max-w-360 h-max flex flex-col pt-6 pb-10 px-4 md:pt-8 md:pb-12 md:px-6 lg:pt-0 lg:pb-0 lg:px-0 mx-auto  items-center gap-8 md:gap-10 lg:gap-11 xl:gap-12 lg:mt-14 xl:mt-16">
        <h1 className="font-bold text-2xl leading-9 md:text-3xl md:leading-10 xl:text-4xl xl:leading-12 text-[#fdfdfd]  w-90.25 md:w-95 lg:w-4xl xl:w-290">
          Favorites
        </h1>

        {listFavorites.length > 0 ? (
          listFavorites.map((movie) => (
            <FavCard
              key={movie.id}
              id={movie.id}
              imagePath={imageBase + "/w200" + movie.posterPath}
              overview={movie.overview}
              rating={movie.rating}
              title={movie.title}
            ></FavCard>
          ))
        ) : (
          <NoMovies></NoMovies>
        )}
      </main>
      <Footer></Footer>
    </>
  );
};

export default FavoritesPage;
