//1.object to json
//stringify(obj)

let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['tomato','banana']);
console.log(json);

const jimin={
    name:"jimin",
    age:25,
    size:null,
    birthDate:new Date(),
    pretty:()=>{
        console.log(`${name}is pretty!`);
    },
};
json=JSON.stringify(jimin, ["birthDate","name"] );

console.log(json)
json=JSON.stringify(jimin,(key,value)=>{
    console.log(`key: ${key} value:${value}`);
    return key==='name' ? 'jimin' : value;
});
console.log(json)
//2. json to object
console.clear();
json=JSON.stringify(jimin);
const obj=JSON.parse(json,(key, value)=>{
    console.log(`key: ${key} value:${value}`);
    return key==='birthDate' ? new Date(value) : value;
});
console.log(obj)
jimin.pretty();
console.log(jimin.birthDate.getDate())
console.log(obj.birthDate.getDate())
