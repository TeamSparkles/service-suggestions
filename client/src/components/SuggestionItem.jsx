import React from 'react';
import moment from 'moment';

class SuggestionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var time = moment.parseZone(this.props.event.time).local().format('MMMM Do YYYY @ h:mm a')
    var title = this.props.event.title.length > 55 ? this.props.event.title.substring(0,55) + '...' : this.props.event.title;
    var category = this.props.event.category.toLowerCase();
    return (
      <div className="event-suggestion-container">
        <div className="event-photo"><img src={this.props.event.photo} height={140.63} width={250}></img></div>
        <div className="event-title">{title}</div>
        <div className="event-time">{time}</div>
        <div className="event-location">{this.props.event.location}</div>
        <div className="event-category">#{category}</div>
      </div>
    )
  }
}

export default SuggestionItem;