import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Family</span>
			</Link>
			<div className="ml-auto">
				<Link to="/signIn">
					<button className="btn btn-primary">Sign In</button>
				</Link>
			</div>
		</nav>
	);
};

// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3">
// 			{loggedIn ? (
// 				<>You are logged in</>
// 			) : (
// 				<>
// 					<Link to="/">
// 						<span className="navbar-brand mb-0 h1">Family</span>
// 					</Link>
// 					You are not logged in
// 					<div className="ml-auto">
// 						<Link to="/signIn">
// 							<button className="btn btn-primary">Sign In</button>
// 						</Link>
// 					</div>
// 				</>
// 			)}
// 		</nav>
// 	);
// };
