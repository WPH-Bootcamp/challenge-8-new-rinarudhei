import { api } from "../../lib/api";
import type { IParamsGetVideos } from "./type";

export const getVideos = async ({ movieId }: IParamsGetVideos) => {
  const response = await api.get(`/movie/${movieId}/videos`, {
    params: {
      language: "en-US",
    },
  });

  return response.data;
};
