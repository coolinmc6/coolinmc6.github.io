// images
import CodeAssist from './artwork/Code-Assist.png';
import ColinMc from './artwork/twitter_header_photo_1.png';
import EggheadReact from './artwork/egghead-react.png';
import NoImage from './artwork/no-image.png';
import Playground from './artwork/temp.png';
import ReactBlog from './artwork/react-blog.png';
import ReactReduxTodo from './artwork/react-redux-todo.png';
import ReactToDo1 from './artwork/react-todo1-v1.png';
import ReduxCounter from './artwork/redux-counter2.png';

// portfolio array
export const contentArray = [
	{
		image: CodeAssist,
		title: 'Code Assist',
		text: 'A web app that allows users to create their own library of snippets to quickly look up commonly used custom code. I created this because I wanted an easy-to-access repository of my code that can be searched by keywords, language, and tag.',
		link: 'https://coolinmc6.github.io/code-assist/',
		// link: '#', => use this to hide the "see live" button
		repo: 'https://github.com/coolinmc6/code-assist',
		createDate: '',
		technologies: ['javascript','react', 'redux', 'sass'],
		customOrder: 100
	},
	{
		image: ColinMc,
		title: 'Coolinmc6 GitHub User Page',
		text: 'It\'s this page!! This page was created using React to display my portfolio projects with a particular focus on giving outsiders the ability to filter my projects by technology and actually see it in action!',
		link: 'https://coolinmc6.github.io/',
		
		repo: 'https://github.com/coolinmc6/coolinmc6.github.io',
		createDate: '',
		technologies: ['javascript','react', 'sass'],
		customOrder: 155
	},
	{
		image: Playground,
		title: 'React Playground',
		text: 'A React app used as a foundation to play around with React and Redux. This app allows me to quickly experiment with React features or app ideas with the foundational React and Redux insfrastructure already in place.',
		link: 'https://coolinmc6.github.io/react-playground/',
		repo: 'https://github.com/coolinmc6/react-playground',
		createDate: '',
		technologies: ['javascript','react', 'redux', 'sass', 'react-router', 'materialize'],
		customOrder: 150
	},
	{
		image: ReduxCounter,
		title: 'Basic Redux Counter',
		text: 'My first React app with Redux. The app itself is very boring but it was a great introduction to setting up the project using create-react-app, Redux and react-redux, and learning the flow of state through a Redux app.',
		link: 'https://coolinmc6.github.io/counter-redux-CM/',
		repo: 'https://github.com/coolinmc6/counter-redux-CM',
		createDate: '',
		technologies: ['javascript', 'react', 'redux'],
		customOrder: 1050
	},
	
	{
		image: ReactToDo1,
		title: 'React ToDo #1 (no Redux)',
		text: 'This is my first todo app using React state. I practiced creating a class-based component, instantiating state in the TodoList, adding / removing / editing / deleting items without mutating state, event handlers, etc.',
		link: 'https://coolinmc6.github.io/CM-todo-react/',
		repo: 'https://github.com/coolinmc6/CM-todo-react',
		createDate: '',
		technologies: ['javascript', 'react'],
		customOrder: 1000
	},
	{
		image: ReactReduxTodo,
		title: 'React ToDo #2 (with Redux)',
		text: 'This is another todo app using React and Redux and build off of my first Todo App. The goal of this project was to largely take what I learned from my React-only Todo app and the Redux Counter app and apply it to a slightly more complex project.',
		link: 'https://coolinmc6.github.io/cm-todo-react2/',
		repo: 'https://github.com/coolinmc6/cm-todo-react2',
		createDate: '',
		technologies: ['javascript', 'react'],
		customOrder: 950
	},
	{
		image: ReactBlog,
		title: 'React Blog App',
		text: 'This app uses React, Redux, ReduxForm, and some more advanced styling in the form of Sass and Bootstrap. This was an even more complex app that allowed me to learn Redux Form for adding blog posts and dynamic routing in React Router.',
		link: 'https://coolinmc6.github.io/cm-blog/',
		repo: 'https://github.com/coolinmc6/cm-blog',
		createDate: '',
		technologies: ['javascript', 'react', 'redux', 'redux-form', 'sass', 'bootstrap', 'react-router'],
		customOrder: 900
	},

	{
		image: EggheadReact,
		title: 'Egghead.io: Build Your First Production Quality React App',
		text: 'This Egghead.io course was great introduction to production-quality React that covered React state, testing, and HTTP requests to a "server". It also introduced me to json-server which I use in my Code Assist app.',
		link: '#',
		repo: 'https://github.com/coolinmc6/egghead-todo',
		createDate: '',
		technologies: ['javascript', 'react'],
		customOrder: 900,
		courseLink: 'https://egghead.io/courses/build-your-first-production-quality-react-app'
	}

]