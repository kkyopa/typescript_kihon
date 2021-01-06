import axios from "axios";
export {};

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    decription: string;
  }
  let data: Article[] = response.data;
  // handle success
  console.log(data);
});
