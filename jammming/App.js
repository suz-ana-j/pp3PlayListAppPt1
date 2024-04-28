import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/PlayList';

function App() {
    return (
        <div className="App">
            <h1>Jammming</h1>
            <SearchBar />
            <div className="App.playlist">
                <SearchResults />
                <PlayList />
            </div>
        </div>
    );
}

export default App;