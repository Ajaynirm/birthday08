const sun = new Image();
const moon = new Image();
const earth = new Image();

function init() {
    sun.src = "https://upload.wikimedia.org/wikipedia/commons/6/66/Sun_black.svg";
    moon.src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg";
    earth.src = "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg";
    sun.onload = () => {
        moon.onload = () => {
            earth.onload = () => {
                window.requestAnimationFrame(draw);
            };
        };
    };
}

function draw() {
    const ctx = document.getElementById("canvas").getContext("2d");

    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    const time = new Date();
    ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 40, 24); // Shadow
    ctx.drawImage(earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}

init();
