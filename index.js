function hitRat() {
    var damage = new Audio("snd/snd_damage.wav")
    var defeat = new Audio("snd/snd_vaporized.wav") 
    const pfp = document.getElementById("pfp");
    const gif = document.getElementById("pfpHit");

    gif.src = "";
    gif.src = "anim/Hit.gif?" + new Date().getTime();
    gif.style.display = "block";

    hitSound()

    setTimeout(() => {
        gif.style.display = "none";
        damage.play();
        depleteHealth();
    }, 500);

    setTimeout(() => {
        defeat.play();
        document.getElementById("FIGHT");
    }, 1000);
}

function hitSound() {
    var sound = new  Audio("snd/snd_laz.wav");  
    sound.play();
}

let i = 0;

function depleteHealth() {
    document.getElementById("healthBar").style.display = "block";

    const dmg = document.getElementById("dmgDealt");

    dmg.src = "";
    dmg.src = "anim/dmgDealt.gif?" + new Date().getTime();
    dmg.style.display = "block";


    if (i == 0) {
        i = 1;
        const progress = document.getElementById("healthBarProgress");
        let width = 100;

        const id = setInterval(frame, 5);

        function frame() {
            if (width > 0) {
                width -= 1;
                progress.style.width = width + "%";
            } else {
                clearInterval(id);
                i = 0;
            }
        }
    }
}

function WARNING() {
    window.confirm("THIS IS A WARNING!");
}