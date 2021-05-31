import NavBar from "../Components/NavBar";
import MapComponent from "../Components/MapComponent";
import ListComponent from "../Components/ListComponent";
import Box from '@material-ui/core/Box';
import axios from 'axios';
import React, { useEffect, useState } from "react";
export default function MapPage() {
  
  const initStationAdress = ["104 Fanshawe Street", "Auckland", -36.84602, 174.75918, 1010];
  const initStationAmenities = [true, false, false];
  const initListStation =[
      {address: initStationAdress, amenities: initStationAmenities}
    ]
  const [listStation, setList] = useState(initListStation);
  const [ currentPosition, setCurrentPosition ] = useState({});

  //let sortedStations = [];
  useEffect(() => {
    axios.get("http://localhost:3001/api/stations")
  .then(res => setList(res.data));
  }, []);

   useEffect(() => {
    console.log("original : ",{ listStation });
    navigator.geolocation.getCurrentPosition(success);
  }, [listStation]);

 useEffect(() => {
    var len = listStation.length;
        
    //sortedStations = listStation;
    let distance = -1;
    // get distances 
    for (var i = 0; i < len; i++)
    {
      let temp = {
        lat: listStation[i].address[2],
        lng: listStation[i].address[3]
      }
      distance = getDistance(currentPosition, temp);
      listStation[i] = {...listStation[i], distance: distance}
    }

    // sort distances
    listStation.sort(function(a, b){
      return a.distance-b.distance
    })

    console.log("Modified : ", listStation);
  }, [listStation]);  
  
  var rad = function(x) {
    return x * Math.PI / 180;
  };
  
  var getDistance = function(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    
    return d;
  };


const success = position => {
  const currentPosition = {
    lat: position.coords.latitude, 
    lng: position.coords.longitude
  }
  setCurrentPosition(currentPosition);
};

  return(
    <div className="MapsPage">
        <nav>
            <NavBar />
        </nav>
        
        <h2 style={{color: "red"}}> Closest Cheap Petrol Stations</h2>
        <Box
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        p={1}
      >
          <Box p={1} flexGrow={1}>
              <MapComponent/>
          </Box>
            
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        p={1}
        bottom="true"
      >
          <Box p={1} flexGrow={1}>
               <ListComponent items = {listStation}/>
          </Box>
           
        </Box>

    </div>
    
);
}