let visibility = false;

const toggleVisibility = () => {
	visibility = !visibility;
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibility}>
				{visibility ? 'Hide details' : 'Show details'}
			</button>
			{
				visibility && (
					<div>
						<p>Hey. These are some details you cannot see</p>
					</div>
				)
			}
		</div>
	);
	ReactDOM.render(template, document.getElementById('app'));
};

render();