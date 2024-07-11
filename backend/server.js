const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use(express.json()); // Corrected middleware usage

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abayo",
  database: "signup",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.post("/signup", (req, res) => {
  console.log('Request received at /signup with data:', req.body);
  const sql =
    "INSERT INTO users (`name`, `phoneNo`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.phoneNo,
    req.body.email,
    req.body.password
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?"; // Corrected table name
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json("Error");
    }
    if (data.length > 0) {
        console.log('Login successful');
      return res.json("Success");
    } else {
        console.log('Login failed');
      return res.json("Failed");
    }
  });
});

// app.get("/api/places", async (req, res) => {
//   const { location, keyword } = req.query;
//   try {
//     const response = await axios.get(
//       "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
//       {
//         params: {
//           location,
//           radius: 5000,
//           keyword,
//           key: process.env.GOOGLE_MAPS_API_KEY,
//         },
//       }
//     );
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching places:", error);
//     res.status(500).send("Server error");
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
