// ========== 2.1 - Cú pháp ==========

const message = 'Chao bac Teo!';
alert(message);

{
  const msg = 'Chao trong block!';
  alert(msg);
}

// Viết nhiều lệnh trên một dòng
const test = 'Test'; console.log(test);

// ========== Khoảng trắng ==========
const msg1 = 'Chao bac Teo!';
alert(msg1);

// ========== Phân biệt chữ hoa/thường ==========
const myVariable = 'a';
const myvariable = 'b';
const MyVariable = 'c';
console.log(myVariable, myvariable, MyVariable);

// ========== Chú thích ==========
alert("Chao bac Teo"); // day la cau chao

/* đây là câu chào (nó sẽ xuất hiện trong một cửa sổ) */
alert("Chao bac Teo");

// ========== 2.2 - Kiểu dữ liệu ==========
console.log(typeof 'hi bac Teo');      // 'string'
console.log(typeof 123);               // 'number'
console.log(typeof true);              // 'boolean'
console.log(typeof {ten: 'van teo'});  // 'object'
console.log(typeof [1, 2, 3]);         // 'object'

// ========== 2.3 - Biến ==========
var tuoi = 20;
console.log(typeof(tuoi)); // number

tuoi = 'hai muoi';
console.log(typeof(tuoi)); // string

// let và const
let diem = 7;
diem = 8;
console.log(diem); // 8

// const không cho gán lại giá trị mới
const namSinh = 2000;
// namSinh = 2001; //  sẽ lỗi nếu bật lên

// Khai báo nhiều biến
let x = 1, y = 2, z = 3;
console.log(x, y, z);

// const với mảng
const arr = [1, 2, 3];
arr[0] = 4;
console.log(arr); // [4, 2, 3]

// const không cho gán lại mảng khác
const arr1 = [4, 5, 6];
// arr1 = [7, 8, 9]; // sẽ lỗi nếu bật lên
