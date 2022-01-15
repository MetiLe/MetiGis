// import React, { useEffect } from 'react'
import React, { Component } from 'react';
import styled from "styled-components";
import RecommendList from './RecommendList';





class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      places: [],
      toggle: [],
      cat: "",
      packages: [
        "Park",
        "Museum",
        "Other",
      ]
    }
  }




  // const [active, setActive] = useState(1);
  // const [toggle, setToggle] = useState();
  // const [places, setPlaces] = useState(null);

  componentWillMount() {
    fetch('http://localhost:3000/api/place')
      .then(res => {
        return res.json();
      }).then(data => {
        const arr = []
        data.data.map(place => {
          if (place.category === 'Park') {
            arr.push(place)
            this.setState({
              toggle: arr
            })
          }
        })

        this.setState({
          places: data.data
        })
        console.log(this.state.places)
        console.log(this.state.packages)
      })
  }


  render() {
    return (
      <Section id="recommend">

        <div className="title">
          <h1>Recommended Places</h1>
          <br />
          <br />
          <br />

        </div>


        <div className="packages">

          <ul>

            {this.state.packages.map((pkg, index) => {
              return <li
                key={index}
                className={this.state.active === index + 1 ? "active" : ""}

                onClick={() => this.display(pkg, index)}
              >
                {pkg}
              </li>

            })}
          </ul>
        </div>


        <RecommendList places={this.state.toggle} />



      </Section>
    )

  }
  display(pkg, index) {
    const arr = []
    this.state.places.map(place => {
      if (place.category === pkg) {
        arr.push(place);
      }
    })
    this.setState({
      toggle: arr,
      active: index + 1
    })

  }

}



const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 0.5rem 7rem;
        border-bottom: 0.1rem solid black;
        font-size: 20px;
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
  .subcity{
    font-family: italic;
  }
  .icon{
    color: #0077b6;
    font-size: 24px;
    margin: 10px 0 -5px 0;
  }
  .star{
    color: #FFD700;
    font-size: 24px;
    margin: 10px 0;
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



