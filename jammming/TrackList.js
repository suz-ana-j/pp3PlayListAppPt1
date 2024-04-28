import React from 'react';
import Track from './Track';

class TrackList extends
React.Component {
    render() {
        return (
            <div className="TrackList">
                {/* Map through tracks here and render Track components */}
                <Track />
            </div>
        );
    }
}

export default TrackList;