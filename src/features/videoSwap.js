import { DateTime } from 'luxon'

const videoBg = () => {
  const dt = DateTime.now()
  // const day1 = document.getElementById('day-wide-video')
  // const day2 = document.getElementById('day-wide-video-2')
  // const night1 = document.getElementById('night-wide-video')
  // const night2 = document.getElementById('night-wide-video-2')
  const hour = dt.hour
  console.log('current hour', hour)

  // if (hour >= 8 && hour <= 14) {
  //   nightVidWide.style.display = 'none'
  //   nightVidWide2.style.display = 'none'
  //   dayVidWide.style.zIndex = '2'
  //   setTimeout(function () {
  //     dayVidWide2.style.zIndex = '3'
  //   }, 5000)
  //   setTimeout(function () {
  //     dayVidWide2.style.zIndex = '1'
  //     $(dayVidWide).find('video').setAttribute('loop', 'false')
  //   }, 10000)
  // } else {
  //   dayVidWide.style.display = 'none'
  //   dayVidWide2.style.display = 'none'
  //   nightVidWide.style.zIndex = '2'
  //   setTimeout(function () {
  //     nightVidWide2.style.zIndex = '3'
  //   }, 5000)
  //   setTimeout(function () {
  //     nightVidWide2.style.zIndex = '1'
  //   }, 10000)
  // }
}

export default videoBg
