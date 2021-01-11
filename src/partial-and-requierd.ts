export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// このように記述するとPartialTypeはProfile型を継承できる
type PartialType = Partial<Profile>;
// Requierdにすると型が必須になる
type RequiredType = Required<Profile>;
