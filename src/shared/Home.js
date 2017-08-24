import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export default ({ conference }) => (
  <Frame>
    <h1>HI EVERYONE WELCOME TO {conference.title}!</h1>
  </Frame>
)
