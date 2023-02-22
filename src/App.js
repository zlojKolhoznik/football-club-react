import Club from "./Club";
import ClubMain from "./ClubMain";
import './App.css';

function App() {
  let players = [
    "Marc Andre ter Stegen - goalkeeper",
    "Inaki Pena - goalkeeper",
    "Ronald Araujo - defender",
    "Andreas Christensen - defender",
    "Marcos Alonso - defender",
    "Jordi Alba - defender",
    "Jules Kounde - defender",
    "Eric Garcia - defender",
    "Sergio Busquets - midfielder",
    "Gavi - midfielder",
    "Pedri - midfielder",
    "Frank Kessie - midfielder",
    "Sergi Roberto - midfielder",
    "Frenkie de Jong - midfielder",
    "Ousmane Dembele - forward",
    "Robert Lewandowski - forward",
    "Ansu Fati - forward",
    "Fernan Torres - forward",
    "Raphinha - forward",
    "Xavi - coach"
  ]
  let club = new Club("FC Barcelona", "Barcelona", "/img/barcelona.png", 1899, 26, 30, 21, players);
  return (
    <div className="App">
      <ClubMain club={club} />
    </div>
  );
}

export default App;
