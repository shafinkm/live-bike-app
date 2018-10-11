import React, { Component } from 'react';

class Moreinfo extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log(this.props.data);
        return (
            <div>
                <div style={{display:"inline-block", padding:"15px", background:"#dedede"}}>
                    Location
                    <ul>
                        <li>Station Id: {this.props.data.station_id}</li>
                        <li>Latitude: {this.props.data.lat}</li>
                        <li>Longitude: {this.props.data.lon}</li>
                    </ul>
                </div>
                <div style={{display:"inline-block", padding:"15px", background:"#dedede"}}>
                    Bike Details
                    <ul>
                        <li>Capacity: {this.props.data.capacity}</li>
                        <li>Available: {this.props.data.num_bikes_available}({Math.round(this.props.data.num_bikes_available/this.props.data.capacity *100)})</li>
                        <li>In Transit: {(this.props.data.capacity - this.props.data.num_bikes_available)}</li>
                    </ul>
                </div>
                <div style={{display:"inline-block", padding:"15px", background:"#dedede"}}>
                    Availibality
                    <ul>
                        <li>Renting?: {(this.props.data.is_renting === 1)? "Yes" : "No"}</li>
                        <li>Last Reported: {this.props.data.last_reported}</li>
                        <li>Bike Disabled: {this.props.data.num_bikes_disabled}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Moreinfo;
