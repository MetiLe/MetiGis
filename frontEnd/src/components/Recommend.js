import React, { useState, useEffect } from 'react'
import styled from "styled-components";



function Recommend() {

  // const places = [
  //   {
  //     image: Destination1,
  //     name: "Entoto",
  //     subcity: "Shiro meda",
  //     // cost: "38,800",
  //     // duration: "Approx 2 night trip",
  //   },
  // ]



  const [places, setPlaces] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/place')
      .then(res => {
        return res.json();
      }).then(data => {
        setPlaces(data.data)
        console.log(data.data)
      })
  }, [])

  return (
    <Section id="recommend">
      <div className="title">
        <h1>Recommended Places</h1>
        <br />
        <br />
        <br />

      </div>
      <div className="destinations">

        {places && places.map((place) => {
          return (
            <div className="destination">
              <img src={require(`../assets/${place.image[0]}`)} alt="" />
              {/* <p>{place.image[0]}</p> */}
              <h3>{place.name}</h3>
              <p>{place.subcity}</p>
              <p>{place.descriotion}</p>
              <div className="info">
                <div className="services">
                  <p>Rating ui</p>
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
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;


export default Recommend
