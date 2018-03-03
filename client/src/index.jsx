import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      events: []
    }
  }

  componentDidMount() {
    this.getCategory();
  }

  getCategory() {
    const url = window.location.href;
    const urlEnd = url.split('/event/')[1];
    const eventId = urlEnd.split('/')[0];

    axios.get(`/api/event/${eventId}`)
      .then((res) => {
        this.setState({category: res.data.category })
        this.getSuggestions();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getSuggestions() {
    axios.get('/suggestions', {
        params: {
          category: this.state.category
        }
      })
      .then((res) => {
        this.setState({ events: res.data });
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