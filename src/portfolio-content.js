// images
import CodeAssist from './artwork/Code-Assist.png';
import NoImage from './artwork/no-image.png';
import Playground from './artwork/temp.png'

// portfolio array
export const contentArray = [
	{
		image: CodeAssist,
		title: 'Code Assist',
		text: 'A web app that allows users to create their own library of snippets to quickly look up custom code.',
		link: 'https://coolinmc6.github.io/code-assist/',
		repo: 'https://github.com/coolinmc6/code-assist',
		createDate: '',
		technologies: ['javascript','react', 'redux', 'sass'],
		customOrder: 100
	},
	{
		image: Playground,
		title: 'React Playground',
		text: 'A React app that allows me to play around with React and Redux.',
		link: 'https://coolinmc6.github.io/react-playground/',
		repo: 'https://github.com/coolinmc6/react-playground',
		createDate: '',
		technologies: ['javascript','react', 'redux', 'sass'],
		customOrder: 150
	},
	{
		image: NoImage,
		title: 'Basic Redux Counter',
		text: 'My first Redux app with React; very boring but works!',
		link: 'https://coolinmc6.github.io/counter-redux-CM/',
		repo: 'https://github.com/coolinmc6/counter-redux-CM',
		createDate: '',
		technologies: ['javascript', 'react', 'redux'],
		customOrder: 250
	},
	
	{
		image: NoImage,
		title: 'React ToDo #1 (no Redux)',
		text: 'This is my first todo app using React state.',
		link: 'https://coolinmc6.github.io/CM-todo-react/',
		repo: 'https://github.com/coolinmc6/CM-todo-react',
		createDate: '',
		technologies: ['javascript', 'react'],
		customOrder: 1000
	},
	{
		image: NoImage,
		title: 'React ToDo #2 (with Redux)',
		text: 'This is another todo app using React and Redux.',
		link: 'https://coolinmc6.github.io/cm-todo-react2/',
		repo: 'https://github.com/coolinmc6/cm-todo-react2',
		createDate: '',
		technologies: ['javascript', 'react'],
		customOrder: 1000
	},
	{
		image: NoImage,
		title: 'React Blog App',
		text: 'This app uses React, Redux and ReduxForm.',
		link: 'https://coolinmc6.github.io/cm-blog/',
		repo: 'https://github.com/coolinmc6/cm-blog',
		createDate: '',
		technologies: ['javascript', 'react', 'redux', 'redux-form'],
		customOrder: 1000
	}

]