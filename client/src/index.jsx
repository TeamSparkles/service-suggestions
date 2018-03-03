import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.getSuggestions();
  }

  getSuggestions() {
    const url = window.location.href;
    const urlEnd = url.split('/event/')[1];
    const eventId = urlEnd.split('/')[0];

    axios.get(`/api/event/${eventId}`)
      .then((res) => {
        this.setState({ events: res.data });
        console.log(this.state.events)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));