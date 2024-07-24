# SisterHoop

![banner](https://github.com/user-attachments/assets/565b0852-1616-43dd-b26a-096a4d6db5cd)

SisterHoop is a platform designed to connect female basketball players, providing a safe and encouraging environment where they can find local courts, join pickup games, and interact with other female athletes. The project was born out of my personal experience as a female basketball enthusiast who often felt sidelined in a predominantly male environment. SisterHoop is built to ensure that women can enjoy basketball without feeling overshadowed or excluded.

# 🛠️ Installation
To set up the project locally, follow these steps:

## Clone the Repository:
Copy code
git clone https://github.com/yourusername/sisterhoop.git
Navigate to the Project Directory:

## Install Dependencies:
### For frontend:
cd sisterhoop
yarn add
react - The core library for building user interfaces.
react-dom - Provides DOM-specific methods that can be used at the top level of your app.
react-router-dom - Declarative routing for React.js.
bootstrap - CSS framework for responsive design.
react-bootstrap - Bootstrap components for React.
leaflet - Library for interactive maps.
react-leaflet - React wrapper for Leaflet.

### For backend:
cd ../backend
yarn add
axios - Promise-based HTTP client for making requests to the backend.
dotenv - Module to load environment variables from a .env file.
mysql2 - MySQL client for Node.js.
cors - Package to enable Cross-Origin Resource Sharing.
nodemon - Tool for automatically restarting the Node.js application when file changes are detected.
eslint - Linter for JavaScript code.
react-scripts - Scripts and configuration used by Create React App.
Set Up Environment Variables:
Create a .env file in the backend directory and add your environment variables (e.g., database connection strings, API keys).

## Run Migrations:
cd ../backend
npx sequelize-cli db:migrate

## Start the Application:
### Frontend:
cd sisterhood
yarn start
### Backend:
cd ../backend
yarn start

## 🚀 Usage
Once the application is running:

Open the Frontend: Navigate to http://localhost:3000 in your browser to access the application.

## Explore Features:

Map Integration: Search for and view basketball courts with interactive markers.
User Profiles: Create and manage profiles to connect with other players.
Game Scheduling: Organize and join pickup games based on your location and preferences.

## 🤝 Contributing
Contributions are welcome! Please follow these steps to contribute:

### Fork the Repository:
Click the "Fork" button on the top-right of the repository page.

#### Clone Your Fork:
Copy code
git clone https://github.com/yourusername/sisterhoop.git

#### Create a New Branch:
git checkout -b feature/new-feature

#### Make Your Changes and Commit:
Copy code
git add .
git commit -m "Add new feature"

#### Push Your Changes:
Copy code
git push origin feature/new-feature

#### Create a Pull Request:
Go to the repository on GitHub and create a pull request with a detailed description of your changes.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

## 🖼️ Screenshots
![sisterhood1](https://github.com/user-attachments/assets/385f69fc-ec8c-47b0-8408-0a3d5bfb1f35)
![court details](https://github.com/user-attachments/assets/7e6eef76-593b-4da9-b28c-fa6fe394b514)

## 📖 Technical Details
### Backend:

Node.js & Express: Chosen for its non-blocking I/O and real-time capabilities, ideal for the dynamic nature of our app.
MySQL: Selected for its ACID compliance and strong consistency, suitable for structured data like user profiles and game schedules.
Frontend:

React: Used for building a dynamic and interactive user interface.
Leaflet: Integrated with OpenStreetMap to provide interactive and customizable map features.
Technical Challenge:
Early on, I faced challenges with integrating Google Maps API due to billing issues. This led to switching to OpenStreetMap, which required adapting our application to handle asynchronous data and dynamic markers. Despite the hurdles, the switch allowed for a more flexible and cost-effective solution.

## 💬 Personal Story
SisterHoop emerged from my own experience as a female basketball player often overshadowed in a male-dominated environment. Each visit to the court where I was either alone or with just one other female sparked the idea to create a platform where women could feel more included and supported. Building SisterHoop as a solo developer was a journey through frontend and backend development, database management, and more. It solidified my passion for creating user-friendly applications and inspired me to tackle future projects with confidence.

## 👩‍💻 Author
[Abayo Akinyi - LinkedIn](https://www.youtube.com/watch?v=XyHkoKwPtaw)
## 🌐 Deployed Project
[SisterHoop Live](https://abayo24.github.io/SisterHoop/)
## 📝 Blog Article
[Final Project Blog Article](https://medium.com/@akinyi.dev/building-sisterhoop-bridging-the-gap-for-female-basketball-players-caccc9c509a2)

