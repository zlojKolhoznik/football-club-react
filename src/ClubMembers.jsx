import React from "react";
import "./Club.css";

export default class ClubMembers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { club } = this.props;
        return (
            <div>
                <h2 className="title">Members</h2>
                <ul>
                    {club.members.map((member, index) => (
                        <li key={index} className="member">{member}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
