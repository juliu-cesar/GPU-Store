import { TGpuCard } from "@/src/HomePage/components/TGpuCard";

export function SearchItens(gpuList: TGpuCard, text: string) {
  let arr = gpuList.filter((e) => {
    return e.title.toLowerCase().includes(text.toLowerCase());
  });

  if (arr.length > 0) return arr;
  let sameLength = gpuList.filter((e) => {
    let tx = e.title
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .toLowerCase()
      .split(" ");
    let bool = false;

    tx.forEach((el) => {
      if (el.length == text.length) {
        let word = el.split("");
        let res = text.toLowerCase().split("");
        let num = 0;

        if(word[0] != res[0])return
        word.forEach((e) => {
          res.forEach((t) => {
            if (e == t) {
              num++;
            }
          });
        });
        if (num >= res.length * 0.8) {
          bool = true;
        }
      }
    });
    return bool;
  });
  let newArr = [arr, sameLength].flatMap((obj) => obj);
  return newArr;
}
