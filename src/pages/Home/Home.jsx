// import React from 'react'

import Marquee from "react-fast-marquee";
import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { FaFacebook, FaGithub } from "react-icons/fa";

function Home() {
  const [marqueeLinks, setMarqueeLinks] = useState([]);

  useEffect(() => {
    fetch("marqueeLinks.json")
      .then((res) => res.json())
      .then((data) => setMarqueeLinks(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="marquee flex bg-[#F3F3F3] p-4 mt-8">
        <button className="bg-[#D72050] text-xl text-white font-medium py-2 px-6 mr-1">
          Latest
        </button>
        <Marquee pauseOnHover speed={70}>
          {marqueeLinks.map((marquee) => (
            <Link
              className="text-lg font-semibold text-[#403F3F] tracking-wide mr-6"
              key={marquee.id}
              to={`/${marquee.category}/${marquee.id}`}
            >
              {marquee.title}
            </Link>
          ))}
        </Marquee>
      </div>
      <Navbar />
      <div className="homeBody grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="left-sidebar border"></div>
        <div className="middle col-span-1 md:col-span-2 border"></div>
        <div className="right-sidebar border"></div>
      </div>
    </div>
  );
}

export default Home;
