import React from "react";
import TrafficLights from "./lights.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="app" id="app">
			<TrafficLights />
		</div>
	);
};

export default Home;
