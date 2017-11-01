import styled from 'styled-components'

export default styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 90vw;
  flex-direction: column;

  @media (min-width: 60em) {
    max-width: 75vw;
  }

  @media (min-width: 120em) {
    max-width: 50vw;
  }
`
