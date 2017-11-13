import React from 'react'
import Headline from './components/Headline'
import Copy from './components/Copy'
import { Link } from 'react-router-dom'

export default ({news}) => {
  return (
    <div>
      <Headline>News</Headline>
      <Copy>
        Here's the dank haps.
      </Copy>

      <Copy>
        {
          news.map(item => (
            <div key={item.title}>
              <Link to={item.url}>{ item.title }</Link>
            </div>
          ))
        }
      </Copy>
    </div>
  )
}
