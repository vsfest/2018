import React from 'react'
import styled from 'styled-components'

const Masthead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  width: 100%;
  text-transform: uppercase;
`

const Button = styled.a`
  background: white;
  padding: 7px 15px 3px;
  border-radius: 4px;
  color: ${ props => props.theme.primary};
`

export default ({ date, titoLink }) => {
  return (
    <Masthead>
      <p>• {date}</p>
      <Button href={titoLink}>Buy Tickets</Button>
    </Masthead>
  )
}
