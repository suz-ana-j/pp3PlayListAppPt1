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
            onRemove={this.props.onRemove}
                        isRemoval={true}
                />
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        );
    }
}

export default PlayList;