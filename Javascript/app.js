const blob = document.querySelector("#blob");
const blurr = document.querySelector("#blur");
blurr.onmousemove=e=>{
    const {clientX, clientY}=e;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
}, {duration: 50, fill: "forwards" });
}





gsap.from('#nav', 1, {
    y: innerHeight * -1,
    ease: Expo.easeOut
}, 'start')

gsap.from('.logo', 1.5, {
    x: innerWidth,
    ease: Expo.easeOut,
    delay: 1
})

gsap.from('.links a', 1, {
    y: innerWidth * -1,
    stagger: .2,
    ease: Expo.easeOut,
    delay: 2
})

gsap.from('.intro h3', 1.8, {
    delay: 4,
    x:innerWidth,
    ease: 'bounce'
})

gsap.from('.intro h1', .6, {
    delay: 6.3,
    y: -60,
    opacity: 0,
    ease: ' ease.out'
})
gsap.from('.intro h2', .6, {
    delay: 6.8,
    y: -40,
    opacity: 0,
    ease: 'ease.out'
})
gsap.from('.intro p', 1.1, {
    delay: 7.2,
    y: -20,
    opacity: 0
})


gsap.from('.about-content h1', 1, {
    y:-50,
    opacity:0,
    delay:4,
    ease: 'bounce'
})


gsap.from('.p', 1, {
    y:50,
    opacity:0,
    delay:4,
    ease: 'bounce'
})


gsap.from('#card', 1, {
    y:innerHeight,
    opacity:0,
    delay:5
})

gsap.from('.card2', 1, {
    y:innerHeight*-1,
    opacity:0,
    delay:6,
    ease:'bounce'
})

gsap.from('.card-content h2',.8,{
    y:50,
    opacity:0,
    delay:6.6,
    ease:'ease'
})


gsap.from('.card-content p',.8,{
    x:40,
    opacity:0,
    delay:7.2,
    ease:'ease'
})


gsap.from('.projects-content h1', 1, {
    scale:0,
    opacity:0,
    delay:4,
    ease: 'bounce'
})

gsap.from('.projects-content p', 1, {
    y:-40,
    opacity:0,
    delay:5,
    ease: 'bounce'
})


gsap.from('.gallery div', .2, {
    y:innerHeight,
    opacity:0,
    delay:6,
    stagger:.1,
    ease: 'bounce'
})



gsap.from('.contact-text h1', .8, {
    delay: 4,
    y:80,
    opacity:0,
    ease: 'ease'
})

gsap.from('.contact-text h2', .8, {
    delay: 4.8,
    x:innerWidth * -1,
    opacity:0,
    ease: 'ease'
})

gsap.from('.contact-text h3', .8, {
    delay: 5.1,
    x:innerWidth * -1,
    ease: 'ease'
})

gsap.from('.contact-text .tg', .8, {
    delay: 6.2,
    opacity:0,
    y:80,
    ease: 'ease'
})

gsap.from('.contact-area h1', .9, {
    delay: 6.9,
    opacity:0,
    scale:5,
    ease: 'elastic'
})

gsap.from('#input', .6, {
    delay: 7.7,
    x:innerWidth,
    opacity:0,
    ease: 'ease',
    opacity:0,
    stagger:.2
})





