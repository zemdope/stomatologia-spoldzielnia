import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import { CornerEffect } from '../CornerEffectProvider/CornerEffect'
import MarkerIcon from '../../assets/icons/markerIcon.svg'

const Wrapper = styled(CornerEffect)`
  width: 80%;
  height: 40vh;
  margin: 0 auto;
`
const Icon = styled(MarkerIcon)`
  width: 35px;
  height: 35px;
`
export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 54.3769,
      lng: 18.61026,
    },
    zoom: 15,
  }

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCSTOroA-l9HIJxr8xvqPfNTJSZOGbBBv4' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <a
          lat={54.3769}
          lng={18.61026}
          href="https://www.google.pl/maps/place/Stomatolog+Sp%C3%B3%C5%82dzielnia+Lekarska.+Gda%C5%84sk,+Wrzeszcz./@54.3769011,18.608064,17z/data=!4m15!1m8!3m7!1s0x46fd74969e510033:0x1c41475424901958!2sAleja+Grunwaldzka+68,+80-244+Gda%C5%84sk!3b1!8m2!3d54.376898!4d18.610258!16s%2Fg%2F11c5cfg1_f!3m5!1s0x46fd75dcd3fd99e5:0xc366f33abb67162d!8m2!3d54.376898!4d18.610258!16s%2Fg%2F11q23ktz8f"
        >
          <Icon />
        </a>
      </GoogleMapReact>
    </Wrapper>
  )
}
