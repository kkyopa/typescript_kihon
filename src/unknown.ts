export {};

const kansu = (): number => 28;

let numberany: any = kansu();
let numberunknown: unknown = kansu();

let sumAny = numberany + 10;

if (typeof numberunknown === "number") {
  let sumunknown = numberunknown + 10;
  console.log(numberunknown);
  console.log(sumunknown);
}
