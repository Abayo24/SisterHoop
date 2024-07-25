import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

function Update() {
    const { id: gameId } = useParams(); // Use useParams to get the gameId
    const [game, setGame] = useState({
        date: new Date(),
        time: new Date(),
        court: "",
        type: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('Fetching game with ID:', gameId);
        const fetchGame = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/games/${gameId}`);
                const gameData = response.data;
                console.log('Fetched game data:', gameData);

                const parsedDate = new Date(gameData.date);
                const [hours, minutes] = gameData.time.split(':');
                const parsedTime = new Date(parsedDate); // Start with the date
                parsedTime.setHours(parseInt(hours, 10));
                parsedTime.setMinutes(parseInt(minutes, 10));
                parsedTime.setSeconds(0);
                parsedTime.setMilliseconds(0);
                console.log('Parsed date:', parsedDate);
                console.log('Parsed time:', parsedTime);

                setGame({
                    date: parsedDate,
                    time: parsedTime,
                    court: gameData.court,
                    type: gameData.game_type,
                });
                setLoading(false);
            } catch (err) {
                setError("Error fetching game data.");
                setLoading(false);
                console.error("Error fetching game data:", err);
            }
        };

        fetchGame();
    }, [gameId]);

    const handleDateChange = (date) => {
        setGame((prev) => ({
            ...prev,
            date: date,
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
        const formattedDate = format(game.date, 'yyyy-MM-dd');
        const formattedTime = format(game.time, 'HH:mm');

        try {
            await axios.put(`http://localhost:8081/games/${gameId}`, {
                date: formattedDate,
                time: formattedTime,
                court: game.court,
                game_type: game.type,
            });
            navigate("/SisterHoop/games"); // Redirect after successful update
        } catch (err) {
            setError("Error updating game.");
            console.error("Error updating game:", err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-5 border rounded shadow-sm">
                <h1 className="text-center mb-4">Update Game</h1>
                <div className="mb-3">
                    <label className="form-label"><b>Date</b></label>
                    <DatePicker
                        selected={game.date}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                        placeholderText="Select Date"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Time</b></label>
                    <DatePicker
                        selected={game.time}
                        onChange={handleTimeChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeFormat="HH:mm"
                        dateFormat="HH:mm"
                        className="form-control"
                        placeholderText="Select Time"
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
                    <label className="form-label"><b>Game Type</b></label>
                    <input
                        type='text'
                        placeholder='e.g 3x3'
                        onChange={handleChange}
                        name='type'
                        value={game.type}
                        className="form-control"
                    />
                </div>
                <button onClick={handleClick} className="btn btn-dark w-100">Update Game</button>
            </div>
        </div>
    );
}

export default Update;
