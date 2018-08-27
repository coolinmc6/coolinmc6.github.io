
// images
import JavaScriptLogo from './artwork/javascript-logo.png';
import NoImage from './artwork/no-image.png';
import ReactLogo from './artwork/react-logo.png';
import ReduxLogo from './artwork/redux-logo.svg';
import SassLogo from './artwork/sass-logo.png';



export const getTechnologyInfo = (technology) => {

	let obj = {
		name: '',
		img: '',
		title: ''
	}

	switch(technology) {
		case 'javascript':
		case 'JavaScript':
			obj.name = 'javascript';
			obj.title = 'JavaScript';
			obj.img = JavaScriptLogo;
			break;
		case 'react':
		case 'React':
			obj.name = 'react';
			obj.title = 'React';
			obj.img = ReactLogo;
			break;
		case 'redux':
		case 'Redux':
			obj.name = 'redux';
			obj.title = 'Redux';
			obj.img = ReduxLogo;
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