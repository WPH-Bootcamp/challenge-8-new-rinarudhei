type CastCardProp = {
  sourceImage: string;
  name: string;
  character: string;
};
const CastCard: React.FC<CastCardProp> = ({ sourceImage, name, character }) => {
  return (
    <div className="flex gap-3 xl:gap-4 items-center">
      <img
        src={sourceImage}
        className="w-13.75 h-21 md:w-15 md:h-24 xl:w-17.25 xl:h-26 rounded-lg md:rounded-xl xl:rounded-[10px] z-50"
      />
      <div className="flex flex-col w-73.25 md:w-80 h-21 md:h-26 justify-center xl:gap-1">
        <p className="font-semibold text-sm xl:text-base leading-7 xl:leading-7.5 text-[#fdfdfd] h-7 xl:h-7.5 text-start text-nowrap">
          {name}
        </p>
        <p className="text-sm xl:text-base leading-7 xl:leading-7.5  text-[#a4a7ae] h-7 xl:h-7.5">
          {character}
        </p>
      </div>
    </div>
  );
};

export default CastCard;
