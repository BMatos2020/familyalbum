import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { welcomeModal } from "./welcomemodal";
// import PropTypes from "prop-types";

export function SignUpForm() {
	const [modal, setModal] = useState({});

	return (
		<div>
			<form>
				<div className="form-group">
					<label>Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
					<small id="emailHelp" className="form-text text-light">
						We will never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<label>First Name</label>
					<input type="text" className="form-control" id="exampleName" placeholder="Enter your first name" />
				</div>
				<div className="form-group">
					<label>Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-group">
					<label>Confirm Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Confirm password"
					/>
				</div>
				{/* <div>
					<Link to="/welcome">
					{/* <!-- Button trigger modal --> */}
				{/* <button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#staticBackdrop"
						onClick={() => setModal()}>
						Create my account!
					</button>
					</Link>
				</div> */}
			</form>
		</div>
	);
}

// Modal.propTypes = {
//     onPress: PropTypes.string,
// };
