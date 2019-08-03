import React from "react";
import Clock from "../components/Clock";
// import Todo from "../components/Todo";
import ContactCard from "../components/ContactCard";
import Joke from "./Joke";
import JokesData from "../components/JokesData";

function Main() {
	const JokeComponents = JokesData.map(joke => {
		return (
			<Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
		);
	});

	return (
		<main>
			<div className="container">
				<div className="text-right">
					<Clock />
				</div>

				{JokeComponents}

				<ContactCard
					contact={{
						imgUrl: "https://picsum.photos/300/200",
						name: "Stary Dzbanek",
						tel: "3466534643",
						email: "baba@gaga.com"
					}}
				/>

				<ContactCard
					contact={{
						imgUrl: "https://picsum.photos/300/220",
						name: "Dziadek Dzbanek",
						tel: 46544656453,
						email: "123312321baba@gaga.com"
					}}
				/>
			</div>
		</main>
	);
}

export default Main;
