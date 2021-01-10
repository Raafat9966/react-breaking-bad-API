import React from "react";

const CharacterItem = ({ item }) => {
	return (
		<div className="card">
			<div className="card-inner">
				<div className="card-front">
					<img src={item.img} alt="" />
				</div>
				<div className="card-back">
					<h1>{item.name}</h1>
					<ul>
						<li>
							<strong>Actor Name:</strong> {item.portrayed}
						</li>
						<li>
							<strong>Nickname:</strong> {item.nickname}
						</li>
						<li>
							<strong>Birthday:</strong> {item.birthday}
						</li>
						<li>
							<strong>Occupation:</strong>{" "}
							{item.occupation.join(", ")}
						</li>
						<li>
							<strong>Appearance:</strong>{" "}
							{item.appearance
								? `season ${item.appearance.join("- ")}`
								: "None"}
						</li>
						<li>
							<strong>Better Call Saul Appearance:</strong>{" "}
							{item.better_call_saul_appearance.length === 0
								? "None"
								: `season ${item.better_call_saul_appearance.join(
										"- "
								  )}`}
						</li>
						<li>
							<strong>Status:</strong> {item.status}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CharacterItem;
