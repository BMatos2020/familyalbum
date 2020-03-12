import React from "react";
import { Link } from "react-router-dom";

export default class Modal extends React.Component {
	render() {
		return <div>Hello Modal</div>;
	}
}

// import React, { useSate, useEffect } from "react";
// import { Link } from "react-router-dom";
// // import PropTypes from "prop-types";

// export function welcomeModal() {
// 	// const [state, setState] = useState({
// 	// });
// 	return (
// 		// <!-- Modal -->
// 		<div
// 			className="modal fade"
// 			id="staticBackdrop"
// 			data-backdrop="static"
// 			tabIndex="-1"
// 			role="dialog"
// 			aria-labelledby="staticBackdropLabel"
// 			aria-hidden="true">
// 			<div className="modal-dialog" role="document">
// 				<div className="modal-content">
// 					<div className="modal-header">
// 						<h5 className="modal-title" id="staticBackdropLabel">
// 							Welcome to the Family App
// 							{"!"}
// 						</h5>
// 					</div>
// 					<div className="modal-body">
// 						<p>
// 							Add your photos and control who views
// 							{","} comments
// 							{","} and shares your content
// 							{"."} Your circle
// 							{","} your rules
// 							{"."}
// 						</p>
// 					</div>
// 					<div className="modal-footer">
// 						<Link to="/welcome">
// 							<button type="button" className="btn btn-secondary" data-dismiss="modal">
// 								I{"'"}m Ready
// 								{"!"}
// 							</button>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// // Modal.propTypes = {
// //     onPress: PropTypes.string,
// // };
