import './styles/style.css'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import videoBg from './features/videoSwap'
//import $ from 'jquery'

const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger)

// large logo animation
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.landing',
      start: 'bottom +25%',
      scrub: true,
    },
  })
  .from('.logo-overlay', {
    xPercent: -100,
  })

// about / contact animation
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.case-studies',
      start: 'top +300',
      scrub: true,
    },
  })
  .from('.talk-block', {
    xPercent: -150,
  })

gsap.to('.footer-text-scroll', {
  duration: 25,
  ease: 'none',
  x: '-=1000', //move each box 500px to right
  repeat: true,
  scrub: true,
})

videoBg()
