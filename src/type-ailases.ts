export {};

type Mojiretsu = string;

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "hello";

const example: Profile = {
  name: "kawada",
  age: 28,
};

type Profile = {
  name: string;
  age: number;
};

type Profile2 = typeof example;

const un: Profile2 = {
  name: "こんにちは",
  age: 25,
};
