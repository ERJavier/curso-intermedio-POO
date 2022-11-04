const sample = {
    name: "javi",
    age: 18,
    approvedCourses: ["class 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

console.log(Object.keys(sample))
console.log(Object.getOwnPropertyNames(sample))
console.log(Object.entries(sample))