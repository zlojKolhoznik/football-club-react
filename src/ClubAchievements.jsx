import React from "react";
import "./Club.css";

export default class ClubAchievements extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { club } = this.props;
        return (
            <div>
                <h2 className="title">Achievements</h2>
                <ul>
                    <li className="achievement">
                        <b>League titles: </b> {club.leagueTitles}
                    </li>
                    <li className="achievement">
                        <b>Cups won: </b> {club.cups}
                    </li>
                    <li className="achievement">
                        <b>European Cups: </b> {club.europeanCups}
                    </li>
                </ul>
            </div>
        );
    }
}
