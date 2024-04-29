import React from 'react';
import TrackList from './TrackList';

class PlayList extends 
React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            newName: props.playlistName
        };
    }

    handleInputChange = (event) => {
        this.setState({ newName: event.target.value });
    };

    handleTitleClick = () => {
        this.setState({ isEditing: true });
    };

    handleTitleBlue = () => {
        this.setState({ isEditing: false });

        this.props.onNameChange(this.state.newName);
    };

    render() {
        return (
            <div className="PlayList">
                {this.state.isEditing ? (
                <input 
           value={this.state.newName}
           onChange={this.handleInputChange}
           onBlur={this.handleTitleBlur}
                        autofocus
            /> 
                ) : (
                <h2 
            onClick={this.handleTitleClick}>{this.props.playlistName}</h2> )}
                <TrackList 
            tracks={this.props.playlistTracks}
            onRemoveTrack={this.props.onRemoveTrack}
                    
                />
                <button className="Playlist-save" onClick={onSave}>Save to Spotify</button>
                <button className="Playlist-remove" onClick={onRemovePlaylist}>Remove Playlist</button>
            </div>
        );
    }
}

export default PlayList;