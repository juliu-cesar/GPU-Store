import { TAllCards } from "@/src/components/TAllCards";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

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

  useEffect(() => {
      let newArr: TAllCards | any[] = [];
    fetch("https://gpu-store-test-default-rtdb.firebaseio.com/cards.json")
      .then((response) => response.json())
      .then((data) => {
        let arrKey = Object.keys(data)
        arrKey.forEach((e)=>{
          newArr.push(data[e as keyof typeof data])
        })
        console.log(newArr);
        
      });
    // setTimeout(() => {
    //   let newArr = allCards
    //   newArr.push("ola")
    //   setAllCards(newArr)
    // }, 5000);
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
