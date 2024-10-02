import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../providers/player-provider";

export function Home() {
  const navigate = useNavigate();
  const { player } = useContext(PlayerContext);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => navigate("/select-hero")}
          className="text-white border border-white rounded-lg p-3"
        >
          Iniciar
        </button>
        <button
          type="button"
          onClick={() => navigate("/game")}
          className={`border rounded-lg p-3 ${
            !player
              ? "text-gray-400 border-gray-400 cursor-default"
              : "text-white border-white"
          }`}
          disabled={!player}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
