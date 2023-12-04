import { TAllCards } from "@/src/provider/TAllCards";

export function SearchItens(gpuList: TAllCards, search: string): TAllCards {
  let arr = gpuList.filter((e) => {
    return e.title.toLowerCase().includes(search.toLowerCase());
  });

  if (search.split(" ").length > 1) return multipleSearchWords(gpuList, search);

  if (arr.length > 0) return arr;

  arr = [similarSearch(gpuList, search)].flat(1);
  return arr;
}

function similarSearch(gpuList: TAllCards, search: string): TAllCards {
  let sameSizeWords = gpuList.filter((e) => {
    let titleWordsSplit = e.title
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .toLowerCase()
      .split(" ");
    let bool = false;

    titleWordsSplit.forEach((el) => {
      if (el.length == search.length) {
        let titleSplitLetters = el.split("");
        let searchSplitLetters = search.toLowerCase().split("");
        let sameNumber = 0;

        const firstLetterDifferent =
          titleSplitLetters[0] != searchSplitLetters[0];
        if (firstLetterDifferent) return;
        titleSplitLetters.forEach((tLetter) => {
          searchSplitLetters.forEach((sLetter) => {
            if (tLetter == sLetter) {
              sameNumber++;
            }
          });
        });
        const similarLetters = sameNumber >= searchSplitLetters.length * 0.8;
        if (similarLetters) {
          bool = true;
        }
      }
    });
    return bool;
  });
  return sameSizeWords;
}

function multipleSearchWords(gpuList: TAllCards, search: string): TAllCards {
  let split = search.split(" ");
  let individualSearch: TAllCards[] = split.map((el) => {
    return SearchItens(gpuList, el);
  });

  for (let x = 0; x < individualSearch.length - 1; x++) {
    let arr1 = stringFy(individualSearch[x]);
    let arr2 = stringFy(individualSearch[x + 1]);
    individualSearch[x + 1] = [];
    for (let i = 0; i < arr1.length; i++) {
      let obj = arr2.find((e: any) => e.id === arr1[i].id);
      if (obj) {
        individualSearch[x + 1]!.push(arr1[i]);
      }
    }
    individualSearch[x] = [];
  }
  let flat = individualSearch.flat(1).filter((e) => e != undefined);
  return flat;
}

function stringFy(array: TAllCards): TAllCards {
  return JSON.parse(JSON.stringify(array));
}
