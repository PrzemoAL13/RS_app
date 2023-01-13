import React from "react";
import News from "../src/articles/containers/News";

const newsPosts = [
	{
		id: 1,
		author: "Jan B.",
		title: "Pilne: Co to był za dzień!",
		intro: "Tego świat jeszcze nie widział",
	},
	{
		id: 2,
		author: "Krzysztof C.",
		title: "Wszyscy zazdroszą Polakom!",
		intro: "Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił",
	},
	{
		id: 3,
		author: "Andrzej A.",
		title: "Adam Małysz Zgolił wąs",
		intro:
			"Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy",
	},
];

function App() {
	return (
		<div className='App'>
			{newsPosts.map(elem => (
				<News
					key={`newsKey_${elem.id}`}
					title={elem.title}
					intro={elem.intro}
					author={elem.author}
				/>
			))}
		</div>
	);
}

export default App;
