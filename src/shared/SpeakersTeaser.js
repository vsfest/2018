import React from 'react'
import styled from 'styled-components'
import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import { LinkThemed } from './components/Links'
import Youtube from 'react-youtube'

const Speaker = styled.div`
  text-align: center;

  iframe {
    width: 100%;
    min-height: 250px;
    margin-bottom: 30px;
  }

  ${HeadlineSmall} {
    margin-bottom: 0;
  }
`

const SpeakersWrapper = styled.div`
  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
`

export default ({
  hasSchedule,
  hasWorkshops,
  speakers,
  workshops,
  titoLink
}) => {
  const announcedWorkshops = (workshops || []).filter(
    workshop => workshop.announced === true
  )
  const announcedSpeakers = speakers.filter(
    speaker => speaker.announced === true
  )

  return (
    <div>
      <Headline>Videos</Headline>
      <SpeakersWrapper>
        {announcedSpeakers.map((speaker, i) => {
          if (speaker.talkVideo) {
            return (
              <Speaker key={i} {...speaker}>
                <Youtube videoId={speaker.talkVideo} />
                <LinkThemed
                  href={
                    speaker.twitter
                      ? `https://twitter.com/${speaker.twitter}`
                      : speaker.url
                  }
                >
                  <HeadlineSmall>{speaker.name}</HeadlineSmall>
                </LinkThemed>
                <p>{speaker.talk}</p>
              </Speaker>
            )
          }
        })}
      </SpeakersWrapper>
    </div>
  )
}
