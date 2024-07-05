import React, { useState } from 'react';
import '../styles/Home.css';
import bannerImage from '../assets/banner.png';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '60%',
    height: '400px',
  };
  
  const defaultCenter = {
    lat: -1.286389,
    lng: 36.817223,
  };

const Home = () => {
    const [location, setLocation] = useState('');
    const [courts, setCourts] = useState([]);
    const [center, setCenter] = useState(defaultCenter);

    const handleSearch = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/places', {
            params: {
              location,
              keyword: 'basketball court',
            },
          });
          setCourts(response.data.results);
          const [lat, lng] = location.split(',');
          setCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
    return (
        <div className='home'>
            <img src={bannerImage} alt='Banner' className='banner-image' />
            <div className='search-bar'>
                <input type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='search for a nearby court' />
                <button onClick={handleSearch}>Search</button>
            </div>
            <LoadScript googleMapsApiKey='AIzaSyCNaeZIbKVQNk3AgwZdzu_Th-ADVqHXzZ8'>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                    {courts.map((court) => (
                        <Marker
                            key={court.place_id}
                            position={{
                                lat: court.geometry.location.lat,
                                lng: court.geometry.location.lng,
                            }}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Home