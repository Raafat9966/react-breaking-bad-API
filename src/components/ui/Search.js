import React, { useState } from "react";

const Search = ({ getQuery }) => {
	const [text, setText] = useState("");

	const onChange = (q) => {
		setText(q);
		getQuery(q);
	};
	let url = "";
	return (
		<section className="search">
			<form>
				<div class="search-bar">
					<input
						type="text"
						name=""
						className="search-txt form-control"
						placeholder="Search characters..."
						value={text}
						onChange={(e) => onChange(e.target.value)}
						autoFocus
					/>
					<a href={url} className="search-btn">
						<i class="fas fa-search"></i>
					</a>
				</div>
			</form>
		</section>
	);
};

export default Search;
