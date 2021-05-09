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

  const callbackArray = [
    { name: 'Papatoetoe Z', price: 2.10 , lat: 10, long: 10},
    { name: 'Papatoetoe Gas', price: 1.90 , lat: 1, long: 1},
    { name: 'Papatoetoe Gull', price: 1.85 , lat: 4, long: 4},
    { name: 'Papatoetoe Mobile', price: 2.10 , lat: 5, long: 5},
    { name: 'Otahuhu Mobil', price: 2.05 , lat: 3, long: 3},
    { name: 'Otahuhu Caltex', price: 2.00 , lat: 7, long: 7},
    { name: 'Otara Gas', price: 1.95 , lat: 2, long: 2},
    { name: 'Otara Mobil', price: 1.80 , lat: 8, long: 8},
    { name: 'Manukau Mobil', price: 2.30 , lat: 9, long: 9},
    { name: 'Manukau Z', price: 2.45 , lat: 6, long: 6}
  ];
  
  useEffect(() => {
    axios.get("http://localhost:3001/api/stations")
  .then(res => setList(res.data));
  }, []);

   useEffect(() => {
    console.log("original : ",{ listStation });
    navigator.geolocation.getCurrentPosition(success);
  }, [listStation]);

 useEffect(() => {
    const stationPosition = {
      lat: listStation[0].address[2], 
      lng: listStation[0].address[3]
    }
    var minIdx, temp, min_distance, 
    len = listStation.length;

    min_distance = getDistance(currentPosition, stationPosition);
    
    for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
      if(getDistance(currentPosition, stationPosition) <min_distance){
          minIdx = j;
      }
    }
    temp = listStation[i];
    listStation[i] = listStation[minIdx];
    listStation[minIdx] = temp;
    }

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