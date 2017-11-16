import styled from 'styled-components'

export default styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 90vw;
  flex-direction: column;

  @media (min-width: 1200px) {
    max-width: 60vw;
  }

  @media (min-width: 1800px) {
    max-width: 50vw;
  }
`
