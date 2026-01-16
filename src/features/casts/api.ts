import { api } from "../../lib/api";
import type { IParamsGetCasts } from "./type";

export const getCasts = async ({ movieId }: IParamsGetCasts) => {
  const response = await api.get(`/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });

  return response.data;
};
