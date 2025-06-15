import { Link } from "react-router-dom";

const Cards = ({ title }) => {
  return (
    <Link to={title.replace(/\s+/g, "-")}
      className="w-full flex items-center justify-center min-h-[100px] rounded-lg  overflow-hidden p-4 bg-[#36454F] "
    >
      <h2 className="text-white font-semibold text-2xl md:text-3xl text-center ">
        {title}
      </h2>
    </Link>
  );
};

export default Cards;  