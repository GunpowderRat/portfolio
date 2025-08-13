function hitRat() {
    let damage = new Audio("snd/snd_damage.wav");
    let defeat = new Audio("snd/snd_vaporized.wav");
    let lvlup = new Audio("snd/snd_levelup.wav");
    let eerie = new Audio("mus/nobodycame_yellow.ogg");
    let hurt = new Audio("snd/snd_ehurt1.wav");
    const pfp = document.getElementById("pfp");
    const gif = document.getElementById("pfpHit");
    const button = document.getElementById("FIGHT");

    gif.src = "";
    gif.src = "anim/Hit.gif?" + new Date().getTime();
    gif.style.display = "block";

    hitSound()

    setTimeout(() => {
        button.disabled = true;
        gif.style.display = "none";
        damage.play();
        hurt.play();
        depleteHealth();
    }, 500);

    setTimeout(() => {
        document.getElementById("pfp").style.opacity = "0";
        defeat.play();
    }, 1000);

    setTimeout(() => {
        document.getElementById("healthBar").style.opacity = "0";
        document.getElementById("dmgDealt").style.opacity = "0";

        lvlup.play();
    }, 2000);

    setTimeout(() => {
        eerie.play();
    }, 6000)
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
    window.confirm("THIS IS A WARNING!!");
}