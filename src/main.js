import './styles/style.css'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import videoBg from './features/videoSwap'

const LINK_ID = '.sidebar-links'
const links = document.querySelectorAll(LINK_ID)
gsap.registerPlugin(ScrollTrigger)

// LENIS SETUP
const lenis = new Lenis({ lerp: 0.05 })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
// ===============

// // GSAP ANIMATIONS
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '.lightbox-link',
//       start: 'bottom bottom',
//       scrub: true,
//     },
//   })
//   .from('.homelink', {
//     scale: 6,
//     xPercent: 300,
//     yPercent: -125,
//   })

// gsap.to('.footer-text-scroll', {
//   duration: 25,
//   ease: 'none',
//   x: '-=1000', //move each box 500px to right
//   repeat: true,
// })
// // ===============

// GET ALL CASE STUDY SECTIONS
// const getAllCaseStudies = () => {
//   const pageSections = []
//   links.forEach((link) => {
//     pageSections.push(document.getElementById(link.getAttribute('link-to')))
//   })
//   return pageSections
// }

const addAllClickListeners = () => {
  links.forEach((link) => {
    const pageSection = document.getElementById(link.getAttribute('link-to'))
    link.addEventListener('click', () => {
      Array(document.getElementsByClassName('sidebar-links')).forEach(
        (clientName) => clientName.classList.remove('selected')
      )
      link.classList.add('selected')
      lenis.scrollTo(pageSection)
    })
  })
}

setInterval(() => videoBg(), 1000)
addAllClickListeners()

requestAnimationFrame(raf)
lenis.on('scroll', () => {
  ScrollTrigger.update
  // const caseStudies = getAllCaseStudies()
  // if (Math.abs(study.getBoundingClientRect().top) < 200) {
  //   document.querySelectorAll(`[link-to=${sre}]`)
  // }
})

// PAGE SCROLL INTERACTIONS
// // console.log(e)
// // let minPos = Number.MAX_SAFE_INTEGER
// let item
// caseStudies.forEach((caseStudy) => {
//   var topPos = Math.abs(caseStudy.getBoundingClientRect().top)
//   const vh = Math.max(
//     document.documentElement.clientHeight || 0,
//     window.innerHeight || 0
//   )
//   item = topPos <= vh ? caseStudy : item
//   // const caseStudyPosition = Math.abs(caseStudy.getBoundingClientRect().top)
//   // minItem = caseStudyPosition < minPos ? caseStudy : minItem
//   // minPos = caseStudyPosition < minPos ? caseStudyPosition : minPos
// })
// console.log(item)

// links.forEach((link) => {
//   const pageSection = document.getElementById(link.getAttribute('link-to'))
//   console.log('bounding', pageSection.getBoundingClientRect())

//   link.addEventListener('click', function handleClick() {
//     // pageSection.scrollIntoView({ behavior: 'smooth' })
//   })
// })
