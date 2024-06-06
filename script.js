function fireworksAnimation() {
    var duration = 1000 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        var timeLeft = end - Date.now();

        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());
}

function birthdayAnimation() {
    var duration = 14* 1000;
    var end = Date.now() + duration;

    (function frame() {
        var timeLeft = end - Date.now();

        confetti({
            particleCount: 7,
            angle: 90,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#bb0000', '#ffffff']
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());
}

// Trigger the fireworks and birthday animations on page load
window.onload = function() {
    //fireworksAnimation();
    setTimeout(birthdayAnimation, 3000); // Delay birthday animation by 5 seconds
    setTimeout(fireworksAnimation,18000);
};
