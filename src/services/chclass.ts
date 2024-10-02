import { CharacterClass } from "../entities/character-class";
import { ChClassService } from "../services-interface/chclass-service";

const localChClass: CharacterClass[] = [
  {
    name: "Guerrero",
    initialLife: 30,
    initialInventory: [],
    dex: 7,
    str: 12,
    int: 4,
  },
  {
    name: "Picaro",
    initialLife: 25,
    initialInventory: [],
    dex: 12,
    str: 6,
    int: 6,
  },
  {
    name: "Mago",
    initialLife: 25,
    initialInventory: [],
    dex: 7,
    str: 3,
    int: 12,
  },
];

const chClass: ChClassService = {
  getAll: async () => {
    return localChClass;
  },
};

export default chClass;
