import ClubMain from "./ClubMain";
import { CLUBS } from "./mock-clubs";
import { useState } from "react";
import "./App.css";

function App() {
    let [currentClub, setCurrentClub] = useState(0);
    const nextClub = () => {
        setCurrentClub(currentClub + 1);
    };
    const prevClub = () => {
        setCurrentClub(currentClub - 1);
    };
    return (
        <div className="App">
            <ClubMain club={CLUBS[currentClub]} />
            <div className="club-buttons">
                <button onClick={prevClub} disabled={currentClub <= 0}>Prev</button>
                <button onClick={nextClub} disabled={currentClub >= CLUBS.length - 1}>Next</button>
            </div>
        </div>
    );
}

export default App;

