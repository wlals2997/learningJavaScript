'use strict';   // 모던하게 개발
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    // constructor
    constructor(name,age){
        // fileds
        this.name=name;
        this.age= age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}
const jimin = new Person('jimin', 25);
console.log(jimin.name);
console.log(jimin.age);
jimin.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age=age;
    }
    get age(){
        return this._age;
    }
    set age(value){  // value 값 설정
        // if( value<0){
        //     throw Error('age can not be negative');
        // }
       this._age = value<0 ? 0 :value;
    //    value가 -0이라면  0으로 쓰고 아니라면 지정된 value를 쓰겠다
        
    }
}

const user1 = new User('Steve','job','-1');
console.log(user1.age)

// 3. Fields (public, private)
// Too soon! 
// 
class Experiment{
    publicField= 2;  // 외부에서 접근 가능
    #privateField=0;
    // 클래스 내부에서만 값이 보여지고 변경되고 접근이 가능하지만 클래스 외부에서는 읽을 수도 변경할 수도 없다, 가장 최신
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article{
    static publisher = 'Dream coding';
    constructor(articleNumber){
        this. articleNumber= articleNumber;
    }

    static printPublisher(){
    console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width= width;
        this.height= height;
        this.color= color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return width*this.height;
    }
    }
    class Rectangle extends Shape{}
    // 굳이 같은 코드를 작성할 필요없음 extends만 쓰면됨
    class Triangle extends Shape{
        draw() {
            super.draw();
            // 부모의 메소드부터 호출
            console.log('🔺');
          }
        getArea() {
            return (this.width * this.height) / 2;
          }
    }
    const rectangle = new Rectangle(20,20,'blue');
    rectangle.draw();
    const triangle = new Triangle(20,20,'green');
    triangle.draw();
    console.log( triangle.getArea());

    // 6. Class checking: instanceOf
    console.log(rectangle instanceof Rectangle); // true
    console.log(triangle instanceof Rectangle); // false
    console.log(triangle instanceof Triangle); // true
    console.log(triangle instanceof Shape); // true
    console.log(triangle instanceof Object); // true
    console.log(triangle.toString());
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference