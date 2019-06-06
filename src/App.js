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
		let techHash = {};
		contentArray.map(project => {
			console.log('Update 06/06/2019')
			project.technologies.map(tech => {
				if(techHash[tech.toLowerCase()]) {
					techHash[tech.toLowerCase()]++;
				} else {
					techHash[tech.toLowerCase()] = 1;
				}
			})
		})
		this.state = {
			cards: contentArray.sort((a,b) => a.customOrder - b.customOrder),
			technologies: techHash,
			filters: { technologies: [], types: []}
		}
	}


	// Render portfolio block
	renderCard(obj) {
		let specialClass = specialCases(obj.title);

		return (
			<div className={`card portfolio-card ${specialClass.className}`} key={Math.floor(Math.random()*100000)}>
				<div className="card-top-half">
					<div className="img-container">
						<a target="_blank" href={obj.link}>
			  				<img className="card-img-top" src={obj.image} alt="Card image cap"/>
			  			</a>

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
			  				{obj.link != '#' &&  (
		  						<a href={obj.link} className="btn btn-primary see-live" target="_blank">See it live</a>
		  					)}
			  				
			  				<a target="_blank" href={obj.repo}><img src={GitHub} title="See the code" className="github-repo"/></a>
			  			</div>
			  		</li>
			  	</ul>
			</div>
		)
	}

	// Update Filter for Technologies
	// if (val) => add key
	// if (!val) => remove key
	// 
	updateFilter(key, val) {
		// update array of technologies to look for
		let arr = this.state.filters.technologies
		if(val) {
			arr.push(key)
		} else {
			let idx = arr.indexOf(key);
			idx > -1 && arr.splice(idx, 1)
		}

		// which cards to show
		let filter = [];
		let found;
		if(arr.length == 0) {
			found = contentArray;
		} else {
			found = contentArray.filter(proj => proj.technologies.some(t => arr.includes(t)))	
		}

		
		this.setState({
			...this.state, 
			filters: { technologies: arr, ...this.state.filters},
			cards: found
		})
		
	}

	// Renders the technology filters
	renderFilter(obj) {
		return Object.keys(obj).sort().map(key => {
			const filter = getTechnologyInfo(key)
			return (

				<div className="filter-item" key={key}>
					<div className="filter-card-parent">
						<input type="checkbox" onChange={(e) => this.updateFilter(key, e.target.checked)}/>
						<div className="card-body">
							<div className="img-parent">
								<img src={filter.img} title={filter.name}/>  
							</div>
							<div className="category-parent">
								<span className="filter-category">{key}</span> 
							</div>
							<div className="count-parent">
								<span className="filter-count">{obj[key]}</span>
							</div>
						</div>
					</div>
				</div>
			)
			
		})
	}

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
				<img src={Logo} className="main-logo"/>
				<div className="container filter-portfolio">
					{this.renderFilter(this.state.technologies)}
				</div>
				<div className="container portfolio">
					{this.state.cards.map(card => this.renderCard(card))}
				</div>
			</div>
		);
	}
}

export default App;
