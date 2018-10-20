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
        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses() {
        axios.get('/api/houses').then( res => {
            this.setState({ houseList: res.data})
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`).then(()=> this.getHouses())
    }

  render() {
    const { houseList } = this.state;

    const result = houseList.map( house => {
        return (
            <div key={house.id}>
                <House
                    house={house}
                    deleteHouse={this.deleteHouse}
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
