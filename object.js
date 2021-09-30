'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };    object는 key와 value의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const jimin ={
  name : 'jimin',
  age: 25};
print(jimin);

// with JavaScript magic (dynamically typed language)
// can add properties later
jimin.hasJob= true;
console.log(jimin.hasJob);
// can delete properties later
delete jimin.hasJob;
console.log(jimin.hasJob);

// 2. Computed properties
// key should be always string
console.log(jimin.name);  // 코딩 하는 그 순간 그 값을 제대로 받아올때
console.log(jimin['name']);// 배열같이 접근해도된다 // 우리가 정확할때 어떤 키가 필요한지 모를때
jimin['hasjob']= true;
console.log(jimin.hasJob)

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(jimin,'name');
printValue(jimin,'age');

// 3. Property value shorthand
const person1= {name :'bob', age:2};
const person2= {name :'jackson', age:5};
const person3= {name :'steve', age:7};

const person4= new Person('jimin', 25);  // 함수를 이용해서 값만 전달해준다
console.log(person4);
// 4. Constructor  function
function Person(name,age){
    // this={};
   this.name=name;
   this.age=age;
//    return this;
}

// 5. in operator: property existence check(key in obj) 해당하는 object안에 key가 있는지 없는지 확인하는 것
console.log('name' in jimin);
// true
console.log('age' in jimin);
// true
console.log('random' in jimin);
// false
console.log(jimin.random);
// undefined

// 6. for..in vs for.. of
// for (key in obj)
console.clear(); // 이전 것들이 다 지워짐
for ( let key in jimin) {
  console.log(key);
}

// for(value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// object. assign(dest, [obj1, obj2, obj3...])
const user ={name: 'jimin', age:'25'};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4= Object.assign({},user) ;
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);  // blue
console.log(mixed.size);  // big

// const  Lee ={
//   name: "jimin",
//   age: "3",
//   gender:"Female",
 
//   };
//   console.log(Lee);

// const  Lee ={
//   name: "jimin",
//   age: "3",
//   gender:"Female",
 
//   };
//   console.log(Lee.name);

  const Lee ={
    name: "jimin",
    age: "3",
    gender:"Female",
    };
    console.log(Lee.name);
    Lee.name="Lee jimin";
    console.log(Lee.name);

    var movies=["오펀","기생충","어벤져스","내부자들","감시자들","강시"];
for(movies=0; movies<movies.length; movies++){
console.log(movies[i]);
}