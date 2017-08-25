import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  max-width: calc(30vw - 4rem);
  max-height: 80vh;
`

export default ({ src }) => (
  <Img src={src} alt="Logo" />
)
