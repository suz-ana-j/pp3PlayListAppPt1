import React from 'react';
import TrackList from './TrackList';

class PlayList extends 
React.Component {
    render() {
        return (
            <div className="PlayList">
                <h2>Playlist</h2>
                <TrackList />
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        );
    }
}

export default PlayList;