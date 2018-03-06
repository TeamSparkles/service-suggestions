import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SuggestionsList from './components/SuggestionsList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
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

    axios.get(`http://localhost:4001/api/event/${eventId}`)
      .then((res) => {
        this.setState({category: res.data.category, id: eventId })
        this.getSuggestions();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getSuggestions() {
    axios.get('http://localhost:4001/suggestions', {
        params: {
          id: this.state.id,
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
      <div className="event-suggestions-container">
        <div><h3>More Events</h3></div>
        <SuggestionsList events={this.state.events}/>
      </div>
    );
  }
}

window.Suggestions = App;
ReactDOM.render(<App />, document.getElementById('app'));