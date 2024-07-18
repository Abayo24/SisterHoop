const express = require("express");
const jwt = require('jsonwebtoken');
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

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
  const sql = "INSERT INTO users (`name`, `phoneNo`, `email`, `password`) VALUES (?)";
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
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json("Error");
    }
    if (data.length > 0) {
      // User authenticated, generate a JWT
      const token = jwt.sign({ id: data[0].id, email: data[0].email }, JWT_SECRET, { expiresIn: '1h' });
      console.log('Login successful');
      return res.json({ token });
    } else {
      console.log('Login failed');
      return res.status(401).json("Invalid email or password");
    }
  });
});

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json("Invalid Token");
  }
  return next();
};

// Example of a protected route
app.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
