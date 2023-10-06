import Marquee from "react-fast-marquee";
import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import NewsCard from "../../components/NewsDetails/NewsCard";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import LoginOptions from "../../components/shared/LoginOptions/LoginOptions";
import FindUsOn from "../../components/shared/FindUsOn/FindUsOn";
import QZone from "../../components/shared/QZone/QZone";
import GetRandomNews from "../../utils/GetRandomNews/GetRandomNews";
import "./Home.css";
import Ads from "../../utils/Ads/Ads";

function Home() {
  const { isLoading, setIsLoading } = useContext(AuthContext);

  const [marqueeLinks, setMarqueeLinks] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("0");

  const [allNews, setAllNews] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchMarquee = async () => {
      try {
        const fetchData = await fetch("marqueeLinks.json");
        const marquee = await fetchData.json();
        setMarqueeLinks(marquee);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCategories = async () => {
      try {
        const fetchData = await fetch("categories.json");
        const categories = await fetchData.json();
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchNews = async () => {
      try {
        const response = await fetch("news.json");
        const newses = await response.json();
        setAllNews(newses);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
    fetchMarquee();
    fetchNews();
  }, [setIsLoading]);

  const handleCategoryChange = (id) => {
    setSelectedCategoryId(id);
  };

  const filteredNews =
    selectedCategoryId === "0"
      ? allNews
      : allNews.filter(
          (singleNews) => singleNews.category_id === selectedCategoryId
        );

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="relative">
      <Header />
      <div className="marquee flex bg-[#F3F3F3] p-4 mt-8">
        <button className="bg-[#D72050] text-xl text-white font-medium py-2 px-6 mr-1">
          Latest
        </button>
        <Marquee pauseOnHover speed={70}>
          {marqueeLinks.map((marquee) => (
            <Link
              className="text-lg font-semibold text-dark-2 tracking-wide mr-6"
              key={marquee.id}
              to={`/${marquee.category}/${marquee.id}`}
            >
              {marquee.title}
            </Link>
          ))}
        </Marquee>
      </div>
      <div className="Navbar sticky top-0 bg-base-100 z-50">
        <Navbar />
      </div>
      <div className="homeBody grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start mt-10">
        <div className="left-sidebar relative md:sticky md:top-28 md:overflow-y-auto md:max-h-[90vh] p-2 z-10">
          <h2 className="text-xl font-semibold text-dark-2">All Category</h2>
          <div className="categories-container flex flex-col gap-7 mt-5 list-none">
            {categories?.map((category) => (
              <Categories
                key={category.id}
                category={category}
                selectedCategoryId={selectedCategoryId}
                handleCategoryChange={handleCategoryChange}
              />
            ))}
          </div>
          <div className="random-news">
            {allNews?.length > 0 && (
              <GetRandomNews allNews={allNews} classes={"my-12 space-y-8"} />
            )}
          </div>

          <div className="right-sidebar-in-left hidden md:max-lg:block">
            <LoginOptions />
            <FindUsOn />
            <QZone />
            <Ads />
          </div>
        </div>
        <div className="middle col-span-1 md:col-span-2 order-last md:order-2">
          <h2 className="text-xl font-semibold text-dark-2 mb-5">
            Dragon News Home
          </h2>
          {filteredNews?.map((newsItem) => (
            <NewsCard
              key={newsItem._id}
              newsItem={newsItem}
              categories={categories}
            />
          ))}
        </div>
        <div className="right-sidebar relative md:sticky md:top-28 md:overflow-y-auto md:max-h-[90vh] p-2 z-10 md:order-3 md:hidden lg:block">
          <LoginOptions />
          <FindUsOn />
          <QZone />
          <Ads />
        </div>
      </div>
    </div>
  );
}

export default Home;
