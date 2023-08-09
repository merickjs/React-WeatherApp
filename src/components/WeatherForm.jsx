import { useState, useEffect } from "react";
import axios from "axios";
const WeatherForm = ({ setWeatherData }) => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState("London");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=640e68ef9fb14b38ae8194034232907&q=${cityData}`
        );
        const data = await response.data;
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [cityData]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center items-center my-6 gap-4"
    >
      <input
        type="text"
        placeholder="Enter A City.."
        className="p-4 border-b-2 border-white text-white placeholder:text-[#f2f2f2] outline-none bg-transparent"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button
        className="bg-white p-5 w-28 rounded-xl"
        onClick={() => {
          setCityData(city), setCity("");
        }}
      >
        Search
      </button>
    </form>
  );
};

export default WeatherForm;
