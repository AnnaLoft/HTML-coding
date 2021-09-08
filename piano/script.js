const PIANOKEYS = document.querySelectorAll('.piano-key');
const KEYS = document.getElementById("piano");
const fullscreenKey = document.getElementById('fullscreen');

const btnNotes = document.getElementsByClassName('btn-notes')[0];
const btnLetters = document.getElementsByClassName('btn-letters')[0];

function goFullscreen() {
    if (pianoState.isFullscreen) {
        document.exitFullscreen();
        pianoState.isFullscreen = false;
    }
    document.getElementsByTagName('body')[0].requestFullscreen();
    pianoState.isFullscreen = true;
}

function displayLetters(letters) {
    if (letters) {
        pianoState.displayLetters = true;
        btnNotes.classList.remove('btn-active');
        btnLetters.classList.add('btn-active');
        PIANOKEYS.forEach(key => {
            key.classList.add("letters");
        });
    } else {
        pianoState.displayLetters = false;
        btnLetters.classList.remove('btn-active');
        btnNotes.classList.add('btn-active');
        PIANOKEYS.forEach(key => {

            key.classList.remove("letters");
        });
    }
}

const pianoState = {
    mouseDown: false,
    isFullscreen: false,
    displayLetters: false
}

PIANOKEYS.forEach(key => {
    key.addEventListener('mousedown', (event) => {
        pianoState.mouseDown = true;
        event.target.classList.add("active");
        playNote(key);
    });

    key.addEventListener('mouseup', (event) => {
        pianoState.mouseDown = false;
        event.target.classList.remove("active");
    });

    key.addEventListener('mouseover', (event) => {
        if (pianoState.mouseDown) {
            playNote(key);
        }
    });
});


KEYS.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            playNote(PIANOKEYS[0]);
            PIANOKEYS[0].classList.add("active");
            break;
        case 'f':
            playNote(PIANOKEYS[1]);
            PIANOKEYS[1].classList.add("active");
            break;
        case 'g':
            playNote(PIANOKEYS[2]);
            PIANOKEYS[2].classList.add("active");
            break;
        case 'h':
            playNote(PIANOKEYS[3]);
            PIANOKEYS[3].classList.add("active");
            break;
        case 'j':
            playNote(PIANOKEYS[4]);
            PIANOKEYS[4].classList.add("active");
            break;
        case 'k':
            playNote(PIANOKEYS[5]);
            PIANOKEYS[5].classList.add("active");
            break;
        case 'l':
            playNote(PIANOKEYS[6]);
            PIANOKEYS[6].classList.add("active");
            break;
        case 'r':
            playNote(PIANOKEYS[7]);
            PIANOKEYS[7].classList.add("active");
            break;
        case 't':
            playNote(PIANOKEYS[8]);
            PIANOKEYS[8].classList.add("active");
            break;
        case 'u':
            playNote(PIANOKEYS[10]);
            PIANOKEYS[10].classList.add("active");
            break;
        case 'i':
            playNote(PIANOKEYS[11]);
            PIANOKEYS[11].classList.add("active");
            break;
        case 'o':
            playNote(PIANOKEYS[12]);
            PIANOKEYS[12].classList.add("active");
            break;

        default:
            break;
    }
});

KEYS.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            PIANOKEYS[0].classList.remove("active");
            break;
        case 'f':
            PIANOKEYS[1].classList.remove("active");
            break;
        case 'g':
            PIANOKEYS[2].classList.remove("active");
            break;
        case 'h':
            PIANOKEYS[3].classList.remove("active");
            break;
        case 'j':
            PIANOKEYS[4].classList.remove("active");
            break;
        case 'k':
            PIANOKEYS[5].classList.remove("active");
            break;
        case 'l':
            PIANOKEYS[6].classList.remove("active");
            break;
        case 'r':
            PIANOKEYS[7].classList.remove("active");
            break;
        case 't':
            PIANOKEYS[8].classList.remove("active");
            break;
        case 'u':
            PIANOKEYS[10].classList.remove("active");
            break;
        case 'i':
            PIANOKEYS[11].classList.remove("active");
            break;
        case 'o':
            PIANOKEYS[12].classList.remove("active");
            break;

        default:
            break;
    }
})


function playNote(piano) {
    const NOTEAUDIO = document.getElementById(piano.dataset.note);
    NOTEAUDIO.currentTime = 0;
    NOTEAUDIO.play();
}