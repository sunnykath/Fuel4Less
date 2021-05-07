import NavBar from "../Components/NavBar";
import React, { Component, useState, useEffect } from 'react';
import { Map, Marker, GoogleMap, withScriptjs, withGoogleMap, GoogleApiWrapper, HandleGoogleMap } from "google-maps-react";

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
            />
            <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: currentPosition.lat, lng: currentPosition.lng}} />
      </div>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBpGBzv1hYJIzC4MQto84nI9CBPQIqxoCU"
  })(MapsPage);
