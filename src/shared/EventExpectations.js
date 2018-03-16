import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Headline from './components/Headline'
import Container from './components/Container'
import { LinkThemed } from './components/Links'

const StyledLink = LinkThemed.withComponent(Link)

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
  margin-bottom: 30px;
  background-color: hsla(0, 0%, 13%, 1);
  color: hsla(0, 0%, 67%, 1);

  ${Container} {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  ${Headline} {
    margin: 0;
    color: white;
  }

  ${StyledLink} {
    color: ${props => props.theme.secondary};

    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`

const Perk = styled.div`
  flex: auto;
  @media (min-width: 768px) {
    margin-right: 60px;
  }
`

export default ({ id }) => {
  return (
    <Wrapper>
      <Container>
        <Perk>
          <Headline>400</Headline>
          <p>attendees</p>
        </Perk>
        <Perk>
          {id === 'css' ? <Headline>8</Headline> : <Headline>15</Headline>}
          <p>talks</p>
        </Perk>
        <Perk>
          <p>
            Healthy meals, endless coffee and soft drinks, gender neutral
            bathrooms, live captioning, wheelchair-accessible venue and more.{' '}
            <StyledLink to="accessibility">
              Our accessibility statement &rarr;
            </StyledLink>
          </p>
        </Perk>
      </Container>
    </Wrapper>
  )
}
