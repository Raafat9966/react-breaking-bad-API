import React, { useState } from "react";

const Search = ({ getQuery }) => {
	const [text, setText] = useState("");

	const onChange = (q) => {
		setText(q);
		getQuery(q);
	};

	return (
		<section className="search">
			<form>
				{/* <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        /> */}

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
					<a className="search-btn">
						<i class="fas fa-search"></i>
					</a>
				</div>
			</form>
		</section>
	);
};

export default Search;
