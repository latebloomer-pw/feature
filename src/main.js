import './styles/style.css'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//import $ from 'jquery'
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.landing',
      start: 'bottom +300',
      scrub: true,
    },
  })
  .from('.logo-overlay', {
    xPercent: -150,
    ease: 'slow',
    delay: 1,
  })

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.case-studies',
      start: 'bottom +300',
      scrub: true,
    },
  })
  .from('.big-serif', {
    xPercent: -150,
  })
