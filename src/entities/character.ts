import { CharacterClass } from "./character-class";

export class Character {
  constructor(name: string, chClass: CharacterClass, inventory?: string[]) {
    this.name = name;
    this.inventory = chClass.initialInventory;
    this.life = chClass.initialLife;
    this.dex = chClass.dex;
    this.str = chClass.str;
    this.int = chClass.int;

    if (inventory) this.inventory = [...this.inventory, ...inventory];
  }
  public name: string;
  public inventory: string[];
  public life = 0;

  public str = 0;
  public dex = 0;
  public int = 0;
}
