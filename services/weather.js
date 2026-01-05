const axios = require("../axiosConfig");
const { getCache, setCache } = require("../cache/cacheManager");

async function getWeather(city) {
  const cacheKey = `weather_${city}`;
  const cachedData = getCache(cacheKey);
  if (cachedData) return cachedData;

  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: "9aa628e761faf2eec05eb2ec1c5bf1f6",
        units: "metric"
      }
    }
  );

  setCache(cacheKey, response.data);
  return response.data;
}

module.exports = { getWeather };
