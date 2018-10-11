import React, { Component } from 'react';
import Station from './station';
import Moreinfo from './moreinfo';

class StationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stationListData:[],
            stationData:[],
            moreInfo: {},
            isShowMoreData:false
        };

        this.handelShowBikeData  = this.handelShowBikeData.bind(this);
    }

    /** MAKING API CALLS TO FETCH DATA **/
    componentDidMount() {
        fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
        .then(response =>  response.json())
        .then(resData => {
           this.setState({ stationListData: resData.data.stations }, function(){
                fetch('https://gbfs.citibikenyc.com/gbfs/en/station_status.json')
                .then(response =>  response.json())
                .then(resData => {
                    this.setState({ stationData: resData.data.stations }, function(){
                        this.mergeApiData();
                    }); 
                });
           }); 
        });  
    }

    /** MERGING DATA OF TWO API CALL INTO A SINGLE DATA UNIT  **/
    mergeApiData(){
        let newArr = [];
        for(let i=0; i<this.state.stationListData.length; i++){
            for(let j=0; j<this.state.stationData.length; j++){
                if(this.state.stationListData[i].station_id === this.state.stationData[j].station_id) {
                    let newObj = Object.assign(this.state.stationListData[i], this.state.stationData[j])
                    newArr.push(newObj);
                }
            }
            
        }
        this.setState({stationListData: newArr});
    }


    /** HALDELING SHOW MORE INFO EVENT **/ 
    handelShowBikeData(link) {
        //console.log(link);
        this.setState({isShowMoreData: true, moreInfo: link});
        
    }
    
    addDynamicClass(link) {
        console.log("get class");
    }

    render() {

    return (
        <div>
        <div style={{height: "300px", overflow: "scroll", background: "#454545"}}>
           <ul>
            {this.state && this.state.stationListData && this.state.stationListData.map(link =>
                <Station key={link.station_id} data={link} showMoreDetails ={this.handelShowBikeData} getClass ={this.addDynamicClass}/>
               
            )}
           </ul>
        </div>
        {(this.state.isShowMoreData)? <Moreinfo data={this.state.moreInfo}/> : <h1>hide</h1>}
        </div>
    );
  }
}
export default StationList;
