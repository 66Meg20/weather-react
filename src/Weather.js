import React from "react";

import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`the weather in Amarillo is ${response.data.main.temp}°C`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amarillo&appid=5185bc1060ff015c08ec9d3280fda0a1&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}
