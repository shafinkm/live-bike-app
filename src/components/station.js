import React, { Component } from 'react';

class Station extends Component {
  constructor(props){
    super(props);
  }  
  
  render() {
    return (
      <li key={this.props.data.station_id} onClick={() => this.props.showMoreDetails(this.props.data)} className={((Math.round(this.props.data.num_bikes_available/this.props.data.capacity) * 100) >= 50)? "blockgreen" : ((Math.round(this.props.data.num_bikes_available/this.props.data.capacity) * 100) == 0)? "blockorange": "blockorange"}>
        <div><b>Station Name:</b> {this.props.data.name}</div>
        <div><b>Capacity:</b> {this.props.data.capacity}</div>
      </li> 
    );
  }
}

export default Station;
