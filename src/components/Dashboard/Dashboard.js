import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houseList: []
        }
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses() {
        axios.get('/api/houses').then( res => {
            this.setState({ houseList: res.data})
        })
    }

    // deletehouse() {
    //     axios.delete(`/api/house${this.state.houseList.id}`)
    // }

  render() {
    const { houseList } = this.state;

    const result = houseList.map( house => {
        return (
            <div key={house.name}>
                <House
                    house={house}
                    // name={house.name}
                    // address={house.address}
                    // city={house.city}
                    // state={house.state}
                    // zip={house.zip}    
                />
            </div>
        )
    })
    return (
      <div>
        Dashboard
        {result}
        <Link to="/wizard"><button>Add to property</button></Link>
      </div>
    )
  }
}
