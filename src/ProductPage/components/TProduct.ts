export type TProduct = {
  imgList: string[];
  textList: {
    title: string;
    subtitleList: string[];
    price: number;
  };
  description: {
    class: string;
    infoTitle?: string;
    infoSubtitle?: string;
    text?: string;
    imgUrl?: string;
  }[];
  info_table: {
    th: string[];
    td: string[];
  }[];
  package_content: string[];
  rating: number;
}
