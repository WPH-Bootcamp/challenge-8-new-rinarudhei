import MovieAppSvg from "../../svgs/MovieAppSvg";

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto flex flex-col sm:flex-row h-30 w-dvw min-w-98.25 max-w-360 bottom-0 px-4 py-6 md:py-2 lg:px-35 gap-2 border-t border-[#252b37] z-50 justify-center sm:justify-around lg:justify-between sm:items-center">
      <MovieAppSvg></MovieAppSvg>
      <small className="text-xs lg:text-md leading-6 lg:leading-7.5 text-[#535862]">
        Copyright ©2025 Movie Explorer
      </small>
    </footer>
  );
};

export default Footer;
