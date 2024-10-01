import { useContext } from "react";
import { PlayerContext } from "./providers/player-provider";
import { Player } from "./entities/player";

function App() {
  const { player, setPlayer } = useContext(PlayerContext);
  return (
    <div className="App">
      {player && <h1>Tu personaje es: {player.name}</h1>}
      {!player && (
        <div>
          <p>Elije tu Personaje:</p>
          <button
            className="border border-black rounded-lg p-2"
            onClick={() => setPlayer(new Player("Guerrero", []))}
          >
            clase guerrero
          </button>
          <button
            className="border border-black rounded-lg p-2"
            onClick={() => setPlayer(new Player("Ladron", []))}
          >
            clase ladron
          </button>
          <button
            className="border border-black rounded-lg p-2"
            onClick={() => setPlayer(new Player("Mago", []))}
          >
            clase mago
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
