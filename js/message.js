document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.addEventListener("click", function() {
        envelope.classList.add("hidden"); // ซ่อนซองจดหมาย
        letter.style.display = "block"; // แสดงกระดาษจดหมาย
    });
});
