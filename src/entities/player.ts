export class Player {
  constructor(name: string, inventory: string[]) {
    this.name = name;
    this.inventory = inventory;
  }

  public inventory: string[] = [];
  public name: string = "";
}
