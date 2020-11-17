import React, { Component } from 'react';

class Competitor extends Component {
  render() {
    return <div className="Competitor">
        <a href={ this.props.url } target="_blank" rel="noreferrer">
          <img className="Photo" src={ this.props.photo } alt={ `${ this.props.name }'s Twitter profile` }></img>
        </a>
        <span className="Points"> { this.props.points } </span>
        <span className="Name"> { this.props.name } </span>
        <span className="Role"> { this.props.role } </span>
        <span> { this.props.description } </span>
    </div>;
  }
}

export default Competitor;