import React from "react";
import { Link } from "react-router-dom";

export function Modal() {
	return (
		// <!-- Modal -->
		<div
			className="modal fade"
			id="staticBackdrop"
			data-backdrop="static"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="staticBackdropLabel">
							Welcome to the Family App
							{"!"}
						</h5>
					</div>
					<div className="modal-body">
						<p>
							Add your photos and control who views
							{","} comments
							{","} and shares your content
							{"."} Your circle
							{","} your rules
							{"."}
						</p>
					</div>
					<div className="modal-footer">
						<Link to="/welcome">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								I{"'"}m Ready
								{"!"}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
