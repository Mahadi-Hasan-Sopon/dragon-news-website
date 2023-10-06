import PropTypes from "prop-types";
import { BsCalendarEvent } from "react-icons/bs";

function GetRandomNews({ allNews, classes }) {
  const randomNews = [];

  const generateRandomNews = () => {
    const randomNewsNumber = [];
    let length = 0;

    while (length < 3) {
      const randomNumber = Math.floor(Math.random() * allNews.length);
      if (!randomNewsNumber.includes(randomNumber)) {
        randomNewsNumber.push(randomNumber);
        length++;
      }
    }
    randomNewsNumber.forEach((number) => randomNews.push(allNews[number]));
  };
  generateRandomNews();

  return (
    <div className={`${classes ? classes : ""}`}>
      {randomNews?.map((singleNews) => (
        <div key={singleNews._id} className="news flex flex-col">
          <img
            className="w-full h-40 rounded-md"
            src={singleNews.thumbnail_url}
            alt=""
          />
          <h2 className="text-lg font-semibold text-dark-2 mt-4 flex-grow">
            {singleNews?.title?.length > 40
              ? singleNews?.title?.slice(0, 40) + "..."
              : singleNews?.title}
          </h2>
          <div className="flex items-center mt-3 gap-4 text-[#9F9F9F]">
            <BsCalendarEvent />
            <p className="text-base font-medium">
              {formatDate(singleNews?.author?.published_date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetRandomNews;

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

GetRandomNews.propTypes = {
  allNews: PropTypes.array,
  classes: PropTypes.string,
};
