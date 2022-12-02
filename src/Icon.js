import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const App = (props) => (
  <ReactAnimatedWeather
    icon={props.icon}
    color={props.color}
    size={50}
    animate={true}
  />
);

export default App;
