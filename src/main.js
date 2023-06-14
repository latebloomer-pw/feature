import './styles/style.css'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import $ from 'jquery'

import videoBg from './features/videoSwap'

// WINDOW RESIZE LISTENER
let isDesktop = window.matchMedia('(min-width: 768px)').matches
window.addEventListener('resize', () => {
  isDesktop = window.matchMedia('(min-width: 768px)').matches
})
// ===============

gsap.registerPlugin(ScrollTrigger) // GSAP SETUP

// LENIS SETUP
const lenis = new Lenis({ lerp: 0.05 })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
// ===============

// GSAP ANIMATIONS
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.featured-link',
      start: 'bottom bottom',
      scrub: true,
    },
  })
  .from('.homelink.desktop', {
    scale: 6,
    delay: 1,
    xPercent: 350,
    yPercent: -125,
  })

gsap.to('.footer-text-scroll', {
  duration: 25,
  ease: 'none',
  x: '-=1000', //move each box 500px to right
  repeat: true,
})
// ===============

// MENU CLICK
$('.featured-link').each(function () {
  $(this).on('click', () => {
    lenis.scrollTo(document.getElementById($(this).attr('link-to')))
  })
})

// GRID ITEM CLICK
$('.sidebar-links').each(function () {
  $(this).on('click', () => {
    lenis.scrollTo(document.getElementById($(this).attr('link-to')))
  })
})

// MENU SCROLL EFFECT
$('.project').each(function () {
  // each project wrapper (i.e. CMS item) triggers link hover state
  let triggerElement = $(this)
  let myIndex = $(this).index()
  let targetElement = $('.sidebar-links').eq(myIndex)
  gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top top+=100',
      end: 'bottom bottom-=200', // shrink available trigger space for faster response time
      onEnter: () => {
        isDesktop
          ? $('.sidebar-links').removeClass('selected') &&
            targetElement.addClass('selected')
          : $('.menu-item-current').eq(0).text(triggerElement.attr('menu-name'))
      },
      onEnterBack: () => {
        isDesktop
          ? $('.sidebar-links').removeClass('selected') &&
            targetElement.addClass('selected')
          : $('.menu-item-current').eq(0).text(triggerElement.attr('menu-name'))
      },
    },
  })
})

gsap.timeline({
  // for "un-hovering" first list item when scrolling back up to featured grid items
  scrollTrigger: {
    trigger: '.featured-projects',
    // trigger element - viewport
    start: 'top top+=500',
    end: 'bottom bottom',
    onEnter: () => {
      isDesktop
        ? $('.sidebar-links').eq(0).removeClass('selected')
        : $('.menu-item-current').eq(0).text('WORK')
    },
    onEnterBack: () => {
      isDesktop
        ? $('.sidebar-links').eq(0).removeClass('selected')
        : $('.menu-item-current').eq(0).text('HOME')
    },
  },
})

const tl = new Timeline()

tl.to('.menu-footer', {
  top: '70vh',
  bottom: '-1vh',
  ease: true,
  reversed: true,
  duration: 0.5,
})

$('.menu-footer').on('click', function () {
  tl.reversed() ? tl.play() : tl.reverse()
})

setInterval(() => videoBg(), 1000)
