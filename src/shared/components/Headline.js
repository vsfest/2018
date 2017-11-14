import styled from 'styled-components'

export default styled.h2`
  margin: 0 0 60px 0;
  font-size: 36px;
  line-height: 1;
  font-family: 'Maison Neue Extra Bold', -apple-system, BlinkMacSystemFont,
    avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
  color: ${props => props.theme.primary};

  @media (min-width: 768px) {
    font-size: 60px;
  }

  @media (min-width: 1200px) {
    margin-left: -100px;
  }
`
