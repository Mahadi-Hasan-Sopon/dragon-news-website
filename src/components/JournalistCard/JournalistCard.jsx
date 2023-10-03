import PropTypes from "prop-types";

import { BsBookmark, BsShare } from "react-icons/bs";

function JournalistCard({ author }) {
  const { name, published_date, img } = author;

  const dateToShow = published_date?.split(" ")[0];

  return (
    <div className="flex justify-between items-center p-5 bg-[#F3F3F3] rounded-t-md">
      <div className="flex items-center gap-4">
        <img className="w-12 h-12 rounded-full" src={img} alt="" />
        <div>
          <p className="text-base font-semibold text-dark-2"> {name} </p>
          <p className="text-sm font-normal text-[#706F6F]">{dateToShow}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <BsBookmark className="text-2xl" />
        <BsShare className="text-2xl" />
      </div>
    </div>
  );
}

JournalistCard.propTypes = {
  author: PropTypes.object.isRequired,
};

export default JournalistCard;
