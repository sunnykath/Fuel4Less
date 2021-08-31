import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapComponent(props) { 
   
    const [ currentPosition, setCurrentPosition ] = useState({});

    const mapStyles = {
        width: '100%',
        height: '100%'
      };

    const success = position => {
        const currentPosition = {
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        }
        console.log(currentPosition.lat, currentPosition.lng);

        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    return (
        <div className="MapsPage" style={{ position: 'relative', width: '80w', height: '50vh' }}>
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
    apiKey: process.env.googleAPI
  })(MapComponent);