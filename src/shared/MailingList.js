import React from 'react'
import styled, { withTheme } from 'styled-components'

import Headline from './components/Headline'
import { ButtonThemed } from './components/Buttons'
import { LinkThemed } from './components/Links'

const Button = ButtonThemed.withComponent('button')

const MailingList = styled.div`
  width: 100%;

  form {
    display: flex;
    width: 100%;
  }

  input {
    flex: 1;
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

export default withTheme(({ theme: {conference: {contact: {twitter, mailingList }}}}) => {
  return (
    <MailingList>
      <Headline>Stay up to date with announcements</Headline>

      <p>
        For more announcements follow{' '}
        <LinkThemed href={`https://twitter.com/${twitter}`} target="_blank">
          @{twitter}
        </LinkThemed>{' '}
        or sign up to our mailing list below.
      </p>
      <form action={mailingList.url} method="post">
        <input
          id="fieldEmail"
          name={mailingList.formName}
          type="email"
          required
          placeholder="Your email address"
        />
        <Button type="submit">Join &rarr;</Button>
      </form>
    </MailingList>
  )
})
