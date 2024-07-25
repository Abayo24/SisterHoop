import React, { useEffect, useState} from "react";
import "../styles/Member.css";
import bannerImage from "../assets/banner.png";
import umoja from "../assets/umoja.jpg";
import nyayo from "../assets/nyayo.jpg";
import down from "../assets/down court.jpg";
// import player1 from "../assets/player1.jpg";
// import player2 from "../assets/player2.jpg";
// import player3 from "../assets/player3.jpg";
// import player4 from "../assets/player4.jpg";
import customMarker from "../assets/maps-and-flags.png";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const containerStyle = {
  width: "90%",
  height: "90vh",
  borderRadius: "500px",
  overflow: "hidden", // Ensures the content is clipped within the rounded border
};

const defaultCenter = {
  lat: -1.286389,
  lng: 36.817223,
};

const knownCourts = [
  { id: 1, name: "Langata Down Basketball Court", lat: -1.321711879037903, lng: 36.784678814082774 },
  { id: 2, name: "Ulinzi Sports Complex Langata", lat: -1.3294748018625413, lng: 36.790138023881475 },
  { id: 3, name: "YMCA Shauri Moyo", lat: -1.2904880746874308, lng: 36.850845813628545 },
  { id: 4, name: "Nyayo Stadium Indoor Arena", lat: -1.3044467036280365, lng: 36.82556800853975 },
  { id: 5, name: "Strathmore University Basketball Court", lat: -1.3094316735996987, lng: 36.80972979780946 },
  { id: 6, name: "Umoja 2 Basketball Court", lat: -1.2810017646922618, lng: 36.90098504480579 },
  { id: 7, name: "Diwopa Basketball Court", lat: -1.2696001451450514, lng: 36.91455870716155 },
  { id: 8, name: "Kenyatta Sports Ground", lat: -0.09652686849786905, lng:  34.756828490142496 },
  { id: 9, name: "Umama Play Ground", lat: -1.1834370630495277, lng:  37.09584823366684 },
  { id: 10, name: "Kapsengere Basketball Court", lat: -0.01318807236429519, lng: 34.75438125582311 },
  // Add more courts as needed
];

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

const customIcon = L.icon({
  iconUrl: customMarker,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});

const MapFlyTo = ({ locationLat, locationLng }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([locationLat, locationLng], 13);
  }, [locationLat, locationLng, map]);

  return null;
};

const Member = () => {
  const [filteredCourts, setFilteredCourts] = useState([]);
  const [location, setLocation] = useState('');
  const [locationLat, setLocationLat] = useState(defaultCenter.lat);
  const [locationLng, setLocationLng] = useState(defaultCenter.lng);

  useEffect(() => {
    const nearbyCourts = knownCourts.filter((court) =>
      calculateDistance(locationLat, locationLng, court.lat, court.lng) <= 10
    );
    setFilteredCourts(nearbyCourts);
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
    <div className="member container-fluid">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-6 justify-content-center">
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
          <div className="col-md-6 p-2">
            <MapContainer
              center={[locationLat, locationLng]}
              zoom={13}
              style={containerStyle}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapFlyTo locationLat={locationLat} locationLng={locationLng} />
              {filteredCourts.map((court) => (
                <Marker key={court.id} position={[court.lat, court.lng]} icon={customIcon}>
                  <Popup>{court.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>

      {/******************POPULAR COURTS******************* */}
      <div className="container-fluid align-items-center w-75">
        <h1 className="p-2 mt-3 text-center fw-bold">Popular Basketball Courts</h1>
        <div className="row row-cols-sm-3 g-4 p-4">
          <div className="col">
            <div className="card h-100">
              <img src={umoja} alt="court" className="card-img-top img-fluid h-50"/>
              <div className="card-body">
                <h5 className="card-title text-center">Umoja 2</h5>
                <div className="card-text">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: Nairobi, Kenya</li>
                    <li className="list-group-item">Description: Full Court</li>
                    <li className="list-group-item">Availability: Available</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-dark text-center">View Court Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={nyayo} alt="court" className="card-img-top img-fluid h-50" />
              <div className="card-body">
                <h5 className="card-title text-center">Nyayo Stadium</h5>
                <div className="card-text">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: Nairobi, Kenya</li>
                    <li className="list-group-item">Description: Full Court</li>
                    <li className="list-group-item">Availability: Available</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-dark text-center">View Court Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={down} alt="court" className="card-img-top img-fluid h-50" />
              <div className="card-body">
                <h5 className="card-title text-center">Down Court</h5>
                <div className="card-text">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: Nairobi, Kenya</li>
                    <li className="list-group-item">Description: Full Court</li>
                    <li className="list-group-item">Availability: Available</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-dark text-center">View Court Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/******************FEATURED PLAYERS******************* */}

      <div className="container-fluid align-items-center w-75">
      <h1 className="p-2 mt-3 text-center fw-bold">Featured Players</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        <div className="col text-center">
          <div className="">
            <img src="" className="img-thumbnail player img-fluid" alt="Player 1"/>
            <p className="mt-2">Description for Player 1</p>
          </div>
        </div>
        <div className="col text-center">
          <div className="">
            <img src="" className="img-thumbnail player img-fluid" alt="Player 2"/>
            <p className="mt-2">Description for Player 2</p>
          </div>
        </div>
        <div className="col text-center">
          <div className="">
            <img src="" className="img-thumbnail player img-fluid" alt="Player 3"/>
            <p className="mt-2">Description for Player 3</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Member;
