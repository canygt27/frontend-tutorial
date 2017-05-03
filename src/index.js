import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDsoYIxvVgzIIS4PsMWfbDgf488-YFHkDc';

// Create a new component. This component should produce some html

//const means that this is the final variable never gonna change;
const App = function () {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Take this component's generated HTML and put it on the page (in the DOM)