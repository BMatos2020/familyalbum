import React from "react";
import { Link } from "react-router-dom";

export function SignUpForm() {
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
				<div>
					<Link to="/welcome">
						<button type="submit" className="btn btn-primary">
							Create my account
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
}
