import NavBar from "../Components/NavBar";
import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapsPage(props) { 
   
    const [ currentPosition, setCurrentPosition ] = useState({});

    const mapStyles = {
        width: '100%',
        height: '50%'
      };

    const success = position => {
        const currentPosition = {
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    return (
        <div className="MapsPage">
            <nav>
              <NavBar />
            </nav>
            <Map
            google={props.google}
            zoom={12}
            style={mapStyles}
            center={
                {
                    lat: currentPosition.lat,
                    lng: currentPosition.lng
                }
            }
            onGoogleApiLoaded={({ map, maps }) => this.renderMarker(map, maps)}
            >
              <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'MY HOUSE'}
              position={{lat: currentPosition.lat, lng: currentPosition.lng}} />
            </Map>
            
      </div>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBpGBzv1hYJIzC4MQto84nI9CBPQIqxoCU"
  })(MapsPage);
