export {};

type Pitcher1 = {
  speed: number;
};

type Batter = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  speed: 154,
};

const OchiaiHiromitsu: Batter = {
  battingAverage: 0.367,
};

// この書き方はスマートではない
// type TwoWayPlayer = {
//   speed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter;

const OtaniShouhei: TwoWayPlayer = {
  speed: 165,
  battingAverage: 0.286,
};
