import { useState } from "react";
import WeatherForm from "./WeatherForm";
import ParticleCanvas from "./ParticleCanvas";

const WeatherCard = () => {
  const [WeatherData, setWeatherData] = useState([]);

  return (
    <section className="h-screen">
      <div className="container  sm:px-4 mx-auto  py-5 h-full">
        <div className="flex flex-wrap flex-col  justify-center items-center h-full">
          <WeatherForm setWeatherData={setWeatherData} />
          <ParticleCanvas />
          <div className="md:w-2/3  lg:w-1/2  xl:w-1/3 pr-4 pl-4">
            <div className="relative flex text-[#4B515D] rounded-[35px] flex-col min-w-0  break-words border bg-white border-1 border-gray-300">
              <div className="flex-auto p-6 ">
                <div className="flex">
                  <h6 className="flex-grow">{WeatherData?.location?.name}</h6>
                  <h6>{WeatherData?.location?.localtime.split(" ")[1]}</h6>
                </div>
                <div className="flex flex-col text-center mt-5 mb-4">
                  <h6 className="text-4xl mb-2 font-bold text-[#1C2331]">
                    {WeatherData?.current?.temp_c}°C
                  </h6>
                  <span className="text-md  text-[#868B94]">
                    {WeatherData?.current?.condition?.text}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex-grow text-base">
                    <div>
                      <i className="fas fa-wind fa-fw text-[#868B94]" />
                      <span className="ms-1">
                        {WeatherData?.current?.wind_kph} km/h
                      </span>
                    </div>
                    <div>
                      <i className="fas fa-tint fa-fw text-[#868B94]" />
                      <span className="ms-1">
                        {" "}
                        {WeatherData?.current?.humidity}%{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherCard;
