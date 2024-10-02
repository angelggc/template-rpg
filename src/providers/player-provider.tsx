import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Player } from "../entities/player";

export const PlayerContext = createContext({
  player: undefined as Player | undefined,
  setPlayer: (v: Player) => {},
});

export function PlayerProvider({ children }: PropsWithChildren) {
  const [player, setPlayer] = useState(() => {
    const player = localStorage.getItem("player");
    if (player !== "undefined" && player !== null) {
      return JSON.parse(player);
    }
    return undefined;
  });

  useEffect(() => {
    localStorage.setItem("player", JSON.stringify(player));
  }, [player]);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}
