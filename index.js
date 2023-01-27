
 /* console.log('hello world');
 
let trueFalse = true;//boolean true ra false matra huncha
//console.log() yesle print garcha


//object
let person ={
name: "pukar",
age: 22

};

person.name = "hirachan";//changes the obj name
console.log(person);




//calculating a value
function square(number){
    return number * number;

}
let number = square(2);
console.log(number);



//data types and variables
//undefined,null,boolean, string symbol, number, and object
var myName = "pukar hirachan";
myName = 8 ;
console.log(myName);

var a;
var b = 9;
a = 7;

console.log(a+b);


b++;
a++;
c=a+b;
console.log(c);


var firstName ="john";
var secondName = "legend";
fullName=firstName+" "+secondName;
console.log(fullName);
person1= "my name is "+ fullName;
console.log(person1);

// first letter or any letter of words
firstLetter= fullName[0];
secondLetter= fullName[1];
console.log(firstLetter);
console.log(secondLetter);

// lastletter 
totalLetter= fullName.length;
lastLetter = fullName[--totalLetter];
console.log(lastLetter);



//functions
//functions can have multipple parameters
function wordBlanks(word1, word2, word3){
    
   var result = "the "+ word1 + " is "+ word2+" and "+word3;
    return result;
}
console.log(wordBlanks("dog","dangerous","stupid"));



//arrays
let selectedColors = ['red','blue','green','yellow']//arrays haru halaeko
selectedColors[4] = "black";//add obj in arrays
console.log(selectedColors);
console.log(selectedColors.length);

// multi-arays
var ourArray= [['the universe',45],['everything',12211],[13,14]];
var myArray = ourArray[0][0];
len= ourArray.length;
console.log(len);
console.log(myArray);
//finding lastarrays
lastArray= ourArray[--len][1];
console.log(lastArray);

//adding another arrays
ourArray.push([21,"puks"]);
console.log(ourArray);

 //manipulating arrays with pop
 var arrays = [1,2,5];
 var removedArray= arrays.pop();
 console.log(arrays);
 console.log(removedArray);
 //.pop removed a last data from arrays and store in another variable

//.shift remove a first data from arrays and store in another variable.
let student= ['pukar','kripal','don','evaluate'];

console.log(student.shift());
console.log(student);
//unshift add arrays

//replace new elements in existing elements.
let randomArray=['1','2','3','4','5','6','7','8','9'];
randomArray[6]='wow';
console.log(randomArray);

//splice add new elements in existing elements
randomArray.splice(7,1,'hundred','hundred1','hundred2');//second position removed indicate number elements
console.log(randomArray);


//slice shows from start to end by portioning
let fruits=['banana','orange','apple','lemon','mango'];
let citrus = fruits.slice(0,3);
console.log(fruits);
console.log(citrus);


function getFullName(firstName, lastName){
    return firstName + ''+ lastName;

}
function getInfo(fullName, age){
    return `my name is ${fullName} and my age is ${age}`;
}
console.log(getInfo('ram',49));

const myPet = (animal, animal2) => {
    return `i have ${animal} and ${animal2}`;

}
console.log(myPet("dog","cat"));


make array with 20 value
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
array.forEach(function(element,index){
    console.log(element, index);
})

for (i=0; i<array.length; i++){
    console.log(array[i], i)
}



//call back function
function getFullName(firstName, lastName, callBac){
    return callBac(`${firstName} ${lastName}`);
}
function makeUpper(name){
    return name.toUpperCase();
}

let fullName=getFullName('Pukar','hirachan',makeUpper);
console.log(fullName);

//passing call back function in array using forEach.
let array = ['nepal','bhutan','india','uk','japan'];
 array.forEach(function(element, index){
    console.log("this is the", element ,"index" ,index);
    
 });
 
//for loop i/e for in
let fruits=['apple','mango','orange','grapes'];
for (items in fruits){
    console.log(items);
};

let animal= {
    name: 'cow',
    age:15,
    color:'black'
}
console.log(animal);

let exampleArray= ['ram','hari'];
console.log(exampleArray[1]);

//animal.color='blue';
animal['color'] ='blue';
console.log("updated color ", animal.color);
delete animal.color;
console.log(animal);

//object.keys and values
console.log("object keys Arrays: ",Object.keys(animal));
console.log("object values Arrays: ",Object.values(animal));

//nested arrays
const nestObject = {
    mammal:{
        name: "cow",
        age:"20",
        types: ["type1","type2"]
    },
    bird: {
        name: "eagle",
        age: "10",
    },
};
console.log(nestObject.mammal.types);

//find methods

let fruits = ["banana","orange","lemon","apple","mango"];
const result = fruits.find(function(element, index){
    return element === "apple"
}
);
console.log(result);

//includes methods
let sentences=["this is the helloworld","iims website", "stack overflow"];
const matchSentence = sentences.find(function(element,index){
    return element.includes("iims");
});
console.log("search resutlt  is : ", matchSentence);

//filter and find
let numbers=[1,2,3,4,5,6,7,8,9];
const random= numbers.filter(function(element){
    return element > 4 ;
});
console.log(random);
const someNumbers= numbers.find(function(element){
    return element > 4 ;
});
console.log(someNumbers);
*/
// function sums(nums, target){

//     let user = [];
//     let check_user= false;
//     i=0;
//     while (i < nums.length && !check_user) {
//         j=i +1;
//         while(j< nums.length && !check_user){
//             if (nums[i]+nums[j]==target){
//                 check_user= true;
//                 user.push(nums[i]);
//                 user.push(nums[j]);
//             }
//             j= j+1;
//         }
//         i= i +1;
//     }
//     return user;
// };

// console.log(sums([2,3,4,5,6,7,8,9],11));



//2 ta string lincha check the same alphabet of two same 

// function names(name1,name2){
//     i = 0;
//     what = name1.length;
//     what2= name2.length;
//     let alphabet = [];
//     while (i<what){
//         j=i+1;
//         while (j<what2){
//             if (name1[i]==name2[j]){
//                 alphabet.push(name1[i]);
               
//             }
//             j=j+1;
//         }
//         i=i+1;
//     }

// return alphabet;
// }
// console.log(names("mero name chai ram ho","ani ma chai ghar ma baschu"));

//  aray ma data haru cha tesma duplicate data cha ki nai 



// let counter  = 0 
// const interval = setInterval(function(){
//     counter=counter+1;
//     console.log(`current counter is :  ${counter}`);
// },10000)



// function examplePromise(){
//     return new Promise(function(resolve,reject){
//         resolve("hello world");
//     });
// }
// examplePromise()
// .then(function(result){
//     console.log("result is ", result);
// })



// let p = new Promise((resolve, reject) => {
//     a=10

//     if (a==20){
//         resolve("success")
//     }
//     else {
//         reject("unsuccessful")
//     };
// });
// p.then((message)=> {
//     console.log({message});
// }).catch((message)=>{
//     console.log({message});
// }).finally(()=>{
//     console.log("value saved")
// })




