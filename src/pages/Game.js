import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns"; // Import date-fns
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Game() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchAllGames = async () => {
      try {
        const res = await axios.get("http://localhost:8081/games");
        console.log("Fetched games:", res.data);
        setGames(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllGames();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/games/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-start mt-4">
        <Link to="/SisterHoop/addGame" className="btn btn-dark">
          Add New Game
        </Link>
      </div>
      <h1 className="text-center mt-4">Games</h1>
      <div className="d-flex justify-content-center">
        <div className="Games w-75">
          {games.length === 0 ? (
            <div className="alert alert-info text-center">
              No games available
            </div>
          ) : (
            <table className="table table-bordered table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Game ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Court</th>
                  <th scope="col">Game</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {games.map((game) => (
                  <tr key={game.id}>
                    <th scope="row">{game.id}</th>
                    <td>{format(new Date(game.date), "yyyy-MM-dd")}</td>{" "}
                    {/* Format the date */}
                    <td>{game.time}</td>
                    <td>{game.court}</td>
                    <td>{game.game_type}</td>
                    <td>
                      <button
                        className="btn btn-outline-dark m-2"
                        onClick={() => handleDelete(game.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/SisterHoop/update/${game.id}`}
                        className="btn btn-dark"
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
