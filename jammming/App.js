import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/PlatList';

function App() {
    return (
        <div className="App">
            <h1>Jammming</h1>
            <SearchBar />
            <div className="App.playlist">
                <SearchResults />
                <Playlist />
            </div>
        </div>
    );
}

export default App;