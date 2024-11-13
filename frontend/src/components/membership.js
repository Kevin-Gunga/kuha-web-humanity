import "../App.css";

function Membership() {
  return (
    <div className="">
      <h1 className="flex justify-center uppercase text-customGray font-bold">
        membership
      </h1>
      <ol className="flex flex-col justify-center w-1/2  mx-auto list-decimal">
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
