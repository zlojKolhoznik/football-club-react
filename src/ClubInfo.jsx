import React from "react";
import "./Club.css";

export default class ClubInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            club: props.club
        };
    }

    render() {
        return (
            <div>
                <img src={this.state.club.logo} alt="logo" className="club-logo" />
                <h1 className="club-title">
                    {this.state.club.name}. {this.state.club.city} ({this.state.club.year})
                </h1>
            </div>
        );
    }
}
