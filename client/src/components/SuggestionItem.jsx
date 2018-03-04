import React from 'react';

class SuggestionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log
    return (
      <div>
        <img src={this.props.event.photo} height={100} width={100}></img>
        <div>{this.props.event.title}</div>
        <div>{this.props.event.time}</div>
        <div>{this.props.event.location}</div>
        <div>{this.props.event.category}</div>
      </div>
    )
  }
}

export default SuggestionItem;