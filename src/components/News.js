import React, { useState } from "react";

import Author from "./Author";
import Scoring from "./Scoring";

const yellow = "#f1c40f";
const styles = {
	backgroundColor: "#ecf0f1",
	border: "#95a5a6 1px solid",
	padding: 10,
	para: {
		background: yellow,
	},
};

const News = props => {
	const { title, intro, author } = props;
	const introLenght = intro.length > 35 ? `${intro.slice(0, 34)}...` : intro;
	const [score] = useState(5);

	return (
		<div style={styles}>
			<h2>{title}</h2>
			<p style={styles.para}>{introLenght}</p>
			<Author author={author} />
			<Scoring score={score} />
		</div>
	);
};

export default News;
