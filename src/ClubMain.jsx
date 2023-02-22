import ClubInfo from "./ClubInfo";
import ClubAchievements from "./ClubAchievements";
import ClubMembers from "./ClubMembers";

export default function ClubMain(props) {
    let { club } = props;
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    return (
        <div style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>
            <ClubInfo club={club} />
            <ClubAchievements club={club} />
            <ClubMembers club={club} />
        </div>
    );
}
