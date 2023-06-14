import './styles/style.css'
//import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import $ from 'jquery'

import videoBg from './features/videoSwap'

//const LINK_ID = '.sidebar-links'
//const links = document.querySelectorAll(LINK_ID)
gsap.registerPlugin(ScrollTrigger)

// LENIS SETUP
// const lenis = new Lenis({ lerp: 0.05 })
// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000)
// })
// ===============

// GSAP ANIMATIONS
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.lightbox-link',
      start: 'bottom bottom',
      scrub: true,
    },
  })
  .from('.homelink', {
    scale: 6,
    xPercent: 300,
    yPercent: -125,
  })

gsap.to('.footer-text-scroll', {
  duration: 25,
  ease: 'none',
  x: '-=1000', //move each box 500px to right
  repeat: true,
})
// ===============

// menu hover change
$('.sidebar-links').eq(0).addClass('selected')
$('.sidebar-links').each(function () {
  $(this).on('click', () => {
    console.log($(this))
  })
})
$('.project').each(function () {
  let triggerElement = $(this)
  let myIndex = $(this).index()
  let targetElement = $('.sidebar-links').eq(myIndex)
  gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top bottom',
      end: 'bottom bottom',
      onEnter: () => {
        $('.sidebar-links').removeClass('selected')
        targetElement.addClass('selected')
      },
      onEnterBack: () => {
        $('.sidebar-links').removeClass('selected')
        targetElement.addClass('selected')
      },
    },
  })
})

// // GET ALL CASE STUDY SECTIONS
// const getAllCaseStudies = () => {
//   const pageSections = []
//   links.forEach((link) => {
//     pageSections.push(document.getElementById(link.getAttribute('link-to')))
//   })
//   return pageSections
// }

setInterval(() => videoBg(), 1000)

// requestAnimationFrame(raf)
// lenis.on('scroll', () => { })
