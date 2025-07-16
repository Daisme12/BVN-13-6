// let user_count = 0;

// const user_form = document.getElementById("user_from");
// const user_table_Body = document.getElementById("user_table");

// user_form.addEventListener('submit',function(event){
// event.preventDefault()
// const name = document.getElementById("name").value;
// const age = document.getElementById("age").value;
// const gender = document.querySelector('input[name ="Gender"]:checked')?.value;

// if ( !name ||  !age || !gender){
//     alert("Nhập đầy đủ thông tin");
//     return;
// }
// user_count++;

// const row = document.createElement("tr")
//     row.innerHTML = `
//         <td>${user_count}</td>
//         <td>${name}</td>
//         <td>${age}</td>
//         <td>${gender}</td>
//         <td> <button class="deleteBTN">Xoá</button> </td>
//     `;

//     user_table_Body.appendChild(row);
//     user_form.reset();

//     row.querySelector(".deleteBTN").addEventListener("click",function() {
//         row.remove();
//     });
// });

// let numbers = [5, 3, 9, 1];
// numbers.unshift(7);
// numbers.pop();
// numbers.splice(1, 1);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item, index) => {
//     if (item % 2 === 0) {
//         console.log(item);
//     }
// })

// const newNumbers = numbers.map((item, index) => {
//     return item * 2;
// })
// console.log(newNumbers);

// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum)


// let book = {
//     title: "Doraemon và Nobita",
//     author: "Phát",
//     pages: "Youtube"
// }
// console.log(book.title, " : ", book.author);

// let student = {
//     info: {
//         name: "Phát",
//         age: "18"
//     },
//     gardes: {
//         math: "8",
//         english: "9"
//     }
// }
// student.gardes.math
// student.info.name = "Tỷ";

// student.info.address = "hàng buồm";
// console.log(student)


// const student = [
//     { name: "Phát", score: 8 },
//     { name: "Phát", score: 2 },
//     { name: "Phát", score: 7 },
//     { name: "Phát", score: 9 },
// ];
//     let diem_max = student[0].score;
//     let vitri = 0;
// student.forEach(function(item, index) {
//     if(item.score > diem_max){
//         diem_max = item.score;
//         vitri = index;
//     }
// });
// console.log("Điểm cao nhất:", diem_max);

// const new_student = student.filter(item => {
//     return item.score >= 5 ; 
// });
// console.log("Điểm lớn hơn 5", new_student);

// const find_student = student.find(item => item.score <= 3);

// if (find_student){
//     console.log("Có điểm lớn hơn 3");
// }
// else{
//     console.log("Ko có điểm lớn hơn 3");
// }

const students = [
{ id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
{ id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
{ id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
{ id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
{ id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
];

students.forEach((item, index)=> {
    console.log("Tên:",item.name ,"- Tuổi: ", item.age );
})

const newStudent = students.map((item, index)=> {
    const scores = item.scores;
    const sum = scores.reduce((total, score) => total + score, 0);
    const avg = sum / scores.length;

    return {
        name: item.name,
        AVG: avg.toFixed(2)
    };
})
console.log(newStudent)

const firs = students.find(s => s.age >= 17);
console.log('Học sinh đầu tiên có tuổi >= 17:', firs);

const hasAvg = newStudent.some(s => s.avg < 5);
console.log('Có học sinh nào điểm trung bình dưới 5 không?', hasAvg);

const allAbove15 = students.every(s => s.age >= 15);
console.log('Tất cả học sinh có tuổi >= 15 không?', allAbove15);

const classAvg = newStudent.reduce((sum, s) => sum + parseFloat(s.AVG), 0) / newStudent.length;
console.log('Điểm trung bình toàn lớp:', classAvg.toFixed(2));