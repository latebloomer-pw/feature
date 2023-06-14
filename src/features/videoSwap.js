import * as $ from 'jquery'
import { DateTime } from 'luxon'

const videoBg = () => {
  const dt = DateTime.now()
  const hour = dt.hour

  if (hour > 3 && hour < 20) {
    $('.night').css('z-index', '0')
    $('.day').css('z-index', '3')
  } else {
    console.log('nite')
    $('.day').css('z-index', '0')
    $('.night').css('z-index', '3')
  }
}

export default videoBg
