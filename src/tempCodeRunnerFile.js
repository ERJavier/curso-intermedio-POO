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


function isObject(subject){
    return typeof subject == "object"
}

function isArray(subject){
    return Array.isArray(subject)
}



function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key])
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key]
            }
        }
    } 



    return copySubject
}


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




const studentBase = {
    name: undefined,
    email: undefined,
    age:  undefined,
    apprvedCoursed: undefined,
    learningPaths: undefined,
    socialMedia: {
        twiter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};


const juan2 = deepCopy(studentBase);

// cannot modify when seal
Object.seal(juan2)

// define properties lets you change configuration one by one
Object.defineProperties(juan, "name", {
    value: "juan",
    configurable: false,
})

// ask if it is sealed
Object.isSealed(juan2);

// juan.name = "juan",
// juan.age = 20

function requireParam(param) {
    throw new Error(param + " is a must")
}

function createStudent({
    name = requireParam("name"),
    email = requireParam("email"),
    age,
    socialMedia
}) {
    return {
        name: name,
        age: 18,
        socialMedia: {
            twiter: twiter
        }
    };
}

const juan = createStudent({
    name:"juanito",
    age: 29,

})