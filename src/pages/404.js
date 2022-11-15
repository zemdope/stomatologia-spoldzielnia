import React from 'react'
import { InlineWidget } from 'react-calendly'

const wid =
  '<a id="zl-url" class="zl-url" href="https://www.znanylekarz.pl/aleksander-winkel/stomatolog-chirurg-stomatologiczny-protetyk/gdansk" rel="nofollow" data-zlw-doctor="aleksander-winkel" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true">Aleksander Winkel - ZnanyLekarz.pl</a><script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script>'
const PAgeNotFound = () => {
  return (
    <>
      <div>
        <InlineWidget url="https://calendly.com/renewbear" />
      </div>

      <div dangerouslySetInnerHTML={{ __html: wid }}></div>
    </>
  )
}
export default PAgeNotFound
