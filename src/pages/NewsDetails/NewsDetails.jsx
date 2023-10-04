import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import { BsArrowLeft, BsCalendarEvent } from "react-icons/bs";
import Navbar from "../../components/shared/Navbar/Navbar";

function NewsDetails() {
  const { id, category } = useParams();
  const allNews = useLoaderData();
  const news = allNews.find((singleNews) => singleNews._id === id);
  const editorInsightNews = [];

  const getRandomNews = () => {
    const randomNewsNumber = [];
    let length = 0;

    while (length < 3) {
      const randomNumber = Math.floor(Math.random() * allNews.length);
      if (!randomNewsNumber.includes(randomNumber)) {
        randomNewsNumber.push(randomNumber);
        length++;
      }
    }
    randomNewsNumber.forEach((number) =>
      editorInsightNews.push(allNews[number])
    );
  };
  getRandomNews();

  return (
    <div>
      <Header />
      <Navbar />
      <h3 className="text-xl font-semibold text-dark-2">Dragon News</h3>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="col-span-3 my-5">
          <div className="border rounded-xl p-8">
            <img className="w-full" src={news.image_url} alt="" />
            <h1 className="text-2xl font-bold text-dark-2 my-4">
              {news.title}
            </h1>
            <p className="text-base font-normal text-[#706F6F]">
              {news.details}
            </p>
            <Link to={`/news/${category}`}>
              <button className="mt-6 text-xl font-medium flex items-center text-white bg-[#D72050] px-6 py-2 cursor-pointer">
                <BsArrowLeft className="mr-2" />
                All news in this category
              </button>
            </Link>
          </div>
          <div className="editors-insight my-8">
            <h3 className="text-xl font-semibold text-dark-2">
              Editors Insight
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {editorInsightNews?.map((singleNews) => (
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
                  <div className="flex items-center mt-4 gap-4 text-[#9F9F9F]">
                    <BsCalendarEvent />
                    <p className="text-base font-medium">
                      {formatDate(singleNews?.author?.published_date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-sidebar mt-5 border">Right Sidebar</div>
      </div>
    </div>
  );
}

// function formatDate(inputDate) {
//   const options = { year: "numeric", month: "short", day: "numeric" };
//   const date = new Date(inputDate);
//   return date.toLocaleDateString(undefined, options);
// }
function formatDate(inputDate) {
  const date = new Date(inputDate);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

// NewsDetails.propTypes = {};

export default NewsDetails;
