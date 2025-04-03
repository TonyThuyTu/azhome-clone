document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    let phonePattern = /^[0-9]{10,11}$/;

    if (name === "") {
        alert("⚠️ Vui lòng nhập tên của bạn!");
        return;
    }

    if (email !== "" && !email.match(emailPattern)) {
        alert("⚠️ Vui lòng nhập đúng định dạng email!");
        return;
    }

    if (phone === "") {
        alert("⚠️ Vui lòng nhập số điện thoại!");
        return;
    } else if (!phone.match(phonePattern)) {
        alert("⚠️ Số điện thoại không hợp lệ! Vui lòng nhập 10-11 chữ số.");
        return;
    }

    if (message === "") {
        alert("⚠️ Vui lòng nhập lời nhắn!");
        return;
    }

    alert("✅ Gửi thông tin thành công!");
});