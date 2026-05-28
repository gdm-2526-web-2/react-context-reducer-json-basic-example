export type CategoryType = {
  id: string | number;
  name: string;
  products: ItemType[];
};

export type ItemType = {
  id: string | number;
  name: string;
  price: number;
};
