import React from 'react';

class SuggestionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{JSON.stringify(this.props.event)}</div>
    )
  }
}

export default SuggestionItem;