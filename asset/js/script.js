const windowShutter = document.querySelector('#windowShutter')
const windowTxt = document.querySelector('#windowTxt')
const windowAirplane = document.querySelector('#windowAirplane')
const sectionOne = document.querySelector('#section1')
const sectionTwo = document.querySelector('#section2')
const sectionThree = document.querySelector('#section3')
const sectionFour = document.querySelector('#section4two')
const sectionFourBottom = document.querySelector('#section4Three')
const sectionFourAbove = document.querySelector('#section4one')
const sectionFive = document.querySelector('#section5')
const sectionTwoTxt = document.querySelectorAll('section>#section2>span')
const menu = document.querySelector('#menu')
const airplane = document.querySelector('#airplane')
const reverseSec = document.querySelector('#reverseSec')
const cabinPlan = document.querySelector('#cabinPlan')
const footer = document.querySelector('#section4Footer')
const moveFooter = document.querySelector('#moveFooter');
const myName = document.querySelector('#myname')
const myPic = document.querySelector('#mypic')
const card = document.querySelector('#cardmove')

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

let logo = windowTxt.children[0].children[0]

logo.addEventListener('click', () => {
    window.scrollTo(0, 0);
})


let targetTop = 100;
let initialTop = 100;
// footer
let st = 0
let oldScroll = 0
let triggered = false
// ****
let windowTxtpos = 400
windowTxt.style.transform = 'translateY(' + windowTxtpos + 'px)'
// ****
let fourH = sectionFour.clientHeight
// ****

let h = windowShutter.clientHeight
let duration = 2000
let step = 16

let progress = h / (duration / step)

const close = setInterval(() => {
    h -= progress
    if (h <= 0) {
        h = 0

        clearInterval(close)
    }
    windowShutter.style.height = h + 'px'

}, step);

// windowShutter

let sectionHeight1 = sectionOne.clientHeight
let moveTxtprogress = windowTxtpos / (duration / step)



//reverse scroll

window.addEventListener('scroll', () => {
    st = window.scrollY

    let progress = Math.min((st / sectionHeight1), 1)
    let scZ = progress * 800
    let opSec1 = 1 - progress
    const scale = 1 + (progress * 0.9)

    windowAirplane.style.transform = 'translateZ(' + scZ + 'px) scale(' + scale + ')'
    windowAirplane.style.opacity = opSec1


    if (st > oldScroll) {
        const moveTxet = setInterval(() => {
            windowTxtpos -= moveTxtprogress
            if (windowTxtpos <= 0) {
                windowTxtpos = 0
                clearInterval(moveTxet)
            }
            windowTxt.style.transform = 'translateY(' + windowTxtpos + 'px)'

        }, step);

    } else if (st < window.innerHeight) {
        const moveTxet = setInterval(() => {
            windowTxtpos += moveTxtprogress
            if (windowTxtpos > 400) {
                windowTxtpos = 400
                clearInterval(moveTxet)
            }
            windowTxt.style.transform = 'translateY(' + windowTxtpos + 'px)'
        }, step);
    }


    // section1





    if (st > 4000 && st < 8800) {

        menu.classList.remove('*:text-white')
        menu.classList.add('*:text-brown')
        logo.setAttribute('src', 'asset/img/jeskoLogo.webp')

    } else {

        menu.classList.remove('*:text-brown')
        menu.classList.add('*:text-white')
        logo.setAttribute('src', 'asset/img/jeskoLogocopy.webp')

    }
    // // changeMenuColor
    const start = 5000
    const range = 1000

    let progs = (st - start) / range
    progs = Math.max(0, Math.min(progs, 1))
    let progs2 = Math.max(0, Math.min(progs, 0.6))
    const initialHeight = airplane.parentElement.clientHeight;






    // //reverse scroll/
    if (st <= 4000) {

        reverseSec.style.position = 'absolute'
        reverseSec.style.top = '-100vh'
        sectionFourAbove.style.opacity = '0'
        sectionFive.style.position = 'relative'
        sectionFive.style.top = ''


    } else if (st > 4000 && st < 5000) {

        reverseSec.style.position = 'fixed'
        reverseSec.style.top = '-100vh'
        sectionFourAbove.style.opacity = '1'

    } else if (st > 5000 && st < 7000) {


        reverseSec.style.position = 'fixed'
        reverseSec.style.top = (-100 + progs * 100) + 'vh'
        // plane
        airplane.style.scale = (1 - progs2)
        airplane.parentElement.style.position = 'fixed'
        airplane.parentElement.style.top = '-50vh'

        if (st > 6000) {
            sectionFourBottom.style.opacity = '1'
            sectionFive.style.overflow = 'hidden'
            sectionFive.style.height = ((1 - progs) * initialHeight) + 'px'
            cabinPlan.style.opacity = progs

        } else {
            sectionFourBottom.style.opacity = '0'
            sectionFive.style.overflow = ''
            sectionFive.style.height = initialHeight + 'px'
        }
    } else {
        airplane.style.scale = Math.min(progs, 1)
        reverseSec.style.position = 'absolute'
        reverseSec.style.top = '3000px'
        sectionFive.style.position = 'relative'
        sectionFive.style.top = ''
    }


    // footer

    targetTop = st > 8800 ? -100 : 100;

    // footer

    oldScroll = st

})
//  end scroll

// acc
const accLi = document.querySelectorAll('#acc>li')
const accP = document.querySelectorAll('#acc>li>p')
const accH2 = document.querySelectorAll('#acc>li>h2')
const bgImgChange = document.querySelector('#bgImgChange')

accP.forEach((val) => {
    val.setAttribute('h', val.clientHeight)
    val.style.height = '0'


})

accH2.forEach((val, i) => {
    val.setAttribute('status', 'off')

    val.addEventListener('click', () => {
        accH2.forEach((other) => {
            if (other !== val) {
                other.nextElementSibling.style.height = '0px'
                other.setAttribute('status', 'off')
            }
        });

        if (val.getAttribute('status') == 'off') {
            val.nextElementSibling.style.height = val.nextElementSibling.getAttribute('h') + 'px'
            val.setAttribute('status', 'on')
            val.children[0].innerHTML = `<path fill-rule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />`

            bgImgChange.style.backgroundImage = 'url("asset/img/acc' + (i + 1) + '.webp")';
        } else {
            val.nextElementSibling.style.height = '0px'
            val.children[0].innerHTML = `<path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />`
            val.setAttribute('status', 'off')
        }

    });
});
//  acc


// time
const time = document.querySelector('#time')
setInterval(() => {
    time.innerText = new Date().toLocaleTimeString().slice(0, 5)
}, 1000);


// time

// cityList

const wrapper = document.getElementById('wrapper');
wrapper.innerHTML += wrapper.innerHTML;

let uls = document.querySelectorAll('#wrapper>ul');
const ulHeight = uls[0].clientHeight;

const liHeight = document.querySelector('#wrapper li').clientHeight;

let offset = 0;
const middleIndex = parseInt(((ulHeight / liHeight) / 2) - 1)



function updateActive() {

    const items = document.querySelectorAll('#wrapper>ul>li');

    items.forEach(li => {
        li.classList.remove('text-white', 'font-semibold', 'scale-110');
        li.classList.add('text-midBrown/25');
    });

    const activeIndex = middleIndex + Math.floor(offset / liHeight);



    if (items[activeIndex]) {
        items[activeIndex].classList.remove('text-midBrown/25');
        items[activeIndex].classList.add('text-white', 'font-semibold', 'scale-110');
    }
}

setInterval(() => {

    offset += 1;
    wrapper.style.transform = 'translateY(-' + offset + 'px)';

    if (offset >= ulHeight) {
        wrapper.appendChild(uls[0]);
        offset -= ulHeight;
        wrapper.style.transform = 'translateY(-' + offset + 'px)';
        uls = document.querySelectorAll('#wrapper>ul');
    }

    updateActive();

}, 20);
// cityList


// paragraph fade in

function opTxt() {

    sectionTwoTxt.forEach((val) => {
        let sec2 = val.getBoundingClientRect().top + st;
        let progress2 = (st + window.innerHeight - 100) / sec2;
        progress2 = Math.min(Math.max(progress2, 0), 1);

        if (st + 500 >= sec2) {
            val.style.opacity = Math.min(progress2, 1);
        } else {
            val.style.opacity = 0.2;
        }
    });


    requestAnimationFrame(opTxt);
}

requestAnimationFrame(opTxt);


// paragraph fade in


function footerMove() {

    const start = 8800
    const maxMove = moveFooter.clientHeight

    let move = (st - start) * 3.9;
    move = Math.min(move, maxMove);



    if (st > start) {

        moveFooter.style.transform = 'translateY(-' + move + 'px)'
        myPic.style.scale = (Math.min((move / 600), 1))
        myPic.style.opacity = (Math.min((move / 600), 1))




    } else {
        moveFooter.style.transform = 'translateY(0px)'
        myPic.style.scale = '0'
        myPic.style.opacity = '0'

    }

    let speed = 0.01;


    if (initialTop > -1 && initialTop < 10) {
        speed = 0.002;
    }

    initialTop += (targetTop - initialTop) * speed;
    card.style.top = initialTop + 'vh';

    requestAnimationFrame(footerMove);
}

requestAnimationFrame(footerMove);

