import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { IDataVideos, IParamsGetVideos } from "./type";
import type { AxiosError } from "axios";
import { getVideos } from "./api";

export const useGetVideos = (params: IParamsGetVideos) => {
  return useQuery<IDataVideos, AxiosError>({
    queryKey: ["trailer", params],
    queryFn: () => getVideos({ ...params }),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};
