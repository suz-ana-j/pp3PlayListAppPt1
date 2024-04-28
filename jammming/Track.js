import React from 'react';

class Track extends 
React.Component {
    render() {
        return (
            <div className="Track">
                
                <h3>{this.props.name}</h3>
                <p>{this.props.artist} | {this.props.album}</p>
                <button className="Track-action">+</button>
            </div>
        );
    }
}

export default Track;