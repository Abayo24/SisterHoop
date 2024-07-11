import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import bannerImage from "../assets/banner.png";
import courtImage from "../assets/lady1.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultCenter = {
  lat: -1.286389,
  lng: 36.817223,
};

const Home = () => {
  const [courts, setCourts] = useState([]);
  const [location, setLocation] = useState('');
  const [locationLat, setLocationLat] = useState(defaultCenter.lat);
  const [locationLng, setLocationLng] = useState(defaultCenter.lng);

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch(
          `https://overpass-api.de/api/interpreter?data=[out:json];node["leisure"="pitch"]["sport"="basketball"](around:5000,${locationLat},${locationLng});out body;`
        );
        const data = await response.json();
        setCourts(data.elements);
      } catch (error) {
        console.error('Error fetching courts:', error);
      }
    };

    fetchCourts();
  }, [locationLat, locationLng]);

  const handleSearch = async () => {
    if (location.trim() !== '') {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`
        );
        const data = await response.json();

        if (data.length > 0) {
          const { lat, lon } = data[0];
          setLocationLat(parseFloat(lat));
          setLocationLng(parseFloat(lon));
        } else {
          console.log('Location not found');
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    }
  };

  return (
    <div className="home container-fluid">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-6">
            <img src={bannerImage} alt="Banner" className="banner-image" />
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control me-2 w-25"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search for a nearby court"
                aria-label="Search for a nearby court"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <MapContainer
              center={[locationLat, locationLng]}
              zoom={13}
              style={containerStyle}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {courts.map((court) => (
                <Marker key={court.id} position={[court.lat, court.lon]}>
                  <Popup>
                    Basketball Court
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>

      {/******************POPULAR COURTS******************* */}
      <div
        className="container-fluid align-items-center"
        style={{ width: "1000px" }}
      >
        <h1 className="p-2 mt-3 text-center fw-bold">Popular Courts</h1>
        <div className="row row-cols-1 row-cols-sm-3 g-4 p-4">
          <div className="col">
            <div className="card">
              <img src={courtImage} alt="court" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={courtImage} alt="court" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={courtImage} alt="court" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
