export {};

let bmi: (heigth: number, weight: number) => number = (
  heigth: number,
  weight: number
): number => {
  return weight / (heigth * heigth);
};

console.log(bmi(1.79, 84));
