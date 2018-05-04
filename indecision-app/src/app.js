console.log('App.js is running');

// if statement
// ternary operators
// logical and operator

const app = {
	title: 'Indecision App',
	subtitle: 'Put you life in the hands of computer',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderOptionsApp();
	}
};

const onRemoveAll = () => {
	app.options = [];
	renderOptionsApp();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};


const appRoot = document.getElementById('app');

const renderOptionsApp = () => {
	// JSX - Javascript XML
	// JSX element: only allow a single root tag (a wrapper div)
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{	
					app.options.map((option) => <li key={option}>Option: {option}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

renderOptionsApp();
