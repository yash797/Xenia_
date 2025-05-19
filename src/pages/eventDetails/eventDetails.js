// eventDetails.js
import "./eventDetails.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { staticEventData } from "./eventData";

const EventDetails = (props) => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    const match = staticEventData.find((event) => event._id === id);
    if (!match) {
      navigate("/404");
    } else {
      setEventData(match);
      setLoading(false);
    }
  }, [id]);

  if (loading || !eventData) return props.loader;

  return (
    <>
      {props.toast.container}
      <div className="grid md:grid-cols-2 min-h-screen md:p-8 gap-8 backdrop-blur-xl bg-gradient-to-b from-gray-900/40 to-gray-600/80">
        <div className="my-auto text-center space-y-4 text-white md:h-full p-4 py-8">
          <div className="w-3/4 max-w-[380px] h-[380px] mx-auto">
            <img src={eventData.logo} alt="event-logo" className="event-logo" />
          </div>
          <div className="py-3 text-6xl mx-auto font-bold text-purple-600 border-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {eventData.name}
          </div>
          <div className="border-b border-gray-500"></div>
          <div className="font-light text-gray-400 text-justify">
            {eventData.details}
          </div>
          <div className="event-fees text-blue-400 text-lg font-bold text-left tracking-widest grid grid-cols-2 place-items-center">
            <div className="flex space-x-2">
              <div className="text-gray-200 font-thin">Fees: </div>
              {eventData.fees === 0 || eventData.fees === "0" ? (
                <div className="text-green">Free</div>
              ) : (
                <div>Rs. {eventData.fees}</div>
              )}
            </div>
            <div className="flex space-x-2">
              <div className="text-gray-200 font-thin">Team Size: </div>
              <div>{eventData.teamSize}</div>
            </div>
          </div>
          {!eventData.isLive && (
            <p className="text-red-400 font-medium event-register-buttons disabled">
              Registrations closed! Try with other events.
            </p>
          )}
        </div>

        <div className="space-y-4 p-8 h-full overflow-auto bg-black/20 shadow-lg border border-gray-700 max-h-screen font-thin text-gray-200">
          <div className="text-4xl font-bold text-purple-400 mb-8 border-b border-purple-400/20 pb-2">
            Description
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                <label>Prizes</label>
              </div>
              <div className="border-t pt-2 border-slate-600">
                <ol className="text-gray-300 font-thin">
                  {eventData.prizes.length ? (
                    eventData.prizes.map((data, index) => (
                      <li key={index}>
                        {data.position}: Rs. {data.prize} {data.label ? `(${data.label})` : ""}
                      </li>
                    ))
                  ) : (
                    <div>Coming Soon...</div>
                  )}
                </ol>
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                <label>Schedule</label>
              </div>
              <div className="border-t pt-2 border-slate-600">
                <ol className="text-gray-300 font-thin list-disc list-inside">
                  {eventData.schedule.map((data, i) => (
                    <li key={i}>Round {data.round} : {data.datetime}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="space-y-2 col-span-2">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                <label>Rules</label>
              </div>
              <div className="border-t pt-2 border-slate-600 space-y-4">
                {eventData.rules.map((data, i) => (
                  <div key={i}>
                    <p className="text-blue-300 font-bold text-xl mb-1">{data.roundName}</p>
                    <ul className="text-white list-disc list-inside space-y-1">
                      {data.roundRules.map((rule, j) => (
                        <li key={j}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                Platforms:
                <div className="mt-2 pt-1 font-light text-blue-200 border-t border-slate-600">
                  {eventData.platform.map((data, i) => (
                    <p key={i}>Round {data.round}: <strong>{data.name}</strong></p>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="text-2xl font-bold pb-2 mt-5 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                Contact Help
              </div>
              <div className="border-t pt-2 border-slate-600">
                {eventData.contact.map((data, i) => (
                  <div key={i}>
                    <span className="text-blue-300 px-3">{data.split(":")[0]}</span>
                    <p className="inline-block text-blue-300 font-bold font-xl">
                      <a href={`tel:${data.split(":")[1].trim()}`}>📞 {data.split(":")[1].trim()}</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
