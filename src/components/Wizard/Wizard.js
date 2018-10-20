import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        }
        this.createHouse = this.createHouse.bind(this)
    }

    handleNameChange(val) {
        this.setState({name: val})
    }
    handleAddressChange(val) {
        this.setState({address: val})
    }
    handleCityChange(val) {
        this.setState({city: val})
    }
    handleStateChange(val) {
        this.setState({state: val})
    }
    handleZipChange(val) {
        this.setState({zip: val})
    }

    // handleInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     this.setState({[name]: value})
    // }

    createHouse() {
        axios.post( '/api/houses', {house: this.state} ).then()
    }

  render() {
    return (
      <div>
        <input type="text" placeholder="name" onChange={ e => this.handleNameChange(e.target.value)} value={this.state.name}/>
        <input type="text" placeholder="address" onChange={ e => this.handleAddressChange(e.target.value)} value={this.state.address}/>
        <input type="text" placeholder="city" onChange={ e => this.handleCityChange(e.target.value)} value={this.state.city}/>
        <input type="text" placeholder="state" onChange={ e => this.handleStateChange(e.target.value)} value={this.state.state}/>
        <input type="text" placeholder="zipcode" onChange={ e => this.handleZipChange(e.target.value)} value={this.state.zip}/>
        <Link to="/"><button>Cancel</button></Link>
        <Link onClick={this.createHouse}to="/"><button>Add</button></Link>

      </div>
    )
  }
}
