import React, { useState } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import "mapbox-gl/dist/mapbox-gl.css";

function MapContainer({searchResult}) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates =  searchResult.map(res=>({
    longitude: res.long,
    latitude: res.lat,
  }))

  const geolib = require('geolib');

  const center =  geolib.getCenter(coordinates)
  
  const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

  return (

    <Map
    
    {...viewport}
    mapboxAccessToken="pk.eyJ1Ijoic29tZS1qdW5pb3ItZGV2ZWxvcGVyIiwiYSI6ImNsYnkzZWM5ZDBjd2gzcXBpaTNucTd2Z2wifQ.53AwX15zK6RuJx1qQn_aCg"
    mapStyle="mapbox://styles/some-junior-developer/clby3q757000h14s4347kvp38"
    onClick={(res)=>setViewport(res)}
    //onMove={(res)=>setViewport(res)}
    >
      {searchResult.map((res)=>(
        <div key={res.long}>
          <Marker
          onClick={()=>setSelectedLocation(res)}
          longitude={res.long} latitude={res.lat}
          offsetTop={-10}
          offsetLeft={-20}
          
          >
   
          </Marker>
          {selectedLocation.long == res.long ? (
              <Popup
              onClose={()=>setSelectedLocation({})}
              latitude={res.lat}
              longitude={res.long}
              closeOnClick={true}
              >{res.title}</Popup>
          ): (false)}
        </div>
      ))}
    </Map>

    
     
   
  )
}

export default MapContainer