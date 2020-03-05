import React from "react";
import { SignInForm } from "../component/signinform";

export function SignIn() {
	// const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Please Sign In</h1>
			<SignInForm />
			<br />
		</div>
	);
}
