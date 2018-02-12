import React from 'react'
import styled from 'styled-components'

import Headline from './components/Headline'
import { ButtonThemed } from './components/Buttons'
import { LinkThemed } from './components/Links'

const Button = ButtonThemed.withComponent('button')

const MailingList = styled.div`
  form {
    width: 100%;
    @media (min-width: 600px) {
      display: flex;
    }
  }

  ${Button} {
    @media (max-width: 600px) {
      margin-top: 15px;
      width: 100%;
    }
  }

  input {
    flex: 1;
    width: 100%;
    margin-right: 15px;
    padding: 15px 0;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid;
    border-bottom-color: hsla(0, 0%, 0%, 0.2);
    box-shadow: none;
    color: inherit;
    display: inline-block;
    font-size: inherit;
    letter-spacing: inherit;
    outline: 0;
    transition: color 0.2s ease-in-out;
  }

  input::placeholder {
    color: hsla(0, 0%, 0%, 0.2);
  }
`

export default ({ twitter, mailingList, team }) => {
  return (
    <MailingList>
      <Headline>Stay up to date</Headline>

      <p>
        For all announcements follow{' '}
        <LinkThemed href={`https://twitter.com/${twitter}`} target="_blank">
          @{twitter}
        </LinkThemed>{' '}
        on Twitter or sign up to our mailing list below. In case of any
        questions you can always{' '}
        <LinkThemed href={`mailto:${team}`}>contact our team</LinkThemed>.
      </p>
      <form action={ mailingList.url } method="post">
        <input
          id="fieldEmail"
          name={ mailingList.formName }
          type="email"
          required
          placeholder="Your email address"
        />
        <Button type="submit">Join &rarr;</Button>
      </form>
    </MailingList>
  )
}
