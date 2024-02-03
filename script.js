
var nextBtn = document.getElementById('next-btn');
var context = document.getElementById('context');
var slider = document.getElementById('slider-box');
var slides = document.getElementById('slides');
var sliderElements = slider.querySelectorAll('li');
var slideSect = document.getElementById('slide-sect');
var pageNum = 0;
const imagePath = "images/";
var images = ['','','black.png',
    'edi.jpg',
    'multiverse-bg.jpg',
    'edi.jpg',
    'multiverse-bg.jpg',
    'edi.jpg',
];

nextBtn.addEventListener('click', (e) => {
    loadPage(pageNum);
    setBackground(pageNum);
    pageNum++;

    if(pageNum > images.length - 2) nextBtn.style.display = "none";
    console.log(pageNum)
})

function loadPage(pageNumber) {
    sliderElements[pageNumber].classList.add('fadeOutElement')

    switch(pageNumber) {
        case 0:
            context.textContent = "Well, I do!"
            break;
        case 1:
            context.textContent = "And I think.."
            break;
        case 2:
            context.textContent = "no, I believe.."
            break;
        case 3:
            context.textContent = "it's us.."
            break;
        case 4:
            context.textContent = "in each.."
            break;
        case 5:
            context.textContent = "and everyone.."
            break;
        case 6:
            context.textContent = "of them."
            break;
    }
}



function setBackground(pageNumber) {
    if(images[pageNumber] == ''){
        switch(pageNumber) {
            case 0:
                setTimeout(function() {
                    slideSect.style.backgroundColor = "var(--primary-2)";
                }, 100);
                break;
            case 1:
                setTimeout(function() {
                    slideSect.style.backgroundColor = "var(--primary-3)";
                }, 100);
                break;
            case 2:
                setTimeout(function() {
                    slideSect.style.backgroundColor = "var(--primary-4)";
                }, 100);
                break;
        }
    }
    else {
        setTimeout(function() {
            slideSect.style.backgroundImage = 'url("' + imagePath + images[pageNumber] +'")';
        }, 100); // Delay in milliseconds
    }
}

const jsConfetti = new JSConfetti({ slideSect })
document.getElementById('btn-heart').addEventListener('click', (e) => {
    jsConfetti.addConfetti({
        emojis: [ '💜', '🧡', '💚', '😘', '🥰', '🤗'],
     })
})




// yesBtn.addEventListener('click', (e) => {
//     sliderElements[pageNum].classList.add('fadeOutElement')
//     if(pageNum < sliderElements.length) pageNum++
//     else pageNum = 0;
// })


// short typewriting
// 1. env and soc  relation
// 2. soc do that affect env (way for soc to not affect env)  
// 3. developed country have resources others do not (facts of env soc or artical for better env)