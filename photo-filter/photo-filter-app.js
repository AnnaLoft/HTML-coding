
window.addEventListener('DOMContentLoaded', () => {
    // Active mode for buttons
    function activeButtons() {
        const btns = document.querySelectorAll('.btn-container .btn');

        btns.forEach(btn => btn.addEventListener('click', function () {
            const current = document.getElementsByClassName('btn-active');
            current[0].className = current[0].className.replace(' btn-active', '');
            this.className += ' btn-active';
        }));
    }
    activeButtons();

    // Fullscreen mode
    const fullsreenButton = document.querySelector('.fullscreen')

    fullsreenButton.addEventListener('click', (e) => {
        function goFullScreen() {
            return document.fullscreenElement
        }
        if (goFullScreen()) {
            document.exitFullscreen()
        }
        document.documentElement.requestFullscreen()
    })

    // Filters
    const filterInputs = document.querySelectorAll('.filters input');
    const currentPic = document.querySelector('.photo');


    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        currentPic.style.setProperty(`--${this.name}`, this.value + suffix);

        const outputs = this.nextElementSibling;
        outputs.innerHTML = this.value;
    }
    // filterInputs.forEach(input => input.addEventListener('change', handleUpdate));
    filterInputs.forEach(input => input.addEventListener('mousedown' && 'mousemove', handleUpdate));



    // Presets
    const filterPicOldPhoto = document.getElementById('preset1');
    const filterColdTone = document.getElementById('preset2');
    const filterBrightTone = document.getElementById('preset3');
    const filterIntensiveColor = document.getElementById('preset4');
    const filterDarkCold = document.getElementById('preset5');
    const filterWnB = document.getElementById('preset6');
    const filterMutedTone = document.getElementById('preset7');
    const filterDimLights = document.getElementById('preset8');
    const filterFresh = document.getElementById('preset9');
    const filterNeutral = document.getElementById('preset10');
    const filterContrast = document.getElementById('preset11');
    const filterHot = document.getElementById('preset12');

    const updateStyle = (blur, invert, sepia, saturate, hueRotate, brigtness, contrast) => {
        return `--blur: ${blur}px;
        --invert: ${invert}%;
        --sepia: ${sepia}%;
        --saturate: ${saturate}%;
        --hue-rotate: ${hueRotate}deg;
        --brightness: ${brigtness}%;
        --contrast: ${contrast}%`;
    }

    const controllerInputs = Array.from(document.getElementsByClassName("controller"));
    const controllerOutputs = Array.from(document.getElementsByClassName("controller-output"));



    const updateInputs = (blur, invert, sepia, saturate, hue, brightness, contrast) => {
        controllerInputs.map(el => {
            switch (el.id) {
                case 'blur-controller':
                    el.value = blur;
                    break;
                case 'invert-controller':
                    el.value = invert;
                    break;
                case 'sepia-controller':
                    el.value = sepia;
                    break;
                case 'saturate-controller':
                    el.value = saturate;
                    break;
                case 'hue-controller':
                    el.value = hue;
                    break;
                case 'brightness-controller':
                    el.value = brightness;
                    break;
                case 'contrast-controller':
                    el.value = contrast;
                    break;
                default:
                    break;
            }
        })
    };

    const updateOutputs = (blur, invert, sepia, saturate, hue, brightness, contrast) => {
        controllerOutputs.map(el => {
            switch (el.id) {
                case 'blur-result':
                    el.innerHTML = `${blur}`;
                    break;
                case 'invert-result':
                    el.innerHTML = `${invert}`;
                    break;
                case 'sepia-result':
                    el.innerHTML = `${sepia}`;
                    break;
                case 'saturate-result':
                    el.innerHTML = `${saturate}`;
                    break;
                case 'hue-result':
                    el.innerHTML = `${hue}`;
                    break;
                case 'brightness-result':
                    el.innerHTML = `${brightness}`;
                    break;
                case 'contrast-result':
                    el.innerHTML = `${contrast}`;
                    break;
                default:
                    break;
            }
        })
    };

    const updateControls = (blur, invert, sepia, saturate, hue, brightness, contrast) => {
        updateInputs(blur, invert, sepia, saturate, hue, brightness, contrast);
        updateOutputs(blur, invert, sepia, saturate, hue, brightness, contrast);
    }

    // Old photo
    const presetOldPhoto = document.getElementById("preset1");
    presetOldPhoto.style.cssText = updateStyle(0, 18, 75, 72, 27, 83, 88);
    presetOldPhoto.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 18, 75, 72, 27, 83, 88);
        updateControls(0, 18, 75, 72, 27, 83, 88);
    }


    // Cold Tone
    const presetColdTone = document.getElementById("preset2");
    presetColdTone.style.cssText = updateStyle(0, 11, 0, 64, 331, 122, 155);
    presetColdTone.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 11, 0, 64, 331, 122, 155);
        updateControls(0, 11, 0, 64, 331, 122, 155);
    }

    // Bright Tone
    const presetBrightTone = document.getElementById("preset3");
    presetBrightTone.style.cssText = updateStyle(0, 5, 0, 190, 18, 93, 113);
    presetBrightTone.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 5, 0, 190, 18, 93, 113);
        updateControls(0, 5, 0, 190, 18, 93, 113);
    }

    // Intensive Color
    const presetIntensiveColor = document.getElementById("preset4");
    presetIntensiveColor.style.cssText = updateStyle(0, 3, 0, 200, 43, 127, 62);
    presetIntensiveColor.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 3, 0, 200, 43, 127, 62);
        updateControls(0, 3, 0, 200, 43, 127, 62);
    }

    // ColdDark
    const presetDarkCold = document.getElementById("preset5");
    presetDarkCold.style.cssText = updateStyle(0, 9, 0, 153, 316, 58, 115);
    presetDarkCold.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 9, 0, 153, 316, 58, 115);
        updateControls(0, 9, 0, 153, 316, 58, 115);
    }
    // Black&White
    const presetBnW = document.getElementById("preset6");
    presetBnW.style.cssText = updateStyle(0, 11, 0, 0, 0, 100, 200);
    presetBnW.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 11, 0, 0, 0, 100, 200);
        updateControls(0, 11, 0, 0, 0, 100, 200);
    }
    // Muted Tone
    const presetMutedTone = document.getElementById("preset7");
    presetMutedTone.style.cssText = updateStyle(0, 17, 0, 187, 0, 159, 64);
    presetMutedTone.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 17, 0, 187, 0, 159, 64);
        updateControls(0, 17, 0, 187, 0, 159, 64);
    }

    // Dim lights
    const presetDimlights = document.getElementById("preset8");
    presetDimlights.style.cssText = updateStyle(0, 0, 42, 143, 337, 93, 141);
    presetDimlights.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 0, 42, 143, 337, 93, 141);
        updateControls(0, 0, 42, 143, 337, 93, 141);
    }
    // Fresh
    const presetFresh = document.getElementById("preset9");
    presetFresh.style.cssText = updateStyle(0, 14, 0, 100, 312, 162, 114);
    presetFresh.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 14, 0, 100, 312, 162, 114);
        updateControls(0, 14, 0, 100, 312, 162, 114);
    }
    // Neutral
    const presetNeutral = document.getElementById("preset10");
    presetNeutral.style.cssText = updateStyle(0, 12, 48, 100, 43, 75, 132);
    presetNeutral.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 12, 48, 100, 43, 75, 132);
        updateControls(0, 12, 48, 100, 43, 75, 132);
    }

    // Contrast
    const presetCotrast = document.getElementById("preset11");
    presetCotrast.style.cssText = updateStyle(0, 0, 35, 100, 357, 145, 200);
    presetCotrast.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 0, 35, 100, 357, 145, 200);
        updateControls(0, 0, 35, 100, 357, 145, 200);
    }
    // Hot
    const presetHot = document.getElementById("preset12");
    presetHot.style.cssText = updateStyle(0, 17, 0, 136, 330, 87, 140);
    presetHot.onclick = () => {
        currentPic.style.cssText = updateStyle(0, 17, 0, 136, 330, 87, 140);
        updateControls(0, 17, 0, 136, 330, 87, 140);
    }


    // Slider

    let i = 1;
    for (let li of carousel.querySelectorAll('li')) {
        li.style.position = 'relative';
        i++;
    }

    let width = 170;
    let count = 4;

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0;

    carousel.querySelector('.arrow-prev').onclick = function () {

        position += width * count;

        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
       
    };

    carousel.querySelector('.arrow-next').onclick = function () {
    
        position -= width * count;

        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
       
    };




    // Reset
    const btnReset = document.querySelector('.btn-reset');

    function handleReset() {
        filterInputs.forEach(input => {
            // console.log(`pre: ${input.name} - ${input.value}`);
            input.name === 'saturate' || input.name === 'contrast' || input.name === 'brightness' ? input.value = 100 : input.value = 0;
            // console.log(`after: ${input.name} - ${input.value}`);

            currentPic.style.setProperty(`--${input.name}`, input.value + (input.dataset.sizing || ''));

            const outputs = input.nextElementSibling;
            outputs.innerHTML = input.value;
        });
    }
    btnReset.addEventListener('click', handleReset);

    // Load picture
    function loadPic() {
        const fileInput = document.querySelector('input[type="file"]');
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                currentPic.src = reader.result;
                filterPicOldPhoto.src = reader.result;
                filterColdTone.src = reader.result;
                filterBrightTone.src = reader.result;
                filterIntensiveColor.src = reader.result;
                filterDarkCold.src = reader.result;
                filterMutedTone.src = reader.result;
                filterDimLights.src = reader.result;
                filterWnB.src = reader.result;
                filterFresh.src = reader.result;
                filterNeutral.src = reader.result;
                filterContrast.src = reader.result;
                filterHot.src = reader.result;
            }
            reader.readAsDataURL(file);
            fileInput.value = null;
        });
    }
    loadPic();



    // Save picture
    function createPic() {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        function createCanvas(img) {
            let filters = '';
            canvas.width = img.width;
            canvas.height = img.height;

            filterInputs.forEach(input => {
                if (input.name === 'blur') {
                    const blurScale = input.value * (img.height / currentPic.height);
                    filters += `${input.name}(${blurScale}${input.dataset.sizing})`;
                } else {
                    filters += `${input.name}(${input.value}${input.dataset.sizing})`;
                }
            });

            ctx.filter = filters.trim();
            ctx.drawImage(img, 0, 0);
        }

        function savePic() {
            const btnSavePicture = document.querySelector('.btn-save');

            btnSavePicture.addEventListener('click', () => {
                const img = new Image();
                img.setAttribute('crossOrigin', 'anonymous');
                img.src = currentPic.src;
                img.onload = () => {
                    createCanvas(img);
                    const dataURL = canvas.toDataURL("image/png");
                    const link = document.createElement('a');
                    link.download = 'download.png';
                    link.href = dataURL;
                    link.click();

                };
            });
        }
        savePic();
    }
    createPic();

    // Get pics

    function getPicture() {
        const buttonNextPic = document.querySelector('.btn-next');
        const imagesLink = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';

        let timer = new Date()
        let now = timer.getHours()

        function getLink() {
            const hour = new Date().getHours();
            if (now === 0 || now === 1 || now === 2 ||
                now === 3 || now === 4 || now === 5) {
                return imagesLink + 'night/'
            } else if (now === 6 || now === 7 || now === 8
                || now === 9 || now === 10 || now === 11) {
                return imagesLink + 'morning/'
            } else if (now === 12 || now === 13 || now === 14
                || now === 15 || now === 16 || now === 17) {
                return imagesLink + 'day/'
            } else if (now === 18 || now === 19 || now === 20
                || now === 21 || now === 22 || now === 23) {
                return imagesLink + 'evening/'
            }
        }

        const picsArray = ['01.jpg',
            '02.jpg',
            '03.jpg',
            '04.jpg',
            '05.jpg',
            '06.jpg',
            '07.jpg',
            '08.jpg',
            '09.jpg',
            '10.jpg',
            '11.jpg',
            '12.jpg',
            '13.jpg',
            '14.jpg',
            '15.jpg',
            '16.jpg',
            '17.jpg',
            '18.jpg',
            '19.jpg',
            '20.jpg'];
        let slideIndex = 0;
        let isUsed = false;

        function nextPicture() {
            if (isUsed = false) {
                const picSrc = getLink() + picsArray[slideIndex];

                currentPic.src = picSrc;

                filterPicOldPhoto.src = picSrc;
                filterColdTone.src = picSrc;
                filterBrightTone.src = picSrc;
                filterIntensiveColor.src = picSrc;
                filterDarkCold.src = picSrc;
                filterWnB.src = picSrc;
                filterMutedTone.src = picSrc;
                filterDimLights.src = picSrc;
                filterFresh.src = picSrc;
                filterNeutral.src = picSrc;
                filterContrast.src = picSrc;
                filterHot.src = picSrc;
                isUsed = true;
            } else {
                if (slideIndex == picsArray.length - 1) {
                    slideIndex = 0;
                } else {
                    slideIndex++;
                }
                const picSrc = getLink() + picsArray[slideIndex];
                currentPic.src = picSrc;
                filterPicOldPhoto.src = picSrc;
                filterColdTone.src = picSrc;
                filterBrightTone.src = picSrc;
                filterIntensiveColor.src = picSrc;
                filterDarkCold.src = picSrc;
                filterWnB.src = picSrc;
                filterMutedTone.src = picSrc;
                filterDimLights.src = picSrc;
                filterFresh.src = picSrc;
                filterNeutral.src = picSrc;
                filterContrast.src = picSrc;
                filterHot.src = picSrc;
            }
        }
        buttonNextPic.addEventListener('click', nextPicture);


    }
    getPicture();

});
