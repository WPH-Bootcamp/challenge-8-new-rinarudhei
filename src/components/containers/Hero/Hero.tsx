import { useGetVideos } from "../../../features/videos/hooks";
import DetailButton from "../../ui/DetailButton";
import PlayButton from "../../ui/PlayButton";

type HeroProps = {
  backdropPath: string;
  title: string;
  overview: string;
  movieId: number;
  video: boolean;
};
const imageBase = import.meta.env.VITE_IMAGE_BASE_URL;

const Hero: React.FC<HeroProps> = ({
  backdropPath,
  title,
  overview,
  movieId,
}) => {
  const { data, isPending, isError } = useGetVideos({ movieId });
  return (
    <section className="h-82 xl:h-202.5">
      <img
        alt="movie backdrop image"
        src={imageBase + "/original" + backdropPath}
        className="h-98.25 w-full sm:h-120 md:h-160 lg:h-screen object-cover absolute -top-16 xl:-top-22.5"
      />
      <div className="absolute sm:w-120 xl:w-158.75 h-77.5 sm:h-54 xl:h-66.5 top-39.75 sm:top-60 md:top-65 lg:top-74.5 left-4 sm:left-16 lg:left-30 xl:left-35 flex flex-col w-90.25 md:w-120 lg:w-158 gap-6 lg:gap-4">
        <div className="h-full w-full gap-1.5 lg:gap-4 flex flex-col">
          <h1 className="h-9 xl:h-15 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-9 lg:leading-15 lg:tracking-tight text-[#FDFDFD]">
            {title}
          </h1>
          <p className="text-sm sm:text-base  leading-7.5 text-[#a4a7ae]">
            {overview}
          </p>
        </div>
        <div className="h-31 gap-4 flex flex-col sm:flex-row justify-around sm:justify-start">
          {!isError &&
            data &&
            data.results.length > 0 &&
            data.results[0].key !== "" && (
              <PlayButton
                data={data}
                isPending={isPending}
                maskId="hero-mask-id"
              ></PlayButton>
            )}
          <DetailButton id={movieId} text="See Detail"></DetailButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
