import { toast } from "sonner";
import type { FavMovie, DataFavoriteMovies } from "./type";
import { useCallback, useState } from "react";

export const useFavoriteMovies = () => {
  const [favMovies, setFavMovies] = useState<DataFavoriteMovies>(() => {
    try {
      const item = window.localStorage.getItem("favorites");
      return item ? JSON.parse(item) : [];
    } catch {
      toast.error("Error getting favorite movies");
      return {};
    }
  });

  const getListOfFavorites = useCallback(() => {
    return Object.values(favMovies);
  }, [favMovies]);

  const addFavMovie = useCallback((movie: FavMovie) => {
    try {
      if (!movie.id) {
        toast.error("Error adding movie to favorites");
        return;
      }
      setFavMovies((prev: DataFavoriteMovies) => {
        const updated = {
          ...prev,
          [movie.id]: movie,
        };

        window.localStorage.setItem("favorites", JSON.stringify(updated));
        return updated;
      });

      toast.success("Success Add to Favorites");
    } catch {
      toast.error("Error adding movie to favorites");
    }
  }, []);

  const removeFavMovie = useCallback((id: number) => {
    try {
      const keyToRemove = id.toString();
      setFavMovies((prev: DataFavoriteMovies) => {
        const updated: DataFavoriteMovies = {};
        for (const key in prev) {
          if (keyToRemove !== key) {
            updated[key] = prev[key];
          }
        }

        window.localStorage.setItem("favorites", JSON.stringify(updated));
        return updated;
      });
    } catch {
      toast.error("Error removing movie from favorites");
    }
  }, []);

  const isFavorited = useCallback(
    (id: number): boolean => {
      return favMovies[id] && favMovies[id].id === id;
    },
    [favMovies],
  );

  const toggleFavorite = useCallback(
    (favMovie: FavMovie) => {
      try {
        if (isFavorited(favMovie.id)) {
          removeFavMovie(favMovie.id);
          return;
        } else {
          addFavMovie(favMovie);
          return;
        }
      } catch (e) {
        toast.error(JSON.stringify(e));
      }
    },
    [addFavMovie, isFavorited, removeFavMovie],
  );

  return {
    favMovies,
    addFavMovie,
    removeFavMovie,
    isFavorited,
    toggleFavorite,
    getListOfFavorites,
  };
};
