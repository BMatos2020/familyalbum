import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>
			Capture and Share <br />
			Precious Moments Privately
		</h1>
		{/* <p>
			<img src={rigoImage} />
		</p> */}
		<a href="#" className="btn btn-light">
			Join Today!
		</a>
	</div>
);
