import React from "react";
import { useState } from "react";

function Home() {
    // const [count, setCount] = useState(0);

    const [speed, setSpeed] = useState(0);
    const [time, setTime] = useState(0);
    const [distance, setDistance] = useState(0);

    const clac = () => {
        if (speed == 0) {
            setSpeed(distance / time);
        } else if (distance == 0) {
            setDistance(speed * time);
        } else if (time == 0) {
            setTime(distance / speed);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <div className="flex flex-col justify-center items-center gap-1  bg-amber-300 p-4 rounded-md">
                    <label htmlFor="speed">speed</label>
                    <input
                        className="outline-1 "
                        id="speed"
                        type="number"
                        value={speed}
                        onChange={(e) => setSpeed(Number(e.target.value))}
                        placeholder="Speed"
                    />
                    <label htmlFor="distance">distance</label>
                    <input
                        className="outline-1 "
                        id="distance"
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(Number(e.target.value))}
                        planumber="Distance"
                    />
                    <label htmlFor="time">time</label>
                    <input
                        className="outline-1 "
                        id="time"
                        type="number"
                        value={time}
                        onChange={(e) => setTime(Number(e.target.value))}
                        placeholder="Time"
                    />
                    <button onClick={clac} className="bg-green-500 py-1 px-3">
                        {" "}
                        Calculate
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
