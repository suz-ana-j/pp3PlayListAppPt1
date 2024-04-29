import React from 'react';
import Track from './Track';
import './TrackList.css'

function TrackList({ tracks, onRemoveTrack, onAddTrack }) {
    return (
      <div className="TrackList">
        {tracks.map(track => (
          <div className="Track" key={track.id}>
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
            <button className="Track-action" onClick={() => onAddTrack(track)}>+</button>
            <button className="Track-action" onClick={() => onRemoveTrack(track)}>−</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default TrackList; 
