type BackdropProp = {
  sourceImage: string;
};

const Backdrop: React.FC<BackdropProp> = ({ sourceImage }) => {
  return (
    <div className="h-70.25 sm:h-90 md:h-104 lg:h-164.5 xl:h-202.5 z-10 relative">
      <div className="absolute bottom-0 h-55.25 w-full lg:h-120 xl:h-202.5 bg-linear-to-t from-black from-20% xl:from-10% to-black/0 z-50"></div>
      <img
        alt="movie backdrop image"
        src={sourceImage}
        className="h-86.25 w-full sm:h-90 md:h-120 lg:h-180 xl:h-180 object-cover absolute -top-16 xl:-top-22.5 z-10"
      />
    </div>
  );
};

export default Backdrop;
