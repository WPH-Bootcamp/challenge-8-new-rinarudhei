export interface IParamsGetCasts {
  movieId: number;
}

export interface IDataCasts {
  id: number;
  cast: Cast[];
}

type Cast = {
  name: string;
  profile_path: string;
  character: string;
};
