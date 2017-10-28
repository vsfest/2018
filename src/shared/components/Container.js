import styled from 'styled-components'

export default styled.div`
  margin: 0 auto;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 48em) {
    max-width: 90vw;
  }
`