export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// mappedーtype
type Optional<T> = { [P in keyof T]?: T[P] | boolean };

type OptoinalProfile = Optional<Profile>;
