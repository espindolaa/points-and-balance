import React, { Component } from 'react';

class Competitor extends Component {
  render() {
    return <div className="Competitor">
        <img className="Photo" src={ this.props.photo }></img>
        <p className="Points"> { this.props.points } </p>
        <span> { this.props.name } </span>
    </div>;
  }
}

export default Competitor;