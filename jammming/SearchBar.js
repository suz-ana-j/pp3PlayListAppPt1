import React from 'react';

class SearchBar extends 
React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

     handleTermChange = (event) => {
        this.setState({ term: event.target.value });
    };

    search = () => {
        // Implement Spotify search functionality here
    };

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter a song, album, or artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.Search}>Search</button>
            </div>
        );
    }
}

export default SearchBar;