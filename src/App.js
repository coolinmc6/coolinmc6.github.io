import React, { Component } from 'react';
import logo from './logo.svg';

import NavBar from './components/NavBar';

// images
import Logo from './artwork/twitter_header_photo_1.png';
import CodeAssist from './artwork/Code-Assist.png';

let logoStyle = {
	maxWidth: "100vw"
}

const contentArray = [
	{
		image: CodeAssist,
		title: 'Code Assist',
		text: 'A web app that allows users to create their own library of snippets to quickly look up custom code.',
		link: 'https://coolinmc6.github.io/code-assist/',
		createDate: '',
		technologies: []
	}
	// {
	// 	image: '',
	// 	title: 'Code Assist',
	// 	text: 'A web app that allows users to create their own library of snippets to quickly look up custom code.',
	// 	link: '',
	// 	createDate: ''
	// },
	// {
	// 	image: '',
	// 	title: 'Code Assist',
	// 	text: 'A web app that allows users to create their own library of snippets to quickly look up custom code.',
	// 	link: '',
	// 	createDate: ''
	// },
	// {
	// 	image: '',
	// 	title: 'Code Assist',
	// 	text: 'A web app that allows users to create their own library of snippets to quickly look up custom code.',
	// 	link: '',
	// 	createDate: ''
	// },
	// {
	// 	image: '',
	// 	title: 'Code Assist',
	// 	text: 'A web app that allows users to create their own library of snippets to quickly look up custom code.',
	// 	link: '',
	// 	createDate: ''
	// }
]


class App extends Component {
	constructor() {
		super();
		this.state = {cards: contentArray}
	}

	renderCard(obj) {

		return (
			<div className="card portfolio-card" key={Math.floor(Math.random()*100000)}>
			  <img className="card-img-top" src={obj.image} alt="Card image cap"/>
			  <div className="card-body">
			    <h5 className="card-title">{obj.title}</h5>
			    <p className="card-text">{obj.text}</p>
			    <a href={obj.link} className="btn btn-primary" target="_blank">See it live</a>
			  </div>
			</div>
		)
	}

	render() {
		return (
			<div>
				{/*<NavBar />*/}
				<img src={Logo} style={logoStyle}/>
				<div className="container portfolio">
					{this.state.cards.map(card => this.renderCard(card))}

				</div>
			</div>
		);
	}
}

export default App;
