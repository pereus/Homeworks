let student = studentsMock.getStudent();
let list = studentsMock.getStudentList(12);

function average(numbers) {
    let sum = 0;
    let average;
    numbers.forEach(function(element) {
    sum += element;
    });
    return average = Math.round(sum / student.marks.length);
};
    
function median(numbers) {
    let median;
    let sortArr = numbers.sort((a, b) => a - b);
    if (sortArr.length % 2 === 0) {
    return median = ((sortArr[((sortArr.length / 2) - 2)] + sortArr[((sortArr.length / 2) - 1)]) / 2 );
    } else {
    return median = sortArr[Math.round((sortArr.length / 2) - 1)];
    };
};

function update(student) {
    student.average = average(student.marks),
    student.median = median(student.marks);
    return student;
};

function newFields(list) {
    list.forEach(student => {
student = update(student)
        });
        return list
};
newFields(list);

function sortStudents(list) {
    return list.sort((a, b) => a.average - b.average);
};
sortStudents(list)
    list.push(update(studentsMock.getStudent()));    

console.table(list);
console.log(list.map(e => `${e.name}  |  ${e.average}`).join('\n'));
console.table(list.filter(e => e.average < 50));


// ========================================= Alternative Code ==================================================

// function average(list) {
// list.forEach(student => {
//     let sum = 0;
// student.marks.forEach(function(element) {
//     sum += element;
// });
// student.average = Math.round(sum / student.marks.length);
// });
// };
// average(list);

// function unsuccessfulStudents(list) {
//     list.forEach(student => {
//         if (student.average < 50) {
//           student.unsuccessful = 'Unsuccesful'; 
//         };
//     });
//     };
//    unsuccessfulStudents(list);

// function median(list) {
//     let result = student.median;
//     list.forEach(student => {
//     let sortArr = student.marks.sort((a, b) => a - b);
//     if (sortArr.length % 2 === 0) {
//       student.median = ((sortArr[((sortArr.length / 2) - 2)] + sortArr[((sortArr.length / 2) - 1)]) / 2 );
//     } else {
//       student.median = sortArr[Math.round((sortArr.length / 2) - 1)];
//     };
// });
//  return result;
// };
//    median(list);

// function sortStudents(list) {
//     return list.sort((a, b) => a.average - b.average);
// };
// sortStudents(list)
//     list.push(update(studentsMock.getStudent()));    

// console.table(list);
// console.log(list.map(e => `${e.name}  |  ${e.average}`).join('\n'));
// console.table(list.filter(e => e.average < 50));