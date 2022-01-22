/*
const form = document.querySelector('#user-form');
const sp_courses = {
    1:'Javascript',
    2:'Java',
    3:'Python'
}

const sp_age = {
    1:'18-30',
    2:'31-45'
}

form.onsubmit = function () {
    const userName = document.querySelector('#userName').value;
    const courses = document.querySelectorAll('.course:checked');
    const age = document.querySelector('.age:checked').value;
    console.log(courses);

    let arrCourses = [];
    courses.forEach((item) => {
        arrCourses.push(sp_courses[item.value]);
    })

    const object = {
        userName,
        courses:arrCourses,
        age:sp_age[age]
    }
    console.log(object);
}

let object = {
    userName:'JD',
    courses:['Javascript', 'Java'],
    age:'18-31'
}*/



const form = document.querySelector('#user-form');
const sp_courses = {
    1:'Javascript',
    2:'Java',
    3:'Python'
}

const sp_age = {
    1:'18-30',
    2:'31-45'
}

form.onsubmit = function () {
    const userName = document.querySelector('#userName').value;
    const courses = document.querySelectorAll('.course:checked');
    const age = document.querySelector('.age:checked').value;
    console.log(courses);

    let arrCourses = [];
    courses.forEach((item) => {
        arrCourses.push(sp_courses[item.value]);
    })

    const object = {
        userName,
        courses:arrCourses,
        age:sp_age[age]
    }
    console.log(object);
}

let object = {
    userName:'JD',
    courses:['Javascript'],
    age:'18-31'
}