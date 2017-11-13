import React from 'react'
import styled from 'styled-components'
import { CSS, JS, Decompress } from '../data'
import Headline from './components/Headline'
import Copy from './components/Copy'
import news from './news/index'

export default ({conferenceId}) => {
  return (
    <div>
      <Headline>News</Headline>
      <Copy>
        Here's the dank haps.
      </Copy>

      <Copy>
        {
          news(conferenceId).map(item => (
            <div key={item.title}>
              <h4>{ item.title }</h4>
              <p>{ item.content }</p>
            </div>
          ))
        }
      </Copy>
    </div>
  )
}
