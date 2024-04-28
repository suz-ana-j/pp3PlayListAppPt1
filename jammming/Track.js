import React from 'react';

class Track extends 
React.Component {
    render() {
        return (
            <div className="Track">
                {/* Track Information */}
                <h3>Title</h3>
                <p>Artist | Album</p>
                <button className="Track-action">+</button>
            </div>
        );
    }
}

export default Track;