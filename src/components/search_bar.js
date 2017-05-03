import React, {Component} from 'react';

// We can code class with ES6
class SearchBar extends Component {

    constructor(props) {
        super(props);

        //state for react

        //kind of new object (request to response)
        // Datadan gelen cevabı event'e aktarıyor. Event'e gelen cevabı dataya aktarıyor. her hangi birşey yoksa boş geliyor. @Input ve @Output gibi
        this.state = {term: ''};
    }

    //render is just use with class (it is a function)
    render() {

        /** We can use both of them are

        return <input onChange={this.onInputChange}/>;
        return <input onChange={(event) => console.log(event.target.value)}/>;

        **/

        // setState default function to set term property (state maniflasyonu için) state in değiştiğini react 'e bildiriyoruz.
        // We can use like this.state.term = event.target.value (But it is bad!!)
        return (
            <div>
                <input
                    value = {this.state.term}
                    onChange={event => this.setState({term: event.target.value})}/>

                /*Value of the input: {this.state.term}*/
            </div>
        );

    }

    //Event Handler
    onInputChange(event) {
        console.log(event.target.value);
    }
}

// We can also access like this
/*const SearchBar = function () {
 return <input/>; //React.createElement;
 };*/

export default SearchBar;