function tachHoTen(hoTen) {
    const parts = hoTen.trim().split(" ");
    let ho = "", tenLot = "", ten = "";

    if (parts.length === 1) {
        ten = parts[0];
    } else if (parts.length === 2) {
        [ho, ten] = parts;
    } else {
        ho = parts[0];
        ten = parts[parts.length - 1];
        tenLot = parts.slice(1, parts.length - 1).join(" ");
    }

    return { hoTen, ho, tenLot, ten };
}

const danhSachTen = [
    "Nguyen Van Teo",
    "Le Thi Bao Ngoc",
    "Teo",
    "Nguyen Teo"
];

const ketQuaDiv = document.getElementById("ketqua");

danhSachTen.forEach(name => {
    const { hoTen, ho, tenLot, ten } = tachHoTen(name);
    ketQuaDiv.innerHTML += `
        <p><strong>Họ tên:</strong> ${hoTen} <br>
        Họ: <strong>${ho}</strong>, 
        Tên lót: <strong>${tenLot}</strong>, 
        Tên: <strong>${ten}</strong></p>
    `;
});
