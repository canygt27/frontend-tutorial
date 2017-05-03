import React, {Component} from 'react';

// We can code class with ES6
class SearchBar extends Component {

    //render is just use with class (it is a function)
    render() {
        return <input/>;
    }
}

// We can also access like this
/*const SearchBar = function () {
 return <input/>; //React.createElement;
 };*/

export default SearchBar;