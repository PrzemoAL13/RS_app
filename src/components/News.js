import React from "react";

const News = props => {
	const { id, title, intro } = props;
	return (
		<div>
			{" "}
			idValue:{id} titleValue:{title} introValue:{intro}
		</div>
	);
};

export default News;
