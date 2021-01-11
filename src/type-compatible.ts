export {};

// let foo: any;
// let bar: string = "typescript";
// console.log(typeof foo);
// foo = bar;

// console.log(typeof foo);

// let profile: { name: string; age: number | null } = {
//   name: "kawada",
//   age: null,
// };

// インデクスシグネチャー

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "kawada", underTwenty: false };

profile.name = "kawada";
profile.age = 28;
profile.nationality = "Japan";
