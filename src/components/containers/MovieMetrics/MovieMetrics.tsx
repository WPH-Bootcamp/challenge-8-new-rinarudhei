type MovieMetricsProps = {
  metricTypeText: string;
  isRating: boolean;
  isGenre: boolean;
  isAgeLimit: boolean;
  isAdult: boolean;
  rating: string;
  genre: string;
};
const MovieMetrics: React.FC<MovieMetricsProps> = ({
  rating,
  genre,
  metricTypeText,
  isRating,
  isGenre,
  isAgeLimit,
  isAdult,
}) => {
  return (
    <div className="flex flex-col rounded-2xl border p-4 gap-2 bg-black border-[#252b37] justify-center items-center w-[112.5px] md:w-40 xl:w-69">
      {isRating ? (
        <svg
          className="w-6 h-6 xl:w-8 xl:h-8"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.14317 2.2571C9.53183 1.61128 10.4681 1.61128 10.8568 2.2571L12.7988 5.4841C12.9385 5.71611 13.1662 5.88158 13.43 5.94268L17.0992 6.79246C17.8335 6.96253 18.1228 7.853 17.6287 8.42221L15.1598 11.2664C14.9823 11.4709 14.8953 11.7386 14.9187 12.0084L15.2443 15.7606C15.3095 16.5115 14.552 17.0619 13.858 16.7678L10.3901 15.2986C10.1407 15.193 9.85922 15.193 9.60989 15.2986L6.14196 16.7678C5.44793 17.0619 4.69045 16.5115 4.75562 15.7606L5.08126 12.0084C5.10467 11.7386 5.01768 11.4709 4.84017 11.2664L2.37123 8.42221C1.87713 7.85301 2.16646 6.96253 2.90077 6.79247L6.56995 5.94268C6.83376 5.88158 7.0615 5.71611 7.20113 5.4841L9.14317 2.2571Z"
            fill="#E4A802"
            stroke="#E4A802"
            strokeWidth="1.25"
          />
        </svg>
      ) : isGenre ? (
        <svg
          className="w-6 h-6 xl:w-8 xl:h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z"
            fill="#FDFDFD"
          />
        </svg>
      ) : isAgeLimit ? (
        <svg
          className="w-6 h-6 xl:w-8 xl:h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.5 6.38C9.53 6.38 10.38 7.22 10.38 8.26C10.38 9.3 9.54 10.14 8.5 10.14C7.46 10.14 6.62 9.28 6.62 8.25C6.62 7.22 7.47 6.38 8.5 6.38ZM12 19.08C9.31 19.08 7.12 16.89 7.12 14.2C7.12 13.5 7.69 12.92 8.39 12.92H15.59C16.29 12.92 16.86 13.49 16.86 14.2C16.88 16.89 14.69 19.08 12 19.08ZM15.5 10.12C14.47 10.12 13.62 9.28 13.62 8.24C13.62 7.2 14.46 6.36 15.5 6.36C16.54 6.36 17.38 7.2 17.38 8.24C17.38 9.28 16.53 10.12 15.5 10.12Z"
            fill="#FDFDFD"
          />
        </svg>
      ) : null}
      <div className="flex flex-col">
        <p className="text-xs xl:text-base leading-6 xl:leading-7.5 text-center text-[#d5d7da]">
          {metricTypeText}
        </p>
        <p className="font-semibold text-lg xl:text-xl leading-8 xl:leading-8.5 text-center text-[#fdfdfd] text-nowrap">
          {isRating
            ? `${rating}/10`
            : isGenre
              ? `${genre === "Science Fiction" ? "Sci-Fi" : genre}`
              : isAgeLimit
                ? isAdult
                  ? "17"
                  : "13"
                : null}
        </p>
      </div>
    </div>
  );
};

export default MovieMetrics;
