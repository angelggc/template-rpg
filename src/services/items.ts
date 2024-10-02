import { Item } from "../entities/item";
import { ItemService } from "../services-interface/item-service";

const localItems: Item[] = [
  { id: "1", name: "Hacha" },
  { id: "2", name: "Cuchillo" },
  { id: "3", name: "Libro" },
];

const items: ItemService = {
  getAll: async () => {
    return localItems;
  },
};

export default items;
