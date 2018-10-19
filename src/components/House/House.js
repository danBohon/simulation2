import React from 'react'

export default function House(props) {
  return (
    <div>
      <div>Name: {props.house.name}</div>
      <div>address: {props.house.address}</div>
      <div>city: {props.house.city}</div>
      <div>state: {props.house.state}</div>
      <div>zip: {props.house.zip}</div>
      <button>Delete</button>
    </div>
  )
}
