import "../style.css";

function Membership() {
  return (
    <div id="membership" className="">
      <h1 className="flex justify-center uppercase  text-slate-500 font-medium md:text-lg lg:text-xl">
        membership
      </h1>
      <h4 className="flex justify-center  text-customGray font-semibold">
        How To Join Us
      </h4>
      <ol className="membership flex flex-col justify-center w-1/2  mx-auto list-decimal">
        <li className="py-1">
          All university students are legible to join the association upon
          payment of registration fee of ksh 100/= and a renewal fee of ksh 70/=
          per semester.
        </li>
        <li className="py-1">
          Association's members who have graduated will still be considered
          members upon payment of ksh 200 as renewal fee per semester.
        </li>
      </ol>
    </div>
  );
}

export default Membership;
