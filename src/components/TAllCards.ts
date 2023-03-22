export type TAllCards = TCard[];

export type TCard = {
  id: string;
  title: string;
  img: string;
  brand: string;
  memory: number;
  ray: boolean;
  price: number;
  rating: number;
  relevance: number;
  amount?: number;
};
