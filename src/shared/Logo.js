import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  max-width: calc(100vw - 4rem);
  max-height: 80vh;
`

export default ({ src }) => (
  <Img src={src} alt="Logo"/>
)
