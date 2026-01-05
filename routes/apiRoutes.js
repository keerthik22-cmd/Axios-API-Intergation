const express = require("express");
const router = express.Router();

const { getWeather } = require("../services/weather");
const { getNews } = require("../services/news");
const { processPayment } = require("../services/payment");

router.get("/weather/:city", async (req, res) => {
  try {
    const weather = await getWeather(req.params.city);
    res.json(weather);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/news", async (req, res) => {
  try {
    const news = await getNews();
    res.json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/payment", async (req, res) => {
  try {
    const result = await processPayment(req.body.amount);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
