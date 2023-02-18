import React from "react";
import "./Club.css";

export default class ClubMembers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            club: props.club
        };
    }

    render() {
        return (
            <div>
                <h2 className="title">Members</h2>
                <ul>
                    {this.state.club.members.map((member, index) => (
                        <li key={index} className="member">{member}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
