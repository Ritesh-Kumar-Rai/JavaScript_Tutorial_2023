// Object Destructuring

const course = {
    coursename : 'JavaScript for Beginners Hindi',
    Duration : '10+ Hours',
    Price : 999,
    "Course Instructor" : 'Ritesh Kumar Rai'
};

// access it
// console.log(course["Course Instructor"]);

// How to Destructure
const {coursename} = course;

// For special key or case you can define an custom name
const {"Course Instructor": course_in} = course;

console.log(coursename);
console.log(course_in);




// In React instead of using props.parameter_name you can use destrcuturing

/*
const navbar = ({loggedIn}) =>{
    // ... 
    
}

navbar(loggedIn = 'true');
*/