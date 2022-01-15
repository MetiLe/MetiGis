import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Popup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        }
      }
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        fetch('http://localhost:3000/api/rating',{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            bod: JSON.stringify({
                userID: '61e1cd57fcc3c522e7494c8c',
                placeID: this.props.id,
                rating: nextValue
            })
        })
        .then(res => {
            return res.json();
        }).then(data => {console.log(data)})
        .catch(err =>{console.log(err)})
     
        //61e1cd57fcc3c522e7494c8c
      }
      render(){
        const { rating } = this.state;
          return this.props.trigger? <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
      />:""
      }

}

export default Popup