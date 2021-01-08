export {};

// function bmi(heigth: number, weight: number): number {
//   return weight / (heigth * heigth);
// }

// console.log(bmi(179, 84));

let bmi: (heigth: number, weight: number, isture?: boolean) => number = (
  heigth: number,
  weight: number,
  isture?: boolean
): number => {
  const bmi: number = weight / (heigth * heigth);
  weight / (heigth * heigth);
  if (isture) {
    console.log(bmi);
  }
  return bmi;
};

bmi(178, 88, true);

// デフォルトのパラメータを定義
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
