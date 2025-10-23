function anEmail(email) {
    email = email.trim();

    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        return "Email không hợp lệ";
    }

    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    if (username.length <= 3) {
        return email;
    }

    const visiblePart = username.slice(0, 5);

    return visiblePart + "..." + domain;
}
// Dữ liệu test email
const dsEmail = [
    "robin_singh@example.com",
    "abc@example.com",
    "  longusername123@test.com  ",
    "invalidemail"
];

// Hiển thị kết quả ẩn email
const ketQuaEmailDiv = document.getElementById("ketqua-email");
dsEmail.forEach(email => {
    ketQuaEmailDiv.innerHTML += `<p><strong>Email gốc:</strong> ${email} <br> <strong>Email ẩn:</strong> ${anEmail(email)}</p>`;
});
