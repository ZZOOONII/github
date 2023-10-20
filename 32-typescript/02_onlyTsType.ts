// only typescript type

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
// drink.push('얏호'); // Tuple의 한계
console.log(drink);

// readonly: 요소 타입 순서와 같이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('얏호'); // error

// Tuple ex
type productInfo = [number, string, number]; // type 별칭으로 type을 선언
let product1: productInfo = [1, '로지텍 MX master3', 130000];
let product2: productInfo = [2, '로지텍 k380', 58000];
// let product3: [number, string, number] = [2, '로지텍 k380', '58000']; // type error

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla,
  kiwi = '키위 케이크',
}

console.log(Cake.choco);
console.log(Cake.kiwi);

////////////////////////////////////////////////
//
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sesac' };

// 암묵적으로
let val2;
val2 = false;
val2 = '바이';

/////////////////////////////////
//
// 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
const olympicGame: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성계주',
  },
  true,
];

////////////////////////////////////////
// type & interface

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
  // addr: string;
}

const student1: Student = {
  name: 'jinheyong',
  isPassed: true,
  // addr: 'seoul',
};

const student2: object = {
  name: 'jinheyong',
  isPassed: true,
  addr: 'seoul',
};

// interface 상속
// A+, A, B, C, D, F
// type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // ?: 있어도 되고 없어도 됨
  // [grade: number]: string;
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'ontani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  backNumber: 17,
  1: Score.A, // 학년: 점수
  // 2: 'NP', // error
};
console.log(otani);

otani.position = '투수';
otani['height'] = 200;
// otani.backNumber = 16; // error : backNumber readonly
console.log(otani);

// type vs. enum
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

// 교차 타입 : 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: Toy & Car = {
  name: 'tayo',
  start() {
    console.log('출발~~');
  },
  color: 'blue',
  price: 5000,
};

// 2. type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  // gender: string;
  gender: Gender;
};

let danial: Person = {
  name: 'daniel',
  gender: 'F', // Gender 타입에 선언된 값만 넣을 수 있음
  age: 20,
  like: ['minji', 'hani'],
};

// 실습
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};
