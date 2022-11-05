import React from 'react'
import {
  ThumbnailImage,
  ThumbnailInfo,
  ThumbnailWrapper,
} from './Thumbnail.styles'

export const Thumbnail = ({ imageSource }) => (
  <ThumbnailWrapper>
    <ThumbnailImage src={imageSource} alt="" />
    <ThumbnailInfo>
      <p>Wybielanie</p>
      <p>Kompleksowe wybielanie zębów</p>
    </ThumbnailInfo>
  </ThumbnailWrapper>
)
