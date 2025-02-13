document.addEventListener("DOMContentLoaded", function() {
    setInterval(() => {
        createHeart();
    }, 500);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    document.getElementById("heartContainer").appendChild(heart);

    // ตั้งค่าตำแหน่งเริ่มต้นแบบสุ่ม
    const startX = Math.random() * 100;
    heart.style.left = startX + "vw";
    heart.style.top = "100vh";

    // กำหนดขนาดแบบสุ่ม
    const size = Math.random() * 20 + 10; // ขนาดระหว่าง 10px - 30px
    heart.style.fontSize = size + "px";

    // กำหนดความเร็วการลอยขึ้นแบบสุ่ม
    const duration = Math.random() * 3 + 2; // 2s - 5s
    heart.style.animationDuration = duration + "s";

    // ลบหัวใจเมื่อแอนิเมชันจบ
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

    // เล่นเพลง
    const music = document.getElementById("bg-music");
    const musicButton = document.getElementById("toggle-music");

    let isPlaying = false;

    musicButton.addEventListener("click", function() {
        if (isPlaying) {
            music.pause();
            musicButton.textContent = "🎵 Play Music";
        } else {
            music.play();
            musicButton.textContent = "⏸ Pause Music";
        }
        isPlaying = !isPlaying;
    });
}
