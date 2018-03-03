import React from 'react';
import SuggestionItem from './SuggestionItem.jsx'

class SuggestionsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>SuggestionsList</div>
        <SuggestionItem />
      </div>
    )
  }
}

export default SuggestionsList;