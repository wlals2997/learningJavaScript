// 1. String concatenation( +기호 )
console.log('my'+'cat');
// 결과: my cat
console.log('1'+2);
// 결과: 12
console.log(`string literals:1+2=${1+2}`);
// 결과: string literals:1+2=3
console.log("jimin\'s book");
// 결과: jimin's book

// 2. Numeric operators
console.log(1+1);      
console.log(1-1);      
console.log(1/1);      
console.log(1*1);      
console.log(5%2);// 2로 나누고 나머지값  
console.log(2**3); // 2의3승

// 3. Increment and decrement operators
let counter=2;
const preIncrement= ++counter;
// counter = counter +1;  하나를 증가한 다음에
// preIncrement = counter; preIncrement에 할당
console.log(`preIncrement: ${preIncrement}, counter:${counter}`);
// 결과: preIncrement: 3, counter:3
const postIncrement = counter++; 
// counter 3에서 postincrement에 할당하고 그다음 증가
// postIncrement =counter;
// counter = count +1;
console.log(`postIncrement: ${postIncrement}, counter:${counter}`);
// 결과:postIncrement: 3, counter:4
const preDecrement =--counter;
console.log(`preDecrement: ${preDecrement}, counter:${counter}`);
// 결과:preDecrement: 3, counter:3
const postDecrement =counter--;
console.log(`postDecrement: ${postDecrement}, counter:${counter}`);
// 결과:postDecrement: 3, counter:2

// 4. Adssigmnet operators 할당하는 operators
let x= 3;
let y= 6;
x+=y; // x=x+y;
x-=y; 
x*=y; 
x/=y; 

// 5.Comparison operators 비교하는 operators
console.log(10<6); // less than
console.log(10<=6); // less than or equal
console.log(10>6); // greater than
console.log(10>=6); // greater than or equal

// 6. Logical operators: ||(or), &&(and), ! (not)
const value1 =true;
const value2= 4<2;

// ||(or), 첫번째에서 true가 뜨면 게임 끝!
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), 모든 것이 다 true여야 한다.
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullableObject && nullObject.something
// if(nullableObject !=null){
//     nullableObject.something;
// }

// !(not)
console.log(!value1);

// 7. Equality
const stringFive ='5';
const numberFive= 5;

// ==loose equality, with type conversion(타입을 변경해서 검사)
console.log(stringFive ==numberFive);// 결과: true
console.log(stringFive !=numberFive);// 결과: false

// === strict equality, no type conversion (타입 검사)(코드작성할때는 strict equality 사용하는게 더 좋음)
console.log(stringFive===numberFive); // false
console.log(stringFive!==numberFive); // true

// object equality by reference
const jimin1= {name:'jimin'};
const jimin2= {name:'jimin'};
const jimin3= jimin1;
console.log(jimin1==jimin2);  
//  (레퍼런스가 다르다)false
console.log(jimin1===jimin2);  
// (레퍼런스가 다르다)false
console.log(jimin1===jimin3); 
// (할당한 값이 같다) true

// equality -puzzler
console.log(0==false); // true
console.log(0===false); // false
console.log(''==false); // true
console.log(''===false); // false
console.log(null==undefined); // true
console.log(null===undefined); // false

// 8.Conditional operators :if
// if,else if, else
const name ='jimin';
if(name==='jimin') {
    console.log('Welcome, Jimin');
}else if(name==='ellie'){
console.log("Good to see you!");
}else{
    console.log("What's your name?");
}
// 9.Ternary operator:?
// condition ? value1/;value2;
console.log(name=== 'jimin'? 'yes' :'no');
// yes
// ?: jimin이 true니? 그럼 yes 아니면 no

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser ='IE';
switch (browser) {
    case 'IE':
        console.log('go away');
    break;
    case 'jimin':
    case 'ellie':
         console.log('Hi');
    break;
     default:
        console.log('same all!');
break;
}
// 11. 반복문
// while loop, while the condition is truthy,
// body code is executed.
// while 무한대(조건이 맞을 때만 while)
let i =3;
while(i>3){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
// 블럭을 먼저 실행시키고 싶다면 do while
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

// for loop for(begin; condition; step)
for(i=3; i>0; i--){
    console.log(`for ${i}`);
}

for(let i=3; i>0; i=i-2){
    // inline variable declartion
    console.log(`inline variable for: ${i}`);
}
// break, continue
// Q1. iterate from 0 to 10 and print only even numbers( use continue)
for(let i =0; i<11 ; i++){
  if(i%2 ===0){
 
  console.log(`q1.${i}`);
}
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for(let i=0; i<11; i++){
    if( i>8){
        // 8보다 크면 그만둔다
       break;
    }
    console.log(`q2.${i}`);
}