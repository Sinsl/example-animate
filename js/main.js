const header = document.querySelector('.header-main')
const navBox = document.querySelector('.nav-box')
const about = document.querySelector('.about')
const round1 = document.querySelector('.round-1')
const leftBox = document.querySelector('.sl-left-box')

document.addEventListener('scroll', () => {
    const {top} = header.getBoundingClientRect()
    if (top < -200) {
        navBox.classList.add('scrolled')
    } else {
        navBox.classList.remove('scrolled')
    }

    // const start = 800;
    // const speed = 3; 
    // const {top: topAbout} = about.getBoundingClientRect()
    // console.log('top', topAbout, 'shift', (start / topAbout - 1) * speed)

    // if (topAbout < 550) {
    //     round1.style.transform = `scale(${35})`
    // }
    
    // if (topAbout < start) {
    //     round1.style.transform = `scale(${((start / topAbout - 1) * speed) < 1 ? 1 : ((start / topAbout - 1) * speed)})`
    // }


})
const roundContent = document.querySelector('.round-content')
const boxRound = document.querySelector('.box-round')
// console.log(boxRound)
roundContent.addEventListener('scroll', () => {
    // console.log(roundContent.scrollTop)
    // roundContent.scrollTop = roundContent.scrollTop > 1500 ? 1500 : roundContent.scrollTop
    boxRound.style.transform = `rotate(${roundContent.scrollTop * 0.18}deg)`;
    if (roundContent.scrollTop > 1500) return
})

VANTA.DOTS({
    el: "#about-box",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 0.90,
    color: 0xc0c0c0,
    backgroundColor: 0x161B22,
    scaleMobile: 1.00,
    showLines: false
})