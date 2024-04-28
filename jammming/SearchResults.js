import React from 'react';
import TrackList from './TrackList';

class SearchResults extends 
React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Search Results</h2>
                <TrackList />
            </div>
        );
    }
}

export default SearchResults;