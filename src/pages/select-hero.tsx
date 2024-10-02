import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../providers/player-provider";
import { Player } from "../entities/player";
import chClass from "../services/chclass";
import { CharacterClass } from "../entities/character-class";
import { SelectHeroButton } from "./components/select-hero-button";
import { useNavigate } from "react-router-dom";

export function SelectHero() {
  //Estamos consumiendo el contexto para traernos la funcion setPlayer
  const { setPlayer } = useContext(PlayerContext);

  //Un estado guardando todas las clases del juego
  const [classes, setClasses] = useState<CharacterClass[]>();
  useEffect(() => {
    async function getData() {
      setClasses(await chClass.getAll());
    }
    getData();
  }, []);

  //Un estado guardado la Clase elegida
  const [selectedClass, setSelectedClass] = useState<CharacterClass>();

  //Un estado guardado en nombre del personaje
  const [inputName, setInputName] = useState("");

  //Un hook para moverse entre paginas
  const navigate = useNavigate();

  //Funcion para crear el player, primero comprueba que tenga un nombre y una clase seleccionada
  function createPlayer() {
    if (inputName !== "" && selectedClass) {
      setPlayer(new Player(inputName, selectedClass));
      navigate("/game");
    }
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
      <div>
        <p className="text-white">Elije tu Personaje:</p>
        {classes ? (
          <div className="flex gap-4">
            {classes.map((c) => (
              <SelectHeroButton
                selected={selectedClass?.name === c.name}
                chClass={c}
                onClick={() => setSelectedClass(c)}
              />
            ))}
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div>
        <label htmlFor="playerName" className="text-white">
          Nombre
        </label>
        <input
          type="text"
          id="playerName"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        />
      </div>

      <button
        className="text-white border border-white rounded-lg p-3"
        onClick={createPlayer}
      >
        Crear personaje
      </button>
    </div>
  );
}
