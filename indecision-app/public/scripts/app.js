'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility;
	render();
};

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			visibility ? 'Hide details' : 'Show details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'Hey. These are some details you cannot see'
			)
		)
	);
	ReactDOM.render(template, document.getElementById('app'));
};

render();
