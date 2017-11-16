import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Container from '../shared/components/Container'
import { LinkThemed } from './components/Links'
import { ButtonThemed } from './components/Buttons'

const StyledLink = LinkThemed.withComponent(Link)

export default ({ conference }) => {
  return (
    <Container>
      <Helmet {...conference}>
        <title>Opportunity Program — {conference.title}</title>
      </Helmet>
      <Headline>Opportunity Program</Headline>
      <p>
        We’re dedicated to diversity, inclusion and even more so—equal
        opportunity. We realize that buying a ticket to a conference for many
        isn’t a trivial expense, but it can be a turning point in someone’s
        career.
      </p>
      <p>
        We’re committed to bringing in as many individuals who couldn’t attend
        otherwise as possible. We want you to feel like you belong and build a
        lasting, inclusive, safe community. As organizers, we see it as our
        responsibility to help diversify the face of the Australian tech
        industry. We strongly encourage members of underrepresented groups to
        apply.
      </p>
      <p>
        <strong>
          Please note that the scholarships cover conference registration only,
          so you will have to arrange travel and accommodation if you live
          outside of Melbourne, Australia.
        </strong>
      </p>

      <HeadlineSmall>Eligibility</HeadlineSmall>
      <p>
        Applicants for a free Opportunity Program ticket have to fulfill at
        least one of the below requirements:
      </p>
      <ul>
        <li>
          be a member of an underrepresented group in tech, including, but not
          limited to women, LGBTQI+, African-American, Indigenous Australians,
          Latina or Latino, people with disabilities and people facing economic
          or social hardships
        </li>
        <li>be unable to attend without financial assistance</li>
      </ul>

      <p>It’s important to remember that:</p>

      <ul>
        <li>
          Previous conference attendance doesn’t disqualify an application
        </li>
        <li>
          No technology experience or knowledge is required—we’re here to learn!
        </li>
        <li>Yes, you deserve it ✨</li>
      </ul>
      <HeadlineSmall>How to apply</HeadlineSmall>
      <p>
        To apply, please{' '}
        <LinkThemed href="https://goo.gl/forms/UzUOgp59cCgo2Omu2">
          fill out the application form
        </LinkThemed>. All information will be kept confidential except the
        review committee. You’ll be notified of the result no matter the
        outcome.
      </p>

      <ul>
        <li>Applications close: January 1, 2018</li>
        <li>Application notification: January 15, 2018</li>
      </ul>

      <p>
        <ButtonThemed href="https://goo.gl/forms/UzUOgp59cCgo2Omu2">
          Apply for a free ticket to {conference.title}
        </ButtonThemed>
      </p>

      <HeadlineSmall>How can I tell you care about inclusion?</HeadlineSmall>
      <p>
        Our approach to diversity and inclusion is multidimensional, spanning
        much further than the Opportunity Ticket program.
      </p>

      <p>
        We provide comprehensive information about our{' '}
        <StyledLink to="call-for-speakers">Call for Proposals</StyledLink>{' '}
        process and facilitate a bias-aware system (<LinkThemed href="http://2016.cssconf.com.au/2016/07/01/cfp.html">
          read more here
        </LinkThemed>) to select our speakers. We actively reach out to
        underrepresented individuals encouraging them to partake in our
        conference. In 2016, we've welcomed an equal amount of women and men on
        our stage. Additionally, we offer a generous speaker package.
      </p>

      <p>
        {conference.title} operates under an enforceable{' '}
        <StyledLink to="code-of-conduct">Code of Conduct</StyledLink>. We treat
        harassing behavior very seriously and are committed to providing a safe,
        welcoming experience for everyone. We continuously train ourselves in
        response mechanisms.
      </p>

      <p>
        Our conference has an{' '}
        <StyledLink to="accessibility">Accessibility Statement</StyledLink>{' '}
        featuring detailed information about the venue, catering, media policy,
        captioning and more. We want you to know what to expect.
      </p>

      <p>
        Read about our{' '}
        <LinkThemed href="http://2016.cssconf.com.au/2016/07/01/programming-inclusion.html">
          Inclusion Strategy from 2016 &rarr;
        </LinkThemed>
      </p>

      <HeadlineSmall>Sponsors</HeadlineSmall>
      <p>
        The number of passes we’re able to give out relies heavily on the amount
        of sponsors. If your organization can help or you’re an individual
        willing to donate{' '}
        <LinkThemed href={`mailto:${conference.contact.sponsorship}`}>
          talk to us to get involved
        </LinkThemed>.
      </p>
      <p>
        We’re grateful for the generous support of the following organizations
        making the Opportunity Program possible ❤️:
      </p>
      <p>
        <LinkThemed href="https://www.lookahead.com.au/">
          Lookahead Search
        </LinkThemed>
      </p>
      <HeadlineSmall>Contact</HeadlineSmall>
      <p>
        If you have any questions, do not hesitate and{' '}
        <LinkThemed href={`mailto:${conference.contact.team}`}>
          reach out to our team
        </LinkThemed>. You can also{' '}
        <LinkThemed
          href={`https://twitter.com/${conference.contact.twitter}`}
          target="_blank"
        >
          follow us on Twitter
        </LinkThemed>{' '}
        and subscribe to the mailing list to stay updated about the event.
      </p>
    </Container>
  )
}
