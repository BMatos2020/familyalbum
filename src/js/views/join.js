import React from "react";
import { SignUpForm } from "../component/signupform";

export function SignUp() {
	// const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Get Started</h1>
			<SignUpForm />
			<br />
		</div>
	);
}
