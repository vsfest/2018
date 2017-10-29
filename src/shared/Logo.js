import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  border: 0;
`

const Img = styled.img`
  display: block;
  margin: 60px auto 30px;
  max-height: 150px;
  
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
