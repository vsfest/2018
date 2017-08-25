import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  display: block;
  margin: 2rem auto;
  max-width: calc(60vw - 4rem);
  max-height: 80vh;
`

export default ({ src }) => (
  <Img src={src} alt="Logo" />
)
