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

const SectionBannerExpanded = Section.extend`
  margin: 0;
  padding: 60px 0;
  background-color: ${props => props.theme.primary};
  background-image: url(${props => props.theme.bannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: soft-light;

  @media (max-width: 425px) {
    background-position: -200px center;
  }

  p {
    color: white;
  }
`

const SectionBanner = Section.extend`
  margin: 0;
  padding: 60px 0 30px 0;
  margin-bottom: 60px;
  background-color: ${props => props.theme.primary};
  background-image: url(${props => props.theme.bannerImageSmall});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: soft-light;
`

export {
  Section,
  SectionFlex,
  SectionCentered,
  SectionBannerExpanded,
  SectionBanner
}
