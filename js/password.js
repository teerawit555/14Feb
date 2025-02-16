function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    
    // 🔑 รายการรหัสผ่านที่อนุญาตให้เข้า
    const validPasswords = ["Bam", "bam", "น้องแบม", "แบม"]; 

    // 🔎 ตรวจสอบว่ารหัสที่ใส่ตรงกับรหัสที่ถูกต้องหรือไม่
    if (validPasswords.includes(password)) {
        localStorage.setItem("authenticated", "true"); // จดจำว่าผู้ใช้ล็อกอินแล้ว
        window.location.href = "home.html"; // 🔗 พาไปหน้าหลัก
    } else {
        document.getElementById("error-message").textContent = "❌ ผิดๆลองใส่ใหม่ๆๆ";
    }
}

// 📌 ฟังก์ชันจับปุ่ม `Enter`
document.getElementById("passwordInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword(); // เรียกฟังก์ชันล็อกอินเมื่อกด Enter
    }
});