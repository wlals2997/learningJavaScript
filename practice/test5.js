const students = [
  {
    name: 'jimin',
    age: 25,
    pretty: true,
  },
  {
    name: 'who',
    age: 0,
    pretty: false,
  },
];
console.log(students[1].name);

var articles = [
  {
    name: '그로스 해킹의 모든 것',
    description: '이건 꼭 읽어야 한다 시리즈',
    url: 'https://brunch.co.kr/@beusable/39',
  },
  {
    name: 'IT 개발자를 이해하기 위한 모든 것 A to Z',
    description: '그랩 짱',
    url: 'https://www.grabbing.me/70567b8743594adda5b62ebb929a6e03',
  },
];

const results =
  articles.length >= 0 && articles[0].name === '그로스 해킹의 모든 것';
console.log(results);

var articles = [
  {
    name: '그로스 해킹의 모든 것',
    description: '이건 꼭 읽어야 한다 시리즈',
    url: 'https://brunch.co.kr/@beusable/39',
    problems: [
      {
        name: '문제 1',
        answer: '답변 1',
      },
      {
        name: '문제 2',
        answer: '답변 2',
      },
    ],
  },
  {
    name: 'IT 개발자를 이해하기 위한 모든 것 A to Z',
    description: '그랩 짱',
    url: 'https://www.grabbing.me/70567b8743594adda5b62ebb929a6e03',
    problems: [],
  },
];

if (articles.length > 0) {
  console.log('yes');
} else {
  console.log('no');
}

if (articles[0].problems.length >= 5) {
  console.log('5개이상');
} else if (articles[0].problems.length >= 1) {
  console.log('1~5개');
} else {
  console.log('없음');
}

var who = function (name, age) {
  console.log(`저의 이름은 ${name}이구요 ${age}입니다`);
};
who('jimin', 25);

function f(x) {
  var result = 3 * x + 15;
  return result;
}
var value1 = f(5);
var value2 = f(2);
console.log(value1);
console.log(value2);

function getProfile(name, age) {
  return {
    name: name,
    age: age,
  };
}
var whoAmI = getProfile('jimin', '25');
console.log(whoAmI.name, whoAmI.age);

function profile() {
  return {
    name: 'jimin',
    myAge: function () {
      console.log('저의 나이는 25살입니다.');
    },
  };
}
const myself = profile();
console.log(myself.name);
myself.myAge();

var articles = [
  {
    name: '그로스 해킹의 모든 것',
    description: '이건 꼭 읽어야 한다 시리즈',
    url: 'https://brunch.co.kr/@beusable/39',
    problems: [
      {
        name: '문제 1',
        answer: '답변 1',
      },
      {
        name: '문제 2',
        answer: '답변 2',
      },
    ],
  },
];

function getArray(arr) {
  return arr.length;
}
function getProblems(tomato) {
  return tomato.problems.length;
}
var value4 = getProblems(articles[0]);
console.log(value4);

var products = [
  {
    name: '농구공',
    description: '농구 황제 마이클 조던이 사용한 농구공입니다',
    price: 100000,
    seller: '민수',
  },
  {
    name: '축구공',
    description: '축구 황제 메시가 사용한 축구공입니다',
    price: 50000,
    seller: '철수',
  },
];

function getPrice(money) {
  for (i = 0; i < money.length; i++) {
    console.log(money[i].seller);
  }
}
getPrice(products);

var articles = [
  {
    name: '그로스 해킹의 모든 것',
    description: '이건 꼭 읽어야 한다 시리즈',
    url: 'https://brunch.co.kr/@beusable/39',
    problems: [
      {
        name: '문제 1',
        answer: '답변 1',
      },
      {
        name: '문제 2',
        answer: '답변 2',
      },
    ],
  },
  {
    name: 'IT 개발자를 이해하기 위한 모든 것 A to Z',
    description: '그랩 짱',
    url: 'https://www.grabbing.me/70567b8743594adda5b62ebb929a6e03',
    problems: [],
  },
];

function newArray(articles){
  var newArticle=[];
  for(var i=0; i<articles.length;i++){
    var val1=articles[i]
  var val2=val1.problems.length
  if(val2>=1){
    newArticle.push(val1)
  }
  }
  return newArticle
}
const val4=newArray["하하하"];
console.log(val4)
