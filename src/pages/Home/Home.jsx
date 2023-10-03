import Marquee from "react-fast-marquee";
import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import NewsCard from "../../components/NewsDetails/NewsCard";

// import { FaFacebook, FaGithub } from "react-icons/fa";

function Home() {
  const [marqueeLinks, setMarqueeLinks] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("0");

  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const fetchMarquee = async () => {
      try {
        const fetchData = await fetch("marqueeLinks.json");
        const marquee = await fetchData.json();
        setMarqueeLinks(marquee);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMarquee();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("news.json");
        const newses = await response.json();
        setAllNews(newses);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  const handleCategoryChange = (id) => {
    setSelectedCategoryId(id);
  };

  const filteredNews =
    selectedCategoryId === "0"
      ? allNews
      : allNews.filter(
          (singleNews) => singleNews.category_id === selectedCategoryId
        );

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
      <div className="Navbar sticky top-0 bg-base-100">
        <Navbar />
      </div>
      <div className="homeBody grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start mt-10">
        <div className="left-sidebar sticky top-28">
          <Categories
            selectedCategoryId={selectedCategoryId}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="middle col-span-1 md:col-span-2 ">
          <h2 className="text-xl font-semibold text-dark-2 mb-5">
            Dragon News Home
          </h2>
          {filteredNews?.map((newsItem) => (
            <NewsCard key={newsItem._id} newsItem={newsItem} />
          ))}
        </div>
        <div className="right-sidebar border sticky top-28"> Right Content</div>
      </div>
    </div>
  );
}

export default Home;
