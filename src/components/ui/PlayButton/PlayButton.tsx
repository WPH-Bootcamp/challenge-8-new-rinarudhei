import type { IDataVideos } from "../../../features/videos/type";
import PlayButtonSvg from "../../svgs/PlayButtonSvg";

type PlayButtonProp = {
  isPending: boolean;
  data: IDataVideos | undefined;
  maskId: string;
};
const PlayButton: React.FC<PlayButtonProp> = ({ isPending, data, maskId }) => {
  const handlePlayTrailer = (key: string | undefined) => {
    if (key) {
      window.open(
        `https://www.youtube.com/watch/?v=${key}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <button
      className="flex h-11 xl:h-13 w-full p-2 gap-2 bg-[#961200] rounded-full justify-center items-center lg:w-57.5 cursor-pointer"
      onClick={() => handlePlayTrailer(data?.results[0].key)}
    >
      <div className="font-semibold text-sm lg:text-base leading-7 lg:leading-7.5 text-[#fdfdfd]">
        Watch Trailer
      </div>
      {isPending ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mx-auto"></div>
          </div>
        </div>
      ) : (
        <PlayButtonSvg maskId={maskId}></PlayButtonSvg>
      )}
    </button>
  );
};

export default PlayButton;
