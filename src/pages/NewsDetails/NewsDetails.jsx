import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import { BsArrowLeft } from "react-icons/bs";
import Navbar from "../../components/shared/Navbar/Navbar";
import LoginOptions from "../../components/shared/LoginOptions/LoginOptions";
import FindUsOn from "../../components/shared/FindUsOn/FindUsOn";
import QZone from "../../components/shared/QZone/QZone";
import GetRandomNews from "../../utils/GetRandomNews/GetRandomNews";

function NewsDetails() {
  const { id, category } = useParams();
  const allNews = useLoaderData();
  const news = allNews.find((singleNews) => singleNews._id === id);

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
            <div>
              <GetRandomNews
                allNews={allNews}
                classes={"grid grid-cols-2 md:grid-cols-3 gap-6 mt-6"}
              />
            </div>
          </div>
        </div>
        <div className="right-sidebar mt-5">
          <LoginOptions />
          <FindUsOn />
          <QZone />
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
