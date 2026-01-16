import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { IDataCasts, IParamsGetCasts } from "./type";
import type { AxiosError } from "axios";
import { getCasts } from "./api";

export const useGetCasts = (params: IParamsGetCasts) => {
  return useQuery<IDataCasts, AxiosError>({
    queryKey: ["details", params],
    queryFn: () => getCasts({ ...params }),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};
