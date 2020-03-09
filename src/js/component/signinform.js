import React from "react";
import { Link } from "react-router-dom";

export function SignInForm() {
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
					<label>Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label>Remember me</label>
				</div>
				<div>
					<Link to="/welcome">
						<button type="submit" className="btn btn-primary">
							Sign in
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
}

// Card.propTypes = {
//     cardLink: PropTypes.string,
//     cardImage: PropTypes.string,
//     cardTitle: PropTypes.string,
//     cardText: PropTypes.string
// };
