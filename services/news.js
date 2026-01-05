const axios = require("../axiosConfig");
const { getCache, setCache } = require("../cache/cacheManager");

async function getNews() {
  const cacheKey = "top_news";
  const cached = getCache(cacheKey);
  if (cached) return cached;

  const response = await axios.get(
    "https://newsapi.org/v2/everything",
    {
      params: {
        q: "india",
        apiKey: "668dc4b228054762ba8beebbbdac1d39"
      }
    }
  );

  setCache(cacheKey, response.data.articles, 300000);
  return response.data.articles;
}

module.exports = { getNews };
