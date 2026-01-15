export interface IVideos {
  iso_649_1: string;
  iso_366_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
export interface IDataVideos {
  id: number;
  results: IVideos[];
}

export interface IParamsGetVideos {
  movieId: number;
}
