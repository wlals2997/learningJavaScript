// Function
// -fundamental building block in the program
// -subprogram can be used multiple times
// -performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body...return;}
// one function ===one thing 한가지의 함수는 한가지 일만
// naming: do something, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// funtion is object in JS
function printHello(){
    console.log('Hello');
}
printHello();  // 함수 호출

function log(message){
    console.log(message);
}
log('hello');
log(1234); 

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(object){
    object.name ='coder'; // object의 이름을 corder로 바꿔주는 함수
}
const jimin ={ name: 'jimin'};
changeName(jimin);
console.log(jimin);

// 3. Default parameters(added in ES6)
function showMessage(message, from= 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi','jimin');

// 4. Rest parameters(added in ES6)
function printAll(...args){// ...배열 형태로 전달되게 된다
    for( let i =0; i<args.length; i++){// args의 갯수만큼
        console.log(args[i]);
    }
    // for(const arg of args){
        // console.log(arg);
    // }
}
printAll('web', 'developer', 'jimin');

// 5.Local scope 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
let globalMessage= 'global'; // global variable
function printMessage(){
    let message='hello';//  local variable지역변수
    console.log(message);// local variable
    console.log(globalMessage);
}
printMessage();

// 6.Return a value
function sum(a,b){
    return a+b; // =return undefined
}
const result= sum(1, 2); // 3
console.log(`sum: ${1, 2}`);
// 결과:3

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point>10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point<=10){
     return 
    //  조건이 맞지 않을때 는 빨리 return을 하고
    }
       // long upgrade logic...
    //    조건이 맞을때는 필요한 로직들을 빨리 실행하는 것이 더 좋다
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable  변수에 할당이 된다
// can be passed as an argument to other functions. 함수에 parameter로  전달이 되며
// can be returned by another function 리턴 값으로도 리턴이 된다

// 1. Function expression
// a function declaration can be called earlier than it is defined.( hoisted)
// a function expression is created when the execution reaches it.
const print= function(){ // annonymous function
    console.log('print');  // 결과: print
} ;
print();
const printAgain = print;
printAgain(); // 결과: print
const sumAgain = sum;
console.log(sumAgain(1,3)); // 결과: 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
  // anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
// named function
// better debuggin in debugger's stack traces
// recursions
const printNo = function print() {   
    // named function
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);

//   Arrow function
//  always annonymous
// const simplePrint =function(){
//     console.log ('simplePrint!');
// }; 굳이 arrow function은 이렇게 코드를 짤 필요가 없다

const simplePrint =() => console.log('simplePrint');
const add =(a,b) => a+b;

// IIFE: immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command,a,b)
// command: add, substract, divide, multiply ,remainder

function calculator(command,a,b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
            default:
                throw Error('unknown command');
    }
}
console.log(calculator('substract',6,5));