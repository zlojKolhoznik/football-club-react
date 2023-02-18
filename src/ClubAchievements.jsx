import React from "react";
import "./Club.css";

export default class ClubAchievements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            club: props.club
        };
    }

    render() {
        return (
            <div>
                <h2 className="title">Achievements</h2>
                <ul>
                    <li className="achievement">
                        <b>League titles: </b> {this.state.club.leagueTitles}
                    </li>
                    <li className="achievement">
                        <b>Cups won: </b> {this.state.club.cups}
                    </li>
                    <li className="achievement">
                        <b>European Cups: </b> {this.state.club.europeanCups}
                    </li>
                </ul>
            </div>
        );
    }
}
