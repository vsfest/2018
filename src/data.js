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
  hasSpeakers: false,
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
  hasSpeakers: true,
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
    },
    {
      name: 'AMP Project',
      url: 'https://www.ampproject.org/',
      image: require('./assets/sponsor-amp.svg'),
      tier: 'diversity'
    },
    {
      name: 'AMP Project',
      url: 'https://www.ampproject.org/',
      image: require('./assets/sponsor-amp.svg'),
      tier: 'main'
    }
  ],
  speakers: [
    {
      name: 'Ire Aderinokun',
      twitter: 'ireaderinokun',
      url: 'https://ireaderinokun.com',
      announced: true,
      image: require('./assets/speaker-ire.jpg'),
      bio: 'Ire is a self-taught Frontend Developer and User Interface Designer based in Lagos, Nigeria. She currently works as a Software Developer for eyeo, the company behind products like Adblock Plus and Flattr Plus, building open source software to make a better internet. Ire specialised in all things HTML, CSS, and JavaScript, but is passionate about all aspects of technology. She has written over 100 articles on these topics on her blog, bitsofco.de, and has spoken at conferences around Africa and the world.',
      location: 'Lagos, Nigeria',
      talk: 'CSS for the next billion users'
    },
    {
      name: 'Brenda Storer',
      twitter: 'brendamarienyc',
      announced: true,
      url: 'http://brendastorer.com/',
      bio: 'Brenda is a designer and front-end developer Thoughtbot, a Girl Develop It alumnus turned instructor, and an assistant organizer for CSS Layout Club in NYC.',
      location: 'New York, United States',
      image: require('./assets/speaker-brenda.jpg'),
      talk: 'How to use CSS Grid today in the real world'
    },
    {
      name: 'Theresa Ma',
      twitter: 'mapotato',
      announced: true,
      url: 'https://www.yelp.com/styleguide',
      bio: 'Theresa is a Toronto raised and San Francisco based software engineer with an interdisciplinary background in cognitive science and philosophy. She\'s a relentless advocate for the design system at Yelp.',
      location: 'San Francisco, United States',
      image: require('./assets/speaker-theresa.jpg'),
      talk: 'Effective design and engineering collaboration'
    },
    {
      name: 'David Khourshid',
      twitter: 'davidkpiano',
      url: 'https://codepen.io/davidkpiano',
      announced: true,
      bio:
        'David is a software engineer at Microsoft who is passionate about making users as happy as possible. He is passionate about JavaScript, CSS, animation, innovative UIs, and cutting-edge front-end technologies. When not behind a computer keyboard, he’s behind a piano keyboard or traveling.',
      location: 'Orlando, United States',
      image: require('./assets/speaker-david.jpg'),
      talk:
        'Behind the illusions: impossibly high-performance layout animations'
    },
    {
      name: 'Jeremy Wagner',
      twitter: 'malchata',
      url: 'https://jeremywagner.me/',
      bio:
        'Jeremy Wagner is a web developer from Saint Paul, Minnesota who frequently blogs on the topic of web performance. He is also the author of Web Performance in Action from Manning Publications.',
      location: 'Saint Paul, United States',
      image: require('./assets/speaker-jeremy.jpg'),
      talk: 'Faster fonts for speed freaks'
    },
    {
      name: 'Julie Grundy',
      twitter: 'stringy',
      url: 'http://www.juliegrundy.id.au/',
      bio:
        'Julie Grundy is a front-end dev turned accessibility consultant. She believes in an independent democratic web and wishes everyone was issued a personal domain name at birth.',
      location: 'Perth, Australia',
      image: require('./assets/speaker-julie.jpg'),
      talk: 'Can you see that OK? CSS tips for low-vision accessibility'
    },
    {
      name: 'Diana Mounter',
      twitter: 'broccolini',
      url: 'http://broccolini.net',
      announced: true,
      bio:
        'Diana is a designer based in Brooklyn, NY. She leads GitHub’s design systems team, organizes the NYC Design Systems Coalition, and writes and speaks about code, design, and working with people.',
      location: 'New York, United States',
      image: require('./assets/speaker-diana.jpg'),
      talk: 'Interaction of color systems'
    },
    {
      name: 'Sam Richard',
      twitter: 'snugug',
      url: 'https://snugug.com',
      bio:
        'Sam Richard, better known as Snugug, is a developer and designer with a love of building open source tools for both. He also geeks out on content, process, transformation, and food.',
      location: 'New York, United States',
      image: require('./assets/speaker-sam.jpg'),
      talk: 'Magic tricks with Houdini'
    },
    {
      name: 'Ivana McConnell',
      twitter: 'IvanaMcConnell',
      url: 'http://ivanamcconnell.com',
      announced: true,
      bio:
        'Ivana is a UI/UX designer. She fell in love with the web on Geocities and Neopets many years ago, and found her way into UX design via neuroscience research, rock climbing instruction, and video game testing. Originally born in Sarajevo, she has lived in Croatia, all over Canada, and Scotland, and is now based in Vancouver working remotely for Customer.io.',
      location: 'Vancouver, Canada',
      image: require('./assets/speaker-ivana.jpg'),
      talk: 'Journeys: What makes a developer, really?'
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
  hasSpeakers: false,
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
