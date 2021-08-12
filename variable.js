//  좀더 엄격한 사용을 위해 작성
'use-strict';

// 2. Variable-변수(변경될 수 있는 값),rw(read/write)
// let (added in ES6) ES6-자바스크립트

// 자바스크립트에서 변수를 선언할 수 있는 키워드는 딱하나 
// let
// var은 don't ever use this!
// var hoisting(어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려 주는것) hoisting-끌어올려주다
let name = 'jimin';
console.log(name);
name='hello';
console.log(name);


// 3. constants (한번 할당하면 값이 절대 바뀌지 않는다)),r(read only)
// favor immutable data type always for a few reasons;
// -security
// -thread safety   
// -reduce human mistakes
const daysInWeek =7;
const maxnumber =5;

//4. variable types
// primitive(더이상 작은단위로 나눠질수 없는 한 가지의 아이템), single item:number, string, boolean, nulll, undefined,symbol
// object(single아이템들을 여러개로 묶어서 한 박스로 관리할 수 있게 하는 것), box container
// function, first-class function

const count=17; //integer
const size=17.1 //decimal number(소수)
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);

//number - speical numeric values(특수 숫자 값): infinity, -infinity, NaN
const infinity=1/0; //무한대의 숫자값
const negativeInfinity=-1/0;
const nAn = 'not a number'/2; //숫자가 아닌 경우
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(새롭게 추가 되었음)
const bigInt= 32131654546845313213564645865664545514584685453545646n; //크롬, 파이어폭스에서만 지원
console.log(`value: ${bigInt}, type: ${typeof bingInt}`);

// string
const char ='c'; //한가지의 캐릭터
const bredon='bredon';
const greeting='hello'+bredon;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${bredon}!`; //template literals (string)
// 결과:value: hi bredon!, type: string
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean(참과 거짓)
// false: 0, null, undefined ,NaN, ''
//true: any other value
const canRead= true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
//value: true, type: boolean
//value: false, type: boolean

//null  내가 명확하게 넌 텅텅 비어있는 거야라고 지정
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined  선언은 되었지만 값은 지정되어있지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, creat unique identifiers for objects  고유한 식별자가 필요하거나 우선순위를 주고 싶을때
const symbol1 =Symbol('id');
const symbol2 =Symbol('id');
console.log(symbol1=== symbol2);  //false
const gsymbol1 =Symbol.for('id');
const gsymbol2 =Symbol.for('id');
console.log(gsymbol1=== gsymbol2);  //true
console.log(`value: ${gsymbol1.description}, type: ${typeof gsymbol1}`);
//.description string으로 바꿔줘야 함
//value: id, type: symbol

// object, real-life object, data structure 물건을 대표할 수 있는
const ellie = { name: `ellie`, age:20};
ellie.age=21; // 변경 가능
console.log(`value: ${ellie}, type: ${typeof ellie}`);
// 5. Dynamic typing: dynamically typed language
// 자바 스크립트는 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있다
let text=' hello';
console.log(text.charAt(0));  //h
console.log(`value: ${text}, type: ${typeof text}`);
// 결과: vaule: hello, type: string
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
// 결과: vaule: 1, type: number
text ='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
// 결과: vaule: 75, type: string
//문자열에 number가 있으니까 숫자 5를 string으로 변환해서 string+string으로 합해진것으로 결과가 나옴
text= '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
// 결과: vaule: 4, type: number
//이때는 숫자와 숫자를 나누게 됨
