import PropTypes from "prop-types";
import { FaEye, FaStar } from "react-icons/fa";

import JournalistCard from "../JournalistCard/JournalistCard";
import { Link } from "react-router-dom";

function NewsCard({ newsItem }) {
  return (
    <div className="mb-8 rounded-lg shadow">
      <JournalistCard author={newsItem.author} />
      <div className="newsCard p-6 space-y-5">
        <h1 className="text-xl font-bold text-dark-2"> {newsItem.title} </h1>
        <img
          className="w-full max-h-80"
          src={newsItem.thumbnail_url}
          alt={` thumbnail of ${newsItem.title}`}
        />
        <DetailsToShow
          newsItemCategoryId={newsItem.category_id}
          newsItemId={newsItem._id}
          details={newsItem.details}
        />

        <div className="view-rating flex justify-between items-center">
          <Rating rating={newsItem.rating} />
          <div className="view flex gap-4 items-center">
            <FaEye /> {newsItem.total_view}
          </div>
        </div>
      </div>
    </div>
  );
}

const Rating = ({ rating }) => {
  // Calculate the fill percentage for the stars
  const fillPercentage = (rating.number / 5) * 100;

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={
        index < fillPercentage / 25 ? "text-[#FF8C47]" : "text-gray-200"
      }
    >
      <FaStar />
    </span>
  ));

  return (
    <div className="flex gap-4">
      {stars} {rating.number}
    </div>
  );
};

const DetailsToShow = ({ details, newsItemId, newsItemCategoryId }) => {
  if (details.length > 200) {
    return (
      <div>
        <p className="text-base font-normal text-[#706F6F]">
          {details.slice(0, 200)}...
        </p>
        <Link to={`/news/${newsItemCategoryId}/${newsItemId}`}>
          <button
            type="button"
            className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-transparent bg-clip-text text-base font-semibold hover:px-6 py-2 border border-transparent hover:border-[#FF8C47] hover:rounded-full transition-all duration-500"
          >
            Read More
          </button>
        </Link>
      </div>
    );
  }
};

NewsCard.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

Rating.propTypes = {
  rating: PropTypes.object.isRequired,
};

DetailsToShow.propTypes = {
  details: PropTypes.string,
  newsItemId: PropTypes.string,
  newsItemCategoryId: PropTypes.string,
};
export default NewsCard;
