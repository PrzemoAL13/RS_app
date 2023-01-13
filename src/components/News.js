import React from "react";

const News = props => {
	const { title, intro, author } = props;
	const introLenght = intro.length > 35 ? `${intro.slice(0, 34)}...` : intro;
	// const introLenght = intro.length;
	return (
		<div>
			<h2>{title}</h2>
			<p>{introLenght}</p>
			<p>{author}</p>
		</div>
	);
};

export default News;
