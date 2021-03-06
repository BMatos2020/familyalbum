import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>
			Capture and Share <br />
			Precious Moments Privately
		</h1>
		{/* <p>
			<img src={rigoImage} />
        </p> */}
		<Link to="/join">
			<button className="btn btn-light">Join Today!</button>
		</Link>
	</div>
);
