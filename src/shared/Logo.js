import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  margin: 0 auto;
  border: 0;
`

const Img = styled.img`
  display: block;
  margin: 2rem auto;
  max-width: calc(60vw - 4rem);
  max-height: 80vh;
`

export default ({ src }) => (
  <Link href="/">
    <Img src={src} alt="Logo" />
  </Link>
)
