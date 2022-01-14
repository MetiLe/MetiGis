import { TiLocation } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
const RecommendList = ({ places }) => {
    return <div className="destinations">


        {places && places.map((place) => {

            return (
                <div className={`destination ${place.category}`}>
                    <img src={require(`../assets/${place.image[0]}`)} alt="" />
                    <h3>{place.name}</h3>

                    <p> <TiLocation className='icon' /> <span className='subcity'>{place.subcity}</span></p>
                    <p>{place.descriotion}</p>
                    <div className="info">
                        <div className="services">
                            <AiFillStar className='star' />
                            <AiFillStar className='star' />
                            <AiFillStar className='star' />
                            <AiFillStar className='star' />
                            <AiFillStar className='star' />
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
export default RecommendList
