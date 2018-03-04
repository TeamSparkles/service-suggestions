import React from 'react';
import Slider from 'react-slick';
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

    const settings =  {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    return (
      <div>
        {this.props.events.length > 0 && <Slider {...settings}>
          {this.props.events.map((item, index) => {
            return  <div key={index}> <SuggestionItem event={item} /> </div>
          })}
        </Slider>}
      </div>
    )
  }
}

export default SuggestionsList;