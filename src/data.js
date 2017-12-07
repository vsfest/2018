import js_logo from './js/logo.svg'
import css_logo from './css/logo.svg'
import decompress_logo from './decompress/logo.svg'

import css_favicon from './assets/css-favicon.ico'
import js_favicon from './assets/js-favicon.png'

const titoLink = 'https://ti.to/cssconf-au/2018'
const venue = 'North Melbourne Meat Market'
const city = 'Melbourne, Australia'

export const Staff = [
  {
    name: 'Ben Schwarz',
    twitter: 'benschwarz',
    mugshot: require('./shared/mugshot-ben.jpg')
  },
  {
    name: 'Craig Sharkie',
    twitter: 'twalve',
    mugshot: require('./shared/mugshot-craig.png')
  },
  {
    name: 'Glen Maddern',
    twitter: 'glenmaddern',
    mugshot: require('./shared/mugshot-glen.jpg')
  },
  {
    name: 'Jordan Lewis',
    twitter: 'jordanlewiz',
    mugshot: require('./shared/mugshot-jordan.jpg')
  },
  {
    name: 'Karolina Szczur',
    twitter: 'fox',
    mugshot: require('./shared/mugshot-kazza.jpg')
  },
  {
    name: 'Michael Mifsud',
    twitter: 'xzyfer',
    mugshot: require('./shared/mugshot-michael.jpg')
  },
  {
    name: 'Isabell Kiral-Kornek',
    twitter: 'isa_kiko',
    mugshot: require('./shared/mugshot-isabell.png')
  },
  {
    name: 'Robert Kerr',
    twitter: 'robrkerr',
    mugshot: require('./shared/mugshot-rob.jpg')
  }
]

export const JS = {
  id: 'js',
  title: 'JSConf AU 2018',
  logo: js_logo,
  favicon: js_favicon,
  date: '21st & 22nd March 2018',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://2018.jsconfau.com'
      : `http://js.localhost:${window.location.port}`,
  cfpURL: 'https://cfp.jsconfau.com',
  description: `
  A two-day conference for JavaScript enthusiasts, pushing technology beyond its boundaries. From the community, for the community. A part of global JSConf Family.
  `,
  venue,
  city,
  titoLink,
  theme: {
    primary: 'hsla(218, 98%, 38%, 1)',
    primaryHover: 'hsla(218, 98%, 28%, 1)',
    secondary: 'hsla(218, 98%, 86%, 1)',
    bannerImage: require('./js/banner-bg.jpg'),
    bannerImageSmall: require('./js/banner-bg-small.jpg')
  },
  contact: {
    team: 'team@jsconfau.com',
    sponsorship: 'sponsors@jsconfau.com',
    twitter: 'jsconfau',
    mailingList: {
      url: 'https://jsconfau.createsend.com/t/j/s/virthh/',
      formName: 'cm-virthh-virthh'
    }
  },
  previousEvents: [
    { title: 2016, url: 'http://2016.jsconfau.com/' },
    { title: 2014, url: 'http://au.jsconf.com/' },
    { title: 2012 }
  ],
  isCfpOpen: true,
  sponsors: [
    {
      name: 'Calibre',
      url: 'https://calibreapp.com/',
      image: require('./assets/sponsor-calibre.svg'),
      tier: 'main'
    },
    {
      name: 'Front-end Center',
      url: 'https://frontend.center/',
      image: require('./assets/sponsor-fec.svg'),
      tier: 'main'
    },
    {
      name: '99designs',
      url: 'https://99designs.com.au/',
      image: require('./assets/sponsor-99designs.svg'),
      tier: 'community'
    },
    {
      name: 'Pin Payments',
      url: 'https://pin.net.au/',
      image: require('./assets/sponsor-pin.svg'),
      tier: 'community'
    },
    {
      name: 'Lookahead Search',
      url: 'https://www.lookahead.com.au/',
      image: require('./assets/sponsor-lookahead.svg'),
      tier: 'diversity'
    },
    {
      name: 'Prismatik',
      url: 'http://prismatik.com.au/',
      image: require('./assets/sponsor-prismatik.svg'),
      tier: 'community'
    },
    {
      name: 'Prismatik',
      url: 'http://prismatik.com.au/',
      image: require('./assets/sponsor-prismatik.svg'),
      tier: 'diversity'
    },
    {
      name: 'Culture Amp',
      url: 'https://www.cultureamp.com/',
      image: require('./assets/sponsor-cultureamp.svg'),
      tier: 'supporter'
    },
    {
      name: 'The Sizzle',
      url: 'https://www.thesizzle.com.au/',
      image: require('./assets/sponsor-sizzle.svg'),
      tier: 'media'
    },
    {
      name: 'Twilio',
      url: 'https://www.twilio.com/',
      image: require('./assets/sponsor-twilio.svg'),
      tier: 'community'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      image: require('./assets/sponsor-fb.svg'),
      tier: 'main'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      image: require('./assets/sponsor-fb.svg'),
      tier: 'diversity'
    }
  ]
}

export const CSS = {
  id: 'css',
  title: 'CSSConf AU 2018',
  logo: css_logo,
  favicon: css_favicon,
  date: '20th March 2018',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://2018.cssconf.com.au'
      : `http://css.localhost:${window.location.port}`,
  cfpURL: 'https://cfp.cssconf.com.au',
  description:
    'A one-day, community conference dedicated to the designers, developers, and other CSS aficionados building the world’s most engaging user interfaces. A part of global CSSConf Family.',
  venue,
  city,
  titoLink,
  theme: {
    primary: 'hsla(18, 90%, 50%, 1)',
    primaryHover: 'hsla(18, 100%, 40%, 1)',
    secondary: 'hsla(18, 100%, 90%, 1)',
    bannerImage: require('./css/banner-bg.jpg'),
    bannerImageSmall: require('./css/banner-bg-small.jpg')
  },
  contact: {
    team: 'team@cssconf.com.au',
    sponsorship: 'sponsors@cssconf.com.au',
    twitter: 'cssconfau',
    mailingList: {
      url: 'https://jsconfau.createsend.com/t/j/s/virthk/',
      formName: 'cm-virthk-virthk'
    }
  },
  previousEvents: [
    { title: 2016, url: 'http://2016.cssconf.com.au/' },
    { title: 2015, url: 'http://2015.cssconf.com.au/' },
    { title: 2014, url: 'http://2014.cssconf.com.au/' }
  ],
  isCfpOpen: true,
  sponsors: [
    {
      name: 'Calibre',
      url: 'https://calibreapp.com/',
      image: require('./assets/sponsor-calibre.svg'),
      tier: 'main'
    },
    {
      name: 'Front-end Center',
      url: 'https://frontend.center/',
      image: require('./assets/sponsor-fec.svg'),
      tier: 'main'
    },
    {
      name: '99designs',
      url: 'https://99designs.com.au/',
      image: require('./assets/sponsor-99designs.svg'),
      tier: 'community'
    },
    {
      name: 'Pin Payments',
      url: 'https://pin.net.au/',
      image: require('./assets/sponsor-pin.svg'),
      tier: 'community'
    },
    {
      name: 'Lookahead Search',
      url: 'https://www.lookahead.com.au/',
      image: require('./assets/sponsor-lookahead.svg'),
      tier: 'diversity'
    },
    {
      name: 'Offscreen',
      url: 'https://www.offscreenmag.com/',
      image: require('./assets/sponsor-offscreen.svg'),
      tier: 'media'
    },
    {
      name: 'Culture Amp',
      url: 'https://www.cultureamp.com/',
      image: require('./assets/sponsor-cultureamp.svg'),
      tier: 'community'
    },
    {
      name: 'The Sizzle',
      url: 'https://www.thesizzle.com.au/',
      image: require('./assets/sponsor-sizzle.svg'),
      tier: 'media'
    },
    {
      name: 'Envato',
      url: 'https://envato.com/',
      image: require('./assets/sponsor-envato.svg'),
      tier: 'diversity'
    },
    {
      name: 'Envato',
      url: 'https://envato.com/',
      image: require('./assets/sponsor-envato.svg'),
      tier: 'community'
    }
  ]
}

export const Decompress = {
  id: 'decompress',
  title: 'Decompress 2018',
  logo: decompress_logo,
  date: '23rd March 2018',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://2018.decompress.com.au'
      : `http://decompress.localhost:${window.location.port}`,
  description:
    'Decompress is an affordable community day for designers and developers run by the CSSConf and JSConf AU teams. Our focus is squarely set on creating an all-inclusive space to learn, share and create.',
  venue,
  titoLink,
  theme: {
    primary: 'hsla(0, 100%, 62%, 1)',
    primaryHover: 'hsla(0, 100%, 45%, 1)',
    secondary: 'hsla(0, 100%, 90%, 1)'
  },
  contact: {
    team: 'team@decompress.com.au',
    sponsorship: 'sponsors@decompress.com.au',
    twitter: 'decompressau',
    mailingList: {
      url: 'https://jsconfau.createsend.com/t/j/s/virtdk/',
      formName: 'cm-virtdk-virtdk'
    }
  },
  previousEvents: [
    { title: 2016, url: 'http://2016.decompress.com.au/' },
    { title: 2015 },
    { title: 2014 }
  ],
  isCfpOpen: false,
  sponsors: [
    {
      name: 'Calibre',
      url: 'https://calibreapp.com/',
      image: require('./assets/sponsor-calibre.svg'),
      tier: 'main'
    },
    {
      name: 'Front-end Center',
      url: 'https://frontend.center/',
      image: require('./assets/sponsor-fec.svg'),
      tier: 'main'
    }
  ]
}
