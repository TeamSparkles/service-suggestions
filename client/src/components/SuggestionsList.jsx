import React from 'react';
import SuggestionItem from './SuggestionItem.jsx'

class SuggestionsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var output = [];
    for (var i = 0; i < this.props.events.length; i++) {
      output.push(<SuggestionItem event={this.props.events[i]} key={i}/>)
    }
    return (
      <div>
        <div>SuggestionsList</div>
        {output}
      </div>
    )
  }
}

export default SuggestionsList;