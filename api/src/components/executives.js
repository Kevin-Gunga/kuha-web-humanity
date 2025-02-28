import "../App.css";
import patron from "../images/patron.jpg";
import chairperson from "../images/chairperson.jpeg";
import secretarygeneral from "../images/secretary general.jpeg";
import legaladvisor from "../images/legal advisor.jpeg";
import treasurer from "../images/treasurer.jpeg";
import vicechairperson from "../images/vice chairperson.jpeg";
import publicity from "../images/publicity.jpeg";
import organisingsec from "../images/organisingsec.png";
import welfare from "../images/welfare.jpeg";

function Executives() {
  return (
    <div id="team" className="flex flex-col list-none m-0 p-0 mt-4 mb-8">
      <h1 className="flex justify-center uppercase  text-slate-500 font-medium md:text-lg lg:text-xl">the executives</h1>
      <h2 className="flex justify-center  text-customGray font-semibold">Meet Our Team</h2>
      <div
        id="team"
        className="team grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto my-5"
      >
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4  sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={patron}
            alt="patron"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
                Mr.Aggrey Bundi
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Patron
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={chairperson}
            alt="chairperson"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
                Alice Musyoka
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Chairperson
              </p>
            </div>
          </div>
        </div>

        <div className="founder py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={vicechairperson}
            alt="vice chairperson"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
                Edwin Omondi
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Vice Chairperson
              </p>
            </div>
          </div>
        </div>

        <div className="founder py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={secretarygeneral}
            alt="secretary general"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
                Elkana Chirure
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Secretary General
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={legaladvisor}
            alt="legal advisor"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
               Emmanuel Mumbo
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Legal Advisor
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={organisingsec}
            alt="organising secretary"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
                Cyrus Kabuthia
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Organising Secretary
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={treasurer}
            alt="treasurer"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
                Doreen Simiyu
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Treasurer
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={welfare}
            alt="welfare"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
                Jackline Gitonga
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Madam Welfare
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6 md:max-w-md lg:max-w-lg">
          <img
            className="exec-image block mx-auto h-24 w-24 rounded-full border-2 border-customGold sm:mx-0 sm:shrink-0 md:h-32 md:w-32 lg:h-40 lg:w-40"
            src={publicity}
            alt="publicity secretary"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg text-black font-semibold md:text-xl lg:text-2xl">
                Kevin Gunga
              </p>
              <p className="text-slate-500 font-medium md:text-lg lg:text-xl">
                Publicity Secretary
              </p>
            </div>
          </div>
        </div>

   

      </div>
    </div>
  );
}

export default Executives;
