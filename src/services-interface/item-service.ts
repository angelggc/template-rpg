import { Item } from "../entities/item";

export interface ItemService {
  getAll: () => Promise<Item[]>;
}
