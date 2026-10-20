// collection of data a list []
     //arrays name
let courses = ["WDD131", "REL250C","MKT353", "HUM110"]

console.log(courses[0]);
console.log(courses[4]);


//let coursesAndGPA = ["WDD131", 4, "rel250C", 4.3];
// Java script object
let courseAndGPA = {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner",


}

//console.log(coursesAndGPA[3]) //NO DO THIS DO IT LIKE THIS INSTEAD

console.log(courseAndGPA)

console.log(courseAndGPA.courseName)



//array object with in an object

let coursesAndGPA = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner",
        assignment: [
            {
                assignmentName:"W01 Prove",
                assignmentGrade: 89
            }
        ]
    },
    {
        courseName : "REL250C",
        courseGPA : 4,
        professor : "Brother"
    }

]

console.log(coursesAndGPA[1].courseName)
console.log(coursesAndGPA[0].assignment[0].assignmentGrade)


//looping through an array

for(let i = 0; i < coursesAndGPA.length; i++ ){
    console.log(coursesAndGPA[i].courseName)
    console.log(coursesAndGPA[i].courseGPA)
}

console.log("This is the for each loop")
// looping through with a foreach loop
coursesAndGPA.forEach(itm => console.log(itm.courseName));

coursesAndGPA.forEach(item => {
    console.log(item.courseName)
    console.log(item.courseGPA)
})


let body = document.querySelector("body");

// build out html dynamically based on array contents
coursesAndGPA.forEach(course => {
    let dynamicHTML = `
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h2>
        </div>
    `;
    body.innerHTML += dynamicHTML;

});
