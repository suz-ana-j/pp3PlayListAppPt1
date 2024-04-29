import React from 'react';
import Track from './Track';

class TrackList extends
React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => (
                    <Track
                        key={track.id}
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                onAdd={this.props.onAdd}
                isRemoval={this.props.isRemoval}
                    />
                ))}
                
            </div>
        );
    }
}

export default TrackList;