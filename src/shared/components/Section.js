import styled from 'styled-components'

const Section = styled.section`margin: 30px 0;`

const SectionFlex = styled.div`
  @media (min-width: 70em) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const SectionCentered = Section.extend`text-align: center;`

export { Section, SectionFlex, SectionCentered }
