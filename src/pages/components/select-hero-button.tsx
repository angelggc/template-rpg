import { CharacterClass } from "../../entities/character-class";

export interface SelectHeroButtonProps {
  chClass: CharacterClass;
  onClick: () => void;
  selected: boolean;
}

export function SelectHeroButton({
  chClass,
  onClick,
  selected,
}: SelectHeroButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`border ${
        selected ? "border-green-400" : "border-white"
      }  rounded-lg text-white cursor-pointer`}
    >
      <p>{chClass.name}</p>
      <p>Salud inicial: {chClass.initialLife}</p>
      <p>Fuerza: {chClass.str}</p>
      <p>Destreza: {chClass.dex}</p>
      <p>Inteligencia: {chClass.int}</p>
    </div>
  );
}
