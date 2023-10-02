// import React from 'react'
import jurnalist1 from "../../assets/jurnalist-1.svg";
import { BsBookmark, BsShare } from "react-icons/bs";

function JournalistCard() {
  // Create a Date object with your desired date
  const date = new Date();

  // Format the date as 'YYYY-MM-DD'
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <div className="flex justify-between items-center p-5 bg-[#F3F3F3] rounded-t-md">
      <div className="flex items-center gap-4">
        <img className="w-12 rounded-full" src={jurnalist1} alt="" />
        <div>
          <p className="text-base font-semibold text-dark-2"> Mr. Tom </p>
          <p className="text-sm font-normal text-[#706F6F]">{formattedDate}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <BsBookmark className="text-2xl" />
        <BsShare className="text-2xl" />
      </div>
    </div>
  );
}

export default JournalistCard;
