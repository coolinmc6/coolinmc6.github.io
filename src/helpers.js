
// images
import BootstrapLogo from './artwork/bootstrap-logo.png';
import JavaScriptLogo from './artwork/javascript-logo.png';
import MaterializeLogo from './artwork/materialize-logo.png';
import NoImage from './artwork/no-image.png';
import ReactLogo from './artwork/react-logo.png';
import ReactRouter from './artwork/react-router.png';
import ReduxForm from './artwork/redux-form.png';
import ReduxLogo from './artwork/redux-logo.svg';
import SassLogo from './artwork/sass-logo.png';



export const getTechnologyInfo = (technology) => {

	let obj = {
		name: '',
		img: '',
		title: ''
	}

	switch(technology) {
		case 'bootstrap':
		case 'Bootstrap':
			obj.name = 'bootstrap';
			obj.title = 'Bootstrap';
			obj.img = BootstrapLogo;
			break;
		case 'javascript':
		case 'JavaScript':
			obj.name = 'javascript';
			obj.title = 'JavaScript';
			obj.img = JavaScriptLogo;
			break;
		case 'materialize':
		case 'Materialize':
			obj.name = 'materialize';
			obj.title = 'Materialize';
			obj.img = MaterializeLogo;
			break;
		case 'react':
		case 'React':
			obj.name = 'react';
			obj.title = 'React';
			obj.img = ReactLogo;
			break;
		case 'react-router':
		case 'React-Router':
			obj.name = 'react-router';
			obj.title = 'React Router';
			obj.img = ReactRouter;
			break;
		case 'redux':
		case 'Redux':
			obj.name = 'redux';
			obj.title = 'Redux';
			obj.img = ReduxLogo;
			break;
		case 'redux-form':
		case 'Redux-Rorm':
			obj.name = 'redux-form';
			obj.title = 'Redux-Form';
			obj.img = ReduxForm;
			break;
		case 'sass':
		case 'Sass':
			obj.name = 'sass';
			obj.title = 'Sass';
			obj.img = SassLogo;
			break;
		default:
			obj.name = technology;
			obj.title = technology;
			obj.img = NoImage;
	}

	return obj;
}

export const specialCases = (title) => {
	let obj = {
		className: ''
	}

	switch(title) {
		case 'React Playground':
			obj.className = 'react-playground';
			break;
		case 'Basic Redux Counter':
			obj.className = 'redux-counter';
			break;
		case 'React ToDo #1 (no Redux)':
			obj.className = 'react-todo-1'
			break;
		case 'React ToDo #2 (with Redux)':
			obj.className = 'react-redux-todo';
			break;
		default:
			obj.className = '';
			break;
	}

	return obj;
}