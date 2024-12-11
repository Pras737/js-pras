// Primitive
// 7 types:  String, Number,Boolean, null,undefined,Symbol,BigInt

const score=100
const scoreValue=23.5
const isLoggedIn=false
const outSideTemp=null
let userEmail;

const id =Symbol('123')
const anotherId =Symbol('123')

const bigNumber=555536468n //bigint 

// Reference (non primitive)
//  array, object, function
 
const hero=["shaktiman","naagraj","doga"];
let myobj={
    name:"prashant",
    age:22,
}
const myFunction= function(){
    console.log("hello world");
    
}

// Stack(primitive), Heap(non-primitive)
// Stack
let youtubeName="rajaji"
let anotherName=youtubeName
anotherName ="prashant"
console.log(youtubeName);
console.log(anotherName);

let userOne={
    email:"pras@gmail.com",
    upi:"usepay.in"
}
let userTwo=userOne
userTwo.email="pk54@gmail.com"
console.log(userOne);
console.log(userTwo);
console.log(userEmail);

