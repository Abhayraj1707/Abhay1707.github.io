score = 0;
cross = true;

audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
setTimeout(() => {
    gameOver.innerHTML = "";
    audio.play()
}, 5000);

document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode);
    if (e.keyCode == 38) {
        pickahu = document.querySelector('.pickahu');
        pickahu.classList.add('animatePichu');
        setTimeout(() => {
            pickahu.classList.remove('animatePichu')
        }, 700);
    }
    if (e.keyCode == 39) {
        pickahu = document.querySelector('.pickahu');
        pickahuX = parseInt(window.getComputedStyle(pickahu, null).getPropertyValue('left'));
        pickahu.style.left = pickahuX + 112 + "px";
    }
    if (e.keyCode == 37) {
        pickahu = document.querySelector('.pickahu');
        pickahuX = parseInt(window.getComputedStyle(pickahu, null).getPropertyValue('left'));
        pickahu.style.left = (pickahuX - 112) + "px";
    }
}
setInterval(() => {
    pickahu = document.querySelector('.pickahu');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(pickahu, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(pickahu, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offSetX = Math.abs(dx - ox);
    offSetY = Math.abs(dy - oy);
    // console.log(offSetX, offSetY)
    if (offSetX < 73 && offSetY<100) {
        gameOver.innerHTML = "Game Over , Better luck next time - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offSetX < 145 && cross) {
        score += 1;
        UpdateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1500);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log("new duratioin: ", newDur);
        }, 1100);

    }
}, 10);
function UpdateScore(score) {
    scorecont.innerHTML = "Your Score " + score;
}
