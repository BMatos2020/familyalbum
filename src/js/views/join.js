import React from "react";
import { SignUpForm } from "../component/signupform";
import { welcomeModal } from "../component/welcomemodal";
import { Link } from "react-router-dom";

export function SignUp() {
	// const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Get Started</h1>
			<SignUpForm />
			<div>
				<Link to="/welcome">
					{/* <!-- Button trigger modal --> */}
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#staticBackdrop"
						onClick={() => setModal()}>
						Create my account!
					</button>
				</Link>
			</div>
		</div>
	);
}
