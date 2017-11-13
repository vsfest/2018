// Bastardise Styled Components' theming to pass through the conf data
import React from 'react'
import {withTheme} from 'styled-components'

const withConference = Comp => withTheme(({ theme, ...props }) => (
  <Comp conference={ theme._conference } { ...props }/>
))

export default withConference
