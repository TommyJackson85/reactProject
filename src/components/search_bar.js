import React, { Component } from 'react';

class SearchBar extends Component {
    //<p>Value of the input: {this.state.term} </p>
    //onChange={ event => this.setState({ term: event.target.value})}
    constructor(props){
        super(props);
        this.state = { term: ''};
    }

    render() {
        return( 
            <div className="search-bar">
                <input
                value={this.state.term}  
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;