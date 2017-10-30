import React from 'react'
import styled from 'styled-components'

import Headline from './components/Headline'
import {ButtonMono} from './components/Buttons'
import {LinkMono} from './components/Links'

const MailingList = styled.div`
  width: 100%;

  form {
    display: flex;
    width: 100%;
  }

  input {
    flex: 1;
    margin-right: 1rem;
    padding: 0.75rem 0;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    font-size: inherit;
    letter-spacing: inherit;
    outline: 0;
    transition: color .2s ease-in-out;
  }

  input::placeholder {
    color: rgba(255, 255, 255, .8);
  }
`

export default ({ twitter, mailingList }) => {
  return (
    <MailingList>
      <Headline>Stay up to date with announcements</Headline>

      <p>
        For more announcements follow <LinkMono href={`https://twitter.com/${twitter}`} target="_blank">@{twitter}</LinkMono> or sign up to our mailing list below.
      </p>
      <form action={mailingList.url} method="post">
        <input id="fieldEmail" name={mailingList.formName} type="email" required placeholder="Your email address" />
        <ButtonMono type="submit">Join &rarr;</ButtonMono>
      </form>
    </MailingList>
  )
}
