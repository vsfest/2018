import js_logo from './js/logo.svg'
import css_logo from './css/logo.svg'
import decompress_logo from './decompress/logo.svg'

const titoLink = 'https://ti.to/cssconf-au/2018'
const venue = '5 Blackwood street, North Melbourne'

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
  date: '21st & 22nd March 2018',
  url: 'https://2018.jsconfau.com',
  description: `
    JSConfAU is an event that’s far from the standard conference playbook because we believe you deserve more than that. We focus on two things, pushing JavaScript beyond its boundaries and providing exceptional human social activities that encourage community and friendship building.

    JSConfAU drives beyond what is popular or cool today, toward topics that define and revolutionize the future of our technology.
  `,
  venue,
  titoLink,
  theme: {
    primary: '#0247BF',
    primaryHover: '#013CA3'
  },
  contact: {
    team: 'team@jsconfau.com',
    sponsorship: 'sponsors@jsconfau.com',
    twitter: 'jsconfau',
    mailingList: {
      url: 'https://jsconfau.createsend.com/t/j/s/oskty',
      formName: 'cm-oskty-oskty'
    }
  },
  previousEvents: [
    {title: 2016, url: 'http://2016.jsconfau.com/'},
    {title: 2014, url: 'http://au.jsconf.com/'},
    {title: 2012}
  ]
}

export const CSS = {
  id: 'css',
  title: 'CSSConf AU 2018',
  logo: css_logo,
  date: '20th March 2018',
  url: 'https://2018.cssconf.com.au',
  description: 'CSSConf is a community conference dedicated to the designers and developers who build the world’s most engaging user interfaces. For the community, from the community.',
  venue,
  titoLink,
  theme: {
    primary: '#ff7500',
    primaryHover: '#E86B00'
  },
  contact: {
    team: 'team@cssconf.com.au',
    sponsorship: 'sponsors@cssconf.com.au',
    twitter: 'cssconfau',
    mailingList: {
      url: 'https://jsconfau.createsend.com/t/j/s/oskty',
      formName: 'cm-oskty-oskty'
    }
  },
  previousEvents: [
    {title: 2016, url: 'http://2016.cssconf.com.au/'},
    {title: 2015, url: 'http://2015.cssconf.com.au/'},
    {title: 2014, url: 'http://2014.cssconf.com.au/'}
  ]
}

export const Decompress = {
  id: 'decompress',
  title: 'Decompress 2018',
  logo: decompress_logo,
  date: '23rd March 2018',
  url: 'https://2018.decompress.com.au',
  description: 'Decompress is a community day for designers and developers run by the CSSConf and JSConf team. Our focus is squarely set on creating an all- inclusive space for attendees to learn, share and create. Topics covered are a blend of CSSConf and JSConf, and will even feature some of the same speakers.',
  venue,
  titoLink,
  theme: {
    primary: '#ff3d3d',
    primaryHover: '#E40000'
  },
  contact: {
    team: 'team@decompress.com.au',
    sponsorship: 'sponsors@decompress.com.au',
    twitter: 'decompressau',
    mailingList: {
      url: 'https://jsconfau.createsend.com/t/j/s/obhjr/',
      formName: 'cm-obhjr-obhjr'
    }
  }
}
