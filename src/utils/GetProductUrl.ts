export function GetProductUrl(title:string, id: string){
  return `/produto/${title.replace(/[\s/]+/g, "-") + id}`;
}