import { useContext } from "react";
import { PlayerContext } from "../providers/player-provider";

export function Game() {
  const { player } = useContext(PlayerContext);
  return (
    <div className="text-white">
      <p>{player?.name}</p>
      <p>{player?.life}</p>
    </div>
  );
}
