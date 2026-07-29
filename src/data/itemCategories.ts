export interface ItemCategory {
  id: number;
  name: string;
  icon: string;
}

export const ITEM_CATEGORIES: ItemCategory[] = [
  { id: 1, name: "Backpack", icon: "Backpack" },
  { id: 2, name: "Mobile Phone", icon: "Smartphone" },
  { id: 3, name: "Laptop", icon: "Laptop" },
  { id: 4, name: "ID Card", icon: "IdCard" },
  { id: 5, name: "Wallet", icon: "Wallet" },
  { id: 6, name: "Keys", icon: "KeyRound" },
  { id: 7, name: "Books", icon: "BookOpen" },
  { id: 8, name: "Earphones", icon: "Headphones" },
];