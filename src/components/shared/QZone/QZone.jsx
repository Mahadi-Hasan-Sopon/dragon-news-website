import img1 from "../../../assets/qZone1.png";
import img2 from "../../../assets/qZone2.png";
import img3 from "../../../assets/qZone3.png";

function QZone() {
  return (
    <div className="bg-[#F3F3F3] mt-6 mb-10 py-4">
      <h2 className="text-xl font-semibold text-dark-2 px-4 text-center">
        Q-Zone
      </h2>
      <div className="flex flex-col justify-center items-center w-ful">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
}

export default QZone;
