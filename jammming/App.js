import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/PlayList';

function App() {
    const [playlistName, setPlaylistName] = useState('My Playlist');
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const addPlaylist = 
        (playlistName, tracks) => {
            const newPlaylist = { name: playlistName, tracks: tracks };
            setPlaylists([...playlists, newPlaylist]);
        };

    const removePlaylist = 
    (playlistIndex) => {
        const updatedPlaylists = [...playlists];

        updatedPlaylists.splice(playlistIndex, 1);

        setPlaylists(updatedPlaylists);
    };

    // Mock data array of track objects
    const mockTracks = [
        {id: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1'},
        {id: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2'},
        {id: '3', name: 'Song 3', artist: 'Artist 3', album: 'Album 3'}
    ];

    // Function to handle changes in playlist title
    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    };

    // Function to add a track to the playlist
    const addTrack = (track) => {
        if (!playlistTracks.find(existingTrack => existingTrack.id === track.id)) {
            setPlaylistTracks([...playlistTracks, track]);
        }
    };

    // Function to remove a track from the playlist
    const removeTrack = (track) => {
        setPlaylistTracks(playlistTracks.filter(existingTrack => existingTrack.id !== track.id));
    };

    const resetPlaylist = () => {
        setPlaylistName('My Playlist');
            setPlaylistTracks([]);
    };

    const savePlaylist = () => {
        const trackURIs = 
    playlistTracks.map(track => track.uri);
    // Send trackURIs to spotify API to save the playlist
    console.log("Playlist saved:", trackURIs);
    // reset playlist
    resetPlaylist();
    };

    return (
        <div className="App">
            <h1>Jammming</h1>
            <SearchBar />
            <div className="App.playlist">
                <SearchResults 
                    tracks={mockTracks}
                    onAdd={addTrack}
                />
                <PlayList 
                    playlistName={playlists.name}
                    onNameChange={handlePlaylistNameChange}
                    playlistTracks={playlists.tracks}
                    onRemoveTrack={(trackIndex) => 
                    removeTrack(index, trackIndex)}
                    onRemovePlaylist={() => removePlaylist(index)}
                    onAddTrack={(track) => addTrack(index, track)}
                />
                <button 
            className="SaveAllButton" onClick={savePlaylist}>Save Playlist to Spotify</button>
            </div>
        </div>
    );
}

export default App;