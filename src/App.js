import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar';

// Helpers
import { getTechnologyInfo } from './helpers'

// images
import GitHub from './artwork/GitHub-Mark.png';
import Logo from './artwork/twitter_header_photo_1.png';


// portfolio
import { contentArray } from './portfolio-content';

class App extends Component {
	constructor() {
		super();
		this.state = {cards: contentArray}
	}


	// Render portfolio block
	renderCard(obj) {
		console.log(obj);

		return (
			<div className="card portfolio-card" key={Math.floor(Math.random()*100000)}>
			  <img className="card-img-top" src={obj.image} alt="Card image cap"/>
			  <div className="card-body">
			    <h5 className="card-title">{obj.title}</h5>
			    <p className="card-text">{obj.text}</p>
			    <div className="technology-list">{this.renderTechnologies(obj.technologies)}</div>
			    <a href={obj.link} className="btn btn-primary" target="_blank">See it live</a>
			    <br/>
			    <a href={obj.repo}>See the Code <br/><img src={GitHub} className="github-repo"/></a>
			  </div>
			</div>
		)
	}

	// 
	renderTechnologies(array) {

		return array.map(tech => {
			const obj = getTechnologyInfo(tech)
			return (
				<div className="technology-chip" key={obj.name}><img src={obj.img} title={obj.title}/></div>
			)
		})
	}

	render() {
		return (
			<div>
				{/*<NavBar />*/}
				<img src={Logo} className="main-logo"/>
				<div className="container portfolio">
					{this.state.cards.map(card => this.renderCard(card))}
				</div>
			</div>
		);
	}
}

export default App;
