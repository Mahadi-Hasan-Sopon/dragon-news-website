import dynamicDate from "../../../utils/dynamicDate";

function Header() {
  const { day, month, year, today } = dynamicDate;

  return (
    <div className="text-center">
      <h1 className=" font-semibold text-6xl font-OET mt-4">The Dragon News</h1>
      <p className="text-lg font-normal my-4">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg font-medium">
        {`${day}, ${month} ${today < 9 ? "0" + today : today}, ${year}`}
      </p>
    </div>
  );
}

export default Header;
