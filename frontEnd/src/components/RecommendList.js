import { TiLocation } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import React, { Component } from 'react';
import Popup from './popup'
// import StarRatingComponent from 'react-star-rating-component';





class RecommendList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            buttonpopup:true,
            id:''
        }
      }
    
    //   componentWillMount(){

    //   }
    render(){
        
        return <div className="destinations">

            {this.props.places && this.props.places.map((place) => {
                return (
                    <div className={`destination ${place.category}`}>
                        <img src={require(`../assets/${place.image[0]}`)} alt="" />
                        <h3>{place.name}</h3>
                        <p> <TiLocation className='icon' /> <span className='subcity'>{place.subcity}</span></p>
                        <p>{place.descriotion}</p>
                        <div className="info">
                            <div className="services">
                                {/* <button onClick= {()=>this.pop()}>Rate</button> */}
                                <Popup trigger={this.state.buttonpopup} id={place._id}/>
                                {/* {place.rating.length == 0? <p>0</p>: place.rating.map((rate, i)=>{

                                })} */}
                            </div>
                            {/* <h4>{destination.cost}</h4> */}
                        </div>
                        {/* <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
                </div> */}
                    </div>
                );
            })}

        </div>
    }

   
}
export default RecommendList
