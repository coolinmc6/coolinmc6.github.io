import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar';

// Helpers
import { getTechnologyInfo, specialCases } from './helpers'

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
		let specialClass = specialCases(obj.title);
		console.log(obj.title)
		console.log(specialClass);
		
		return (
			<div className={`card portfolio-card ${specialClass.className}`} key={Math.floor(Math.random()*100000)}>
				<div className="card-top-half">
					<div className="img-container">
			  			<img className="card-img-top" src={obj.image} alt="Card image cap"/>
			  		</div>
			  		<div className="card-body">
			    		<h5 className="card-title">{obj.title}</h5>
			    		<p className="card-text">{obj.text}</p>
			  		</div>
			  	</div>
			  	<ul className="list-group list-group-flush">
			  		<li className="list-group-item">
		  				<div className="technology-list">{this.renderTechnologies(obj.technologies)}</div>
			  		</li>
			  		<li className="list-group-item">
			  			<div className="important-links">
			  				<a href={obj.link} className="btn btn-primary see-live" target="_blank">See it live</a>
			  				<a href={obj.repo}><img src={GitHub} title="See the code" className="github-repo"/></a>
			  			</div>
			  		</li>
			  	</ul>
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
