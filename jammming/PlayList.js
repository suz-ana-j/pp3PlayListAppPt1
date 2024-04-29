import React from 'react';
import TrackList from './TrackList';

class PlayList extends 
React.Component {
    render() {
        return (
            <div className="PlayList">
                <input 
            value={this.props.playlistName}
            onChange={this.props.onNameChange}
            /> 
                <h2>Playlist</h2>
                <TrackList 
            tracks={this.props.playlistTracks}
            onRemove={this.props.onRemove}
                        isRemoval={true}
                />
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        );
    }
}

export default PlayList;