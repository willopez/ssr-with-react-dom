import React from 'react';
import ReactDOM from 'react-dom';

import App from '../common/App';
import BookCard from '../common/BookCard';

import './index.css';

// Grab the state from a global variable injected into the server-generated HTML
const store = window.__PRELOADED_STATE__;

// settings for the ReactiveBase component
const settings = {
	app: 'good-books-ds',
	credentials: 'nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d',
};

// props for ReactiveSearch components
const searchInputProps = {
	componentId: 'SearchSensor',
	dataField: ['original_title'],
	placeholder: 'Search...',
	URLParams: true,
};

const reactiveListProps = {
	componentId: 'SearchResult',
	dataField: 'original_title.raw',
	from: 0,
	size: 10,
	renderData: data => <BookCard key={data._id} data={data} />,
	react: {
		and: ['SearchSensor'],
	},
};

ReactDOM.hydrate(
	<App
		store={store}
		settings={settings}
		searchInputProps={searchInputProps}
		reactiveListProps={reactiveListProps}
	/>,
	document.getElementById('root'),
);
