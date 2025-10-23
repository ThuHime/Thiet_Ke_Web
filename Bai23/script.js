// ======= 3.1 PHẠM VI =======

// Biến toàn cục
console.log("Biến toàn cục:");
const a = 5;
{
    console.log(a); // 5
}
console.log(a); // 5

// Biến cục bộ
console.log("Biến cục bộ:");
{
    const b = 10;
    console.log(b); // 10
}
// console.log(b); // Lỗi nếu bỏ comment

// Biến toàn cục & cục bộ trùng tên
console.log("Biến trùng tên:");
const c = 6;
{
    const c = 5;
    console.log(c); // 5
}
console.log(c); // 6

// Khai báo biến không dùng từ khóa
console.log("Không dùng từ khóa const/let:");
e = 7;
{
    console.log(e); // 7
    f = 8;
}
console.log(f); // 8


// ======= 3.2 KIỂU DỮ LIỆU STRING =======

console.log("String literals:");
const str1 = "Chao bac Teo";
const str2 = 'Chao cu Ti';
console.log(str1);
console.log(str2);

console.log("Chuỗi có dấu nháy:");
const str3 = "Chao bac's Teo";
const str4 = 'Chao "cu" Ti';
console.log(str3);
console.log(str4);

// Dùng backslash
console.log("Backslash:");
const str5 = 'Chao bac\'s Teo';
console.log(str5);

// Đối tượng String
console.log("Đối tượng String:");
const str6 = new String('Chao bac Teo');
console.log(str6);

// Thuộc tính & phương thức
console.log("Thuộc tính & phương thức:");
const str = 'hello';
console.log(str.length);         // 5
console.log(str.toUpperCase()); // HELLO
console.log(str.toLowerCase()); // hello
console.log(str.charAt(1));     // e
console.log(str.indexOf('o'));  // 4
console.log(str.indexOf('z'));  // -1

const str7 = 'Hello every one';
console.log(str7.lastIndexOf('e')); // 14

console.log(str.includes('e'));     // true
console.log(str.includes('z'));     // false
console.log(str.startsWith('h'));   // true
console.log(str.startsWith('H'));   // false
console.log(str.endsWith('o'));     // true
console.log(str.endsWith('H'));     // false

console.log(str.concat(' bac Teo')); // hello bac Teo
console.log(str + ' bac Teo');       // hello bac Teo

const name = '   nguyen van teo   ';
console.log(name.trim()); // nguyen van teo

const repeatStr = 'hi';
console.log(repeatStr.repeat(3)); // hihihi

const fullName = 'Nguyen Thi Van Teo';
console.log(fullName.slice(0, 6)); // Nguyen

const email = 'teonv@gmail.com';
const result = email.split('@');
console.log(result[0]); // teonv
console.log(result[1]); // gmail.com


// ======= 3.3 TEMPLATE STRING =======

console.log("Template string cơ bản:");
const ho = 'Nguyen', ten = 'Teo';
console.log(`Ho ten la: ${ho} ${ten}`);

console.log("Template nhiều dòng:");
const qty = 4;
const emailText = `
Xin chao ban ${ten},

Chung toi rat vui khi nhan duoc ${qty} don hang tu ban.

Cam on ban.
`;
console.log(emailText);

console.log("Xuất template HTML:");
const article = {
    title: 'Xuat template',
    body: 'Su dung template de xuat truc tiep len trang web'
};

document.body.innerHTML += `
<section>
    <header>
        <h1>Hoc React</h1>
    </header>
    <article>
        <h2>${article.title}</h2>
        <p>${article.body}</p>
    </article>
    <footer>
        <p>Copyright ${new Date().getFullYear()} | Hoc React</p>
    </footer>
</section>
`;
