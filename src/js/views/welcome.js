import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../component/welcomemodal";

export const Welcome = () => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div className="text-center mt-5">
			<h1 className=".text-dark">Add your memories!</h1>
			{/* <p>
			<img src={rigoImage} />
        </p> */}
			<Link to="/">
				<button className="btn btn-light">Add Album</button>
			</Link>
		</div>
	);
};
