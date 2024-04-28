import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/PlayList';

function App() {
    // Mock data array of track objects
    const mockTracks = [
        {id: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1'},
        {id: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2'},
        {id: '3', name: 'Song 3', artist: 'Artist 3', album: 'Album 3'}
    ];
    
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