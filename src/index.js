const sample = {
    name: "javi",
    age: 18,
    approvedCourses: ["class 1"],
    addCourse(newCourse){
        console.log("this", this)
        console.log("this.approvedCourse", this.approvedCourses)
        this.approvedCourses.push(newCourse);
    }
}

// console.log(Object.keys(sample))
// console.log(Object.getOwnPropertyNames(sample))
// console.log(Object.entries(sample))
console.log(Object.getOwnPropertyDescriptors(sample))


Object.defineProperties(sample, "NASATest", {
    value: "extraterrestrial",
    enumerable: false,
    writable: false,
    configurable: false
})

sample.addCourse("class 2")



// Shallow copy 

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    editA() {
        this.a = 'string'
    }
 };

const obj2 = {}
for (prop in obj1) {
    obj2[prop] = obj1[prop] 
};

const obj3 = Object.assign({}, obj1);

const obj4 = Object.create(obj1);


// JSON.parse & JSON.stringify

const stringifiedComplexObj = JSON.stringify(obj1);

const obj5 = JSON.parse(stringifiedComplexObj);



// function recursive() {
//     if (true){

//     }else {

//     }
// }


const numbers = [0,1,2,3,4,5,6,77,6556455,3,2]
let number = 0;
for (let index = 0; index < numbers.length; index++) {
    number = numbers[index];
    console.log({index, number});
}


function recursive(numbersArray) {
    if(numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum)
        
        numbersArray.shift()
        recursive(numbersArray)
    }
}