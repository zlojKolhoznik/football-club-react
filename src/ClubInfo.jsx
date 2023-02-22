import React from "react";
import "./Club.css";

export default class ClubInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { club } = this.props;
        return (
            <div>
                <img src={club.logo} alt="logo" className="club-logo" />
                <h1 className="club-title">
                    {club.name}. {club.city} ({club.year})
                </h1>
            </div>
        );
    }
}
