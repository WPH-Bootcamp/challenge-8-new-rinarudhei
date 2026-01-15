import { Link } from "react-router-dom";

type DetailButtonProp = {
  text: string;
  id: number;
};
const DetailButton: React.FC<DetailButtonProp> = ({ text, id }) => {
  return (
    <Link
      to={`details/${id}`}
      className="flex h-11 xl:h-13 w-full p-2 gap-2 border border-[#181d27] bg-[#0a0d12]/60 rounded-full justify-center items-center backdrop-blur-2xl lg:w-57.5"
    >
      <div className="font-semibold text-sm lg:text-base leading-7 lg:leading-7.5 text-[#fdfdfd]">
        {text}
      </div>
    </Link>
  );
};

export default DetailButton;
