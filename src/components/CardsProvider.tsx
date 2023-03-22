import { TAllCards, TCard } from "@/src/components/TAllCards";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import ApiLinks from "@/ApiLinks.json"

type cardType = {
  allCards: TAllCards | [];
  setAllCards: Dispatch<SetStateAction<TAllCards | []>>;
};

export const CardsContext = createContext<cardType>({
  allCards: [],
  setAllCards: () => {
    alert("setAllCards ainda não configurado.");
  },
});
export default function CardsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allCards, setAllCards] = useState<TAllCards | []>([]);
  const getCards = ApiLinks.getAllCards;

  useEffect(() => {
    let newArr: TAllCards | any[] = [];
    fetch(getCards)
      .then((response) => response.json())
      .then((data) => {
        let arrKey = Object.keys(data);
        arrKey.forEach((e) => {
          newArr.push(data[e as keyof typeof data] as TCard);
        });
        setAllCards(newArr);
      });
  }, []);

  return (
    <CardsContext.Provider
      value={{
        allCards: allCards,
        setAllCards: setAllCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}
