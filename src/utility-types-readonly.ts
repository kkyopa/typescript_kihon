export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "kawada",
  age: 28,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "かわ",
  age: 30,
};

// できない書き換え不可
// friend.age++;
