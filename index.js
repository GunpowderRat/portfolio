const damage = new Audio("snd/snd_damage.wav");
const defeat = new Audio("snd/snd_vaporized.wav");
const lvlup = new Audio("snd/snd_levelup.wav");
const eerie = new Audio("mus/nobodycame_yellow.ogg");
const hurt = new Audio("snd/snd_ehurt1.wav");
const hit = new  Audio("snd/snd_laz.wav");  

const hdDalv = new Audio("mus/honeydew_dalv.ogg");
const hdRuins = new Audio("mus/honeydew_ruins.ogg");
const hdSnow = new Audio("mus/honeydew_snow.ogg");
const mixin = new Audio("mus/mixin_it_up.ogg");
const pipinHot = new Audio("mus/pipin_hot_yellow.ogg");
const shop = new Audio("mus/shop.ogg");
const moMoney = new Audio("mus/UNDERTALE YELLOW Soundtrack - 21 Mo Money.ogg");
const macroLens = new Audio("mus/UNDERTALE YELLOW Soundtrack - 84 Through The Macro Lens.ogg");

const hdDalvName = " Honeydew Hideaway - Undertale Yellow Soundtrack - NoteBlock, MasterSwordRemix";
const hdRuinsName = " Honeydew Ruins - Undertale Yellow Soundtrack - NoteBlock, Toby Fox";
const hdSnowName = " Honeydew Snow - Undertale Yellow Soundtrack - NoteBlock";
const mixinName = " Mixin' It Up - Undertale Yellow Soundtrack - emBer";
const pipinHotName = " Pipin' Hot - Undertale Yellow (Unused) Soundtrack";
const shopName = " Shop - Undertale Soundtrack - Toby Fox";
const moMoneyName = " Mo Money - Undertale Yellow Soundtrack - NoteBlock";
const macroLensName = " Through The Macro Lens - Undertale Yellow Soundtrack - MasterSwordRemix";

var currentlyPlaying = "♫ - Playing:";

var cTrack = document.getElementById("currentTrack");
var soundtrack = [hdDalv, hdRuins, hdSnow, mixin, pipinHot, shop, moMoney, macroLens];

function music() {
    let i = Math.floor(Math.random() * 8);

    soundtrack.forEach(audio => {
        audio.pause();
    });

    switch (i) {
        case 0:
            hdDalv.play();
            cTrack.textContent = currentlyPlaying + hdDalvName;
            break;

        case 1:
            hdRuins.play();
            cTrack.textContent = currentlyPlaying + hdRuinsName;
            break;

        case 2:
            hdSnow.play();
            cTrack.textContent = currentlyPlaying + hdSnowName;
            break;

        case 3:
            mixin.play();
            cTrack.textContent = currentlyPlaying + mixinName;
            break;
        
        case 4:
            pipinHot.play();
            cTrack.textContent = currentlyPlaying + pipinHotName;
            break;

        case 5:
            shop.play();
            cTrack.textContent = currentlyPlaying + shopName;
            break;

        case 6:
            moMoney.play();
            cTrack.textContent = currentlyPlaying + moMoneyName;
            break;

        case 7:
            macroLens.play();
            cTrack.textContent = currentlyPlaying + macroLensName;
            break;

        default:
            break;
    }
}

function hitRat() {
    const pfp = document.getElementById("pfp");
    const gif = document.getElementById("pfpHit");
    const button = document.getElementById("FIGHT");

    document.getElementById("musicButton").disabled = true;
    cTrack.textContent = currentlyPlaying + " ...";

    soundtrack.forEach(audio => {
        audio.pause();

        });

    gif.src = "";
    gif.src = "anim/Hit.gif?" + new Date().getTime();
    gif.style.display = "block";

    hit.play();

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
    
    sound.play();
}

function depleteHealth() {
    document.getElementById("healthBar").style.display = "block";

    const dmg = document.getElementById("dmgDealt");

    dmg.src = "";
    dmg.src = "anim/dmgDealt.gif?" + new Date().getTime();
    dmg.style.display = "block";

    let i = 0;

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

// randint between 0 - [NUMBER OF MUS].
// automatically switch song after the current one ends
// button to mute .play();
