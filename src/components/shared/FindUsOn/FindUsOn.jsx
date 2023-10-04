import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

function FindUsOn() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-dark-2">Find Us On</h2>
      <div className="mt-5">
        <a
          href="https://www.facebook.com/D.Eng.Mahadi.Hasan"
          className="flex items-center gap-3 rounded-t-xl w-full border p-4 cursor-pointer"
        >
          <BsFacebook className="text-2xl" />
          Facebook
        </a>
        <a
          href="https://twitter.com/MahadiSopon"
          className="flex items-center gap-3 w-full border-x p-4 cursor-pointer"
        >
          <BsTwitter className="text-2xl" />
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/mahadi-hasan-sopon/"
          className="flex items-center gap-3 rounded-b-xl w-full border p-4 cursor-pointer"
        >
          <BsLinkedin className="text-2xl" />
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default FindUsOn;
