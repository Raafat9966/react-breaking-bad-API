import React from "react";
import spinner from "../../img/loading.gif";

const Spinner = () => {
	return (
		<img
			src={spinner}
			style={{ width: "100px", margin: "auto", display: "block" }}
			alt="Loading"
		/>
	);
};

export default Spinner;
