import { createContext, PropsWithChildren, useState } from "react";
import { Player } from "../entities/player";

export const PlayerContext = createContext({
  player: undefined as Player | undefined,
  setPlayer: (v: Player) => {},
});

export function PlayerProvider({ children }: PropsWithChildren) {
  const [player, setPlayer] = useState<Player>();

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}
