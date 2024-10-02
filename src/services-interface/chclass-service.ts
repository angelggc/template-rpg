import { CharacterClass } from "../entities/character-class";

export interface ChClassService {
  getAll: () => Promise<CharacterClass[]>;
}
