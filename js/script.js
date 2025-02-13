document.getElementById("loveButton").addEventListener("click", function() {
    for (let i = 0; i < 15; i++) {
        createHeart();
    }

    const flowerPopup = document.getElementById("flowerPopup");

    // ซ่อนโปสเตอร์
    poster.classList.add("hidden");
    
    // แสดงดอกไม้ Pop-up
    flowerPopup.classList.add("show");

    // หลังจาก 2.5 วินาที ค่อย ๆ จางหายไป
    setTimeout(() => {
        flowerPopup.style.opacity = "0";
    }, 3500);

    // เปลี่ยนหน้าไป gallery.html หลังจาก 3 วินาที
    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 4000);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

