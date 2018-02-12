import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  border: 0;
`

const Img = styled.img`
  display: block;
  margin: 30px auto;
  max-height: 200px;
  max-width: 100%;

  &:hover {
    transition: all 0.2s ease;
    opacity: 0.8;
  }
`

export default ({ src }) => (
  <Link href="/">
    <Img src={src} alt="Logo" />
  </Link>
)
