import "../App.css";

function Activities() {
  return (
    <div className="mt-8">
      <h1 className="flex justify-center uppercase py-1 text-customGray font-bold">our activities</h1>
      <ul className="flex flex-col justify-center w-36 mx-auto list-disc">
      {/* flex flex-col justify-center w-1/2  mx-auto list-disc */}
        <li className="py-1">Hike</li>
        <li className="py-1">University Day</li>
        <li className="py-1">Bonding Camp</li>
        <li className="py-1">Visiting orphanages</li>
        <li className="py-1">Visiting Hospitals</li>
      </ul>
    </div>
  );
}

export default Activities;
