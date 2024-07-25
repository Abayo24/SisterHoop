import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

function AddGame() {

    const [game, setGame] = useState({
        date: new Date(), // Initialize with the current date
        time: new Date(), // Initialize with the current time
        court: "",
        game_type: "",
    });

    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setGame((prev) => ({
            ...prev,
            date: new Date(date.setHours(prev.time.getHours(), prev.time.getMinutes())),
        }));
    };

    const handleTimeChange = (time) => {
        setGame((prev) => ({
            ...prev,
            time: new Date(prev.date.setHours(time.getHours(), time.getMinutes())),
        }));
    };

    const handleChange = (e) => {
        setGame((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        // Format the date and time to separate columns in the database
        const formattedDate = format(game.date, 'yyyy-MM-dd'); // YYYY-MM-DD
        const formattedTime = format(game.time, 'HH:mm');

        try {
            const response = await axios.post("http://localhost:8081/games", {
                date: formattedDate,
                time: formattedTime,
                court: game.court,
                game_type: game.game_type,
            });
            console.log("Game added:", response.data);
            navigate("/SisterHoop/games");
        } catch (err) {
            console.error("Error posting game:", err);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-5 border rounded shadow-sm">
                <h1 className="text-center mb-4">Add a New Game</h1>
                <div className="mb-3 w-100">
                    <label className="form-label  d-block"><b>Date</b></label>
                    <DatePicker
                        selected={game.date}
                        onChange={handleDateChange}
                        dateFormat="yyy-MM-dd"
                        className="form-control"
                        placeholder="Click to pick a Date"
                        name='date'
                    />
                </div>
                <div className="mb-3 w-100">
                <label className="form-label  d-block"><b>Time</b></label>
                <DatePicker
                        selected={game.time}
                        onChange={handleTimeChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeFormat="HH:mm"
                        dateFormat="HH:mm"
                        className="form-control"
                        placeholderText="Click to pick a Time"
                        name='time'
                    />
                </div>
                <div className="mb-3">
                <label className="form-label"><b>Court</b></label>
                    <input
                        type='text'
                        placeholder='e.g Down Court'
                        onChange={handleChange}
                        name='court'
                        value={game.court}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                <label className="form-label"><b>Game</b></label>
                    <input
                        type='text'
                        placeholder='e.g 3x3'
                        onChange={handleChange}
                        name='game_type'
                        value={game.game_type}
                        className="form-control"
                    />
                </div>
                <button onClick={handleClick} className="btn btn-dark w-100">Add the Game</button>
            </div>
        </div>
    );
}

export default AddGame;