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