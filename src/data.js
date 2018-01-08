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
    },
    {
      name: 'Addition',
      url: 'http://addition.com.au/',
      image: require('./assets/sponsor-addition.svg'),
      tier: 'diversity'
    }
  ],
  speakers: [
    {
      name: 'Anjuan Simmons',
      twitter: 'anjuan',
      announced: true,
      url: 'http://www.AnjuanSimmons.com',
      image: require('./assets/speaker-anjuan.jpg'),
      location: 'Houston, United States',
      bio:
        'Anjuan operates at the intersection of business and technology by relentlessly focusing on delivering delight to customers while effectively applying engineering talent. He’s a pragmatic Agilist.',
      talk: 'Lending Privilege'
    },
    {
      name: 'Suz Hinton',
      twitter: 'noopkat',
      announced: true,
      url: 'https://github.com/noopkat',
      location: 'New York, United States',
      image: require('./assets/speaker-suz.jpg'),
      bio:
        'Suz is a Cloud Developer Advocate at Microsoft. Suz specializes in accessibility, hardware, JavaScript, and cloud computing. She likes dreaming up fun electronic projects in her spare time.',
      talk:
        "I'm afraid your browser has been talking to the robots again - a gentle intro to WebUSB"
    },
    {
      name: 'Mathias Bynens',
      twitter: 'mathias',
      location: 'Munich, Germany',
      announced: true,
      url: 'https://mathiasbynens.be/',
      image: require('./assets/speaker-mathias.jpg'),
      bio:
        'Mathias works on V8 at Google, and ❤️ JavaScript, HTML, CSS, HTTP, performance, security, Bash, Unicode, i18n, macOS.',
      talk: '$JAVASCRIPT_ENGINE internals for JavaScript developers'
    },
    {
      name: 'Alexander Pope',
      twitter: 'popeindustries',
      announced: true,
      url: 'https://github.com/popeindustries',
      image: require('./assets/speaker-alexander.jpg'),
      location: 'Oslo, Norway',
      bio:
        'Regardless of what Google might think, Alexander Pope does *not* write poetry; he mostly writes JavaScript and pushes pixels around. Originally of Canadian extraction, Alexander now works and lives in the wilds of Norway (Oslo).',
      talk: 'OUTBREAK: index-sw-9a4c43b4b4778e7d1ca619eaaf5ac1db.js'
    },
    {
      name: 'Madlaina Kalunder',
      twitter: 'anialdam',
      announced: true,
      url: 'https://github.com/aadjou',
      location: 'Zürich, Switzerland',
      image: require('./assets/speaker-madlaina.jpg'),
      bio:
        'Madlaina is a full stack developer and a 3d processes magician at Archilogic, making 3d content accessible for people working on the web. She graduated at the Zurich University of Arts with a bachelor degree in Design, specialization Game Design, combining the passion for design and story telling with the newest technologies. She believes in bringing people of different backgrounds together to solve problems in creative ways.',
      talk: 'Building a raytracing engine with JS'
    },
    {
      name: 'Irina Shestak',
      twitter: '_lrlna',
      url: 'github.com/lrlna',
      announced: true,
      location: 'Berlin, Germany',
      image: require('./assets/speaker-irina.jpg'),
      bio:
        'The not so short: Irina is a Berlin via London via Vancouver (geeeez grrrl) software developer who is, oh hey, hello, really into node.js. When she is not in front of a computer, she is exploring the outdoors, gushing over trains, and you will probably find her at your nearest ramen shop™ reading some Beatniks.',
      talk: 'HTTP2, one frame at a time'
    },
    {
      name: 'Craig Spence',
      twitter: 'phenomnominal',
      announced: true,
      url: 'http://phenomnomnominal.github.io/',
      location: 'Wellington, New Zealand',
      image: require('./assets/speaker-craig.jpg'),
      bio:
        "Craig lives in Wellington NZ, where he does JavaScript-y stuff at Trade Me. He loves building cool things that help teams build cool things! He also loves punk rock, Disney's Frozen, and his cat Cosy.",
      talk: 'Fantastic ASTs and Where to Find Them'
    },
    {
      name: 'Brittany Storoz',
      twitter: 'brittanystoroz',
      announced: true,
      url: 'https://github.com/brittanystoroz',
      image: require('./assets/speaker-brittany.jpg'),
      location: 'Denver, United States',
      bio:
        "Brittany is a senior instructor and tech lead for the front-end program at Turing School. She's passionate about building a community that prioritizes making programming friendlier for new developers.",
      talk: "A Year of Other's Bugs: The Sad State of Error Handling"
    },
    {
      name: 'Tim Holman',
      twitter: 'twholman',
      announced: true,
      url: 'http://tholman.com',
      location: '',
      image: require('./assets/speaker-tim.jpg'),
      bio:
        'Tim is a tinkerer, tuner & tamperer of all things online. He enjoys adding a lot of whimsy to the weird wide web, and prides himself with the overall joy it brings to the world.',
      talk: 'Generative Art Speedrun'
    },
    {
      name: 'Malte Ubl',
      twitter: 'cramforce',
      announced: true,
      url: 'https://github.com/cramforce',
      location: 'San Francisco, United States',
      image: require('./assets/speaker-malte.jpg'),
      bio:
        'Malte is the tech lead of the AMP Project for Google. Previously Malte has created JavaScript infrastructure for lots of Google web apps and he is a curator of JSConf EU.',
      talk: 'Designing very large JavaScript applications'
    },
    {
      name: 'Caleb Sotelo',
      twitter: 'calebds',
      url: 'paislee.io',
      announced: true,
      location: 'Pasadena, United States',
      image: require('./assets/speaker-caleb.jpg'),
      bio:
        'Caleb is an Architect at OpenX, where he helps build digital advertising exchanges. He loves hiking the Sierra Nevada mountains and analyzing news articles at scale.',
      talk: 'Taming the World’s Largest Trojan Horse'
    },
    {
      name: 'Madalyn Parker',
      twitter: 'madalynrose',
      announced: true,
      url: 'www.madalynparker.com',
      announced: true,
      location: 'Ann Arbor, United States',
      image: require('./assets/speaker-madalyn.jpg'),
      bio:
        'Madalyn has been writing code since 2007. Engineering at Olark since 2014. Working to cultivate humanity in tech. Outspoken about mental health in tech. Loves coffee, climbing, live music, and rabbits.',
      talk: 'Uncharted Territory: Using aXe to Forge a Path'
    },
    {
      name: 'Vigneshwer Dhinakaran',
      twitter: 'dvigneshwer',
      url: 'https://github.com/vigneshwerd',
      location: 'Bengaluru, India',
      announced: true,
      image: require('./assets/speaker-vigneshwer.jpg'),
      bio:
        'Vigneshwer is an innovative data scientist from Bengaluru who crunches real-time data and builds AI algorithms for complex business problems. He believes that technology needs to have a human-centric design to cater solutions to a diverse audience. He’s an official Mozilla TechSpeaker and is the author of Rust Cookbook.',
      talk: 'Pumping up Node.js modules with Rust'
    },
    {
      name: 'Harriet Lawrence',
      twitter: 'harrietgl',
      url: 'https://github.com/harrietgrace',
      location: 'Melbourne, Australia',
      announced: true,
      image: require('./assets/speaker-harriet.jpg'),
      bio:
        'Harriet is Buildkite’s resident linguist. When she’s not crafting exciting ways to describe new Buildkite features, you’ll find her hanging out in bouldering gyms, or with her nose in a book.',
      talk: 'Why robots suck at fighting harassment'
    },
    {
      name: 'Amy Nguyen',
      twitter: 'amyngyn',
      url: 'http://blog.amynguyen.net/',
      location: 'San Francisco, United States',
      image: require('./assets/speaker-amy.jpg'),
      announced: true,
      bio:
        'Amy is a software engineer on the Stripe Observability team and she wants to make data accessible for everyone. Outside of work, Amy writes about the tech industry, loves baking, and reads too many self-improvement books.',
      talk: 'Using Chrome Developer Tools to Hack Your Way Into Concerts'
    },
    {
      name: 'Nikolai Matvienko',
      twitter: 'matvi3nko',
      announced: true,
      url: 'https://github.com/nickkooper',
      image: require('./assets/speaker-nikolai.jpg'),
      location: 'Saint Petersburg, Russia',
      bio:
        'Nikolay is a full stack JS developer in the Grid Dynamics company. The last three years mainly works on a major e-commerce project in San Francisco, California, where in addition to development, the core responsibilities include: production troubleshooting, diagnostics, profiling, and optimization Node.js applications performance in production. Nikolay is addicted to attending meetups and conferences in “the Valley”.',
      talk: 'Node.js applications diagnostics under the hood'
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
    },
    {
      name: 'Addition',
      url: 'http://addition.com.au/',
      image: require('./assets/sponsor-addition.svg'),
      tier: 'diversity'
    }
  ],
  speakers: [
    {
      name: 'Ire Aderinokun',
      twitter: 'ireaderinokun',
      url: 'https://ireaderinokun.com',
      announced: true,
      image: require('./assets/speaker-ire.jpg'),
      bio:
        'Ire is a self-taught Frontend Developer and User Interface Designer based in Lagos, Nigeria. She currently works as a Software Developer for eyeo, the company behind products like Adblock Plus and Flattr Plus, building open source software to make a better internet. Ire specialised in all things HTML, CSS, and JavaScript, but is passionate about all aspects of technology. She has written over 100 articles on these topics on her blog, bitsofco.de, and has spoken at conferences around Africa and the world.',
      location: 'Lagos, Nigeria',
      talk: 'CSS for the next billion users',
      talkAbstract:
        'There’s been a lot of talk lately about developing for the “next billion users”, which essentially means targeting users who are coming online for the first time in developing countries. This talk will be about different ways we can write CSS for the “next billion users”. I will talk about my experience developing websites for users in Nigeria and cover areas such as performance, accessibility, and progressive enhancement.'
    },
    {
      name: 'Brenda Storer',
      twitter: 'brendamarienyc',
      announced: true,
      url: 'http://brendastorer.com/',
      bio:
        'Brenda is a designer and front-end developer Thoughtbot, a Girl Develop It alumnus turned instructor, and an assistant organizer for CSS Layout Club in NYC.',
      location: 'New York, United States',
      image: require('./assets/speaker-brenda.jpg'),
      talk: 'How to use CSS Grid today in the real world',
      talkAbstract:
        "The new CSS Grid specification is here! Sure, it’s fun to play with, but is it truly ready or even practical to use for everyday work? As a designer and front end developer at a software development agency, I've been using CSS Grid in production websites since its initial release to browsers in March 2017 and I’m a huge fan. It is already making my life easier.<br /><br/>In this talk, I’ll not only present live examples of CSS Grid used in production with examples of the different syntax, but I’ll also go over a bit of its backstory, its similarities and differences from Flexbox, and why unlike it's sibling Flexbox, its ready to use right away. I’ll show step by step how you can progressively enhance your site with CSS Grid and either write a bulletproof fallback for older browsers, or still use your existing grid framework as a fallback (yes, even Bootstrap), all with pure CSS, no JavaScript required!"
    },
    {
      name: 'Theresa Ma',
      twitter: 'mapotato',
      announced: true,
      url: 'https://www.yelp.com/styleguide',
      bio:
        "Theresa is a Toronto raised and San Francisco based software engineer with an interdisciplinary background in cognitive science and philosophy. She's a relentless advocate for the design system at Yelp.",
      location: 'San Francisco, United States',
      image: require('./assets/speaker-theresa.jpg'),
      talk: 'Effective design and engineering collaboration',
      talkAbstract:
        'Hey designers, have you ever passed off a design to an engineer, only to later find out something unexpected? Maybe the design needs to be re-done because of technical tradeoffs? Maybe something different has been built? Maybe it’s lacking overall polish (why isn’t that button 3px to the left?)?<br/><br/>Hey engineers, have you ever received a mockup from a designer, and had a bunch of questions about it? Maybe it didn’t consider edge cases? Maybe the components in the mockup look different from the components in your pre-built design system? Maybe you’re not sure whether it has to be pixel perfect?<br/><br/>Communication is hard. Collaboration is hard. Strong relationships between design and engineering teams are the foundation for building a strong product. This talk will cover strategies for more effective interdisciplinary communication. This is a talk for both engineers and designers, showing a little bit of each other’s world to foster empathy and understanding for the other discipline while providing practical considerations for day to day communication challenges.'
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
        'Behind the illusions: impossibly high-performance layout animations',
      talkAbstract:
        "Have you ever wanted to dynamically animate layouts without sacrificing performance? In this talk, innovative illusions will be revealed that will transform your static user interfaces into lively, intuitive experiences for your users at 60 frames per second. We'll investigate even the most complex animated layouts and discover how certain techniques, such as FLIP, containment, clever transforms, pseudoelements, CSS variables, and more can make layout animations easier and smoother.<br /><br /> There will be demos that showcase smooth layout transitions, interrupted transitions, natural curved motion paths, resizing with border radius, seamless gradient transitions, and other common use cases. There is plenty to learn from native apps to improve the UI and UX of our web apps, and those secrets will be revealed."
    },
    {
      name: 'Jeremy Wagner',
      twitter: 'malchata',
      announced: true,
      url: 'https://jeremywagner.me/',
      bio:
        'Jeremy Wagner is a web developer from Saint Paul, Minnesota who frequently blogs on the topic of web performance. He is also the author of Web Performance in Action from Manning Publications.',
      location: 'Saint Paul, United States',
      image: require('./assets/speaker-jeremy.jpg'),
      talk: 'Faster fonts for speed fanatics',
      talkAbstract:
        'Fonts! Guess those are a big thing now. You’re likely familiar with at least getting custom typefaces up and running. You probably even know some neat tricks beyond the basics, but do you know how to make your fonts fast? I mean, really fast? Fast is important. <br /><br />Fonts are part of the critical request chain. If you’re not paying attention to your fonts beyond merely slapping up a Google Fonts link tag, you might be missing some big opportunities to speed things up. Stuff like preloading fonts, using font-display to render fallback text faster, more creative sub-setting choices, and electing to avoid non-essential typefaces specifically for users on limited data plans. If fast is your thing, zip into this session to allay your font fears, and learn to tune up your typefaces for maximum speed!'
    },
    {
      name: 'Julie Grundy',
      twitter: 'stringy',
      announced: true,
      url: 'http://www.juliegrundy.id.au/',
      bio:
        'Julie Grundy is a front-end dev turned accessibility consultant. She believes in an independent democratic web and wishes everyone was issued a personal domain name at birth.',
      location: 'Perth, Australia',
      image: require('./assets/speaker-julie.jpg'),
      talk: 'Can you see that OK? CSS tips for low-vision accessibility',
      talkAbstract:
        "So much accessibility advice is based on the needs of screenreader users - but there are many more people with other types of vision problems who've never used a screenreader program in their life. Heck, at 9% of the Australian population, there are more people with vision impairments visiting your site than Internet Explorer users. What tools and techniques are they using, and how will that affect your design?<br/><br/>I’ll show you the effects of different assistive tools for low-vision on a sample site, including text resizing and high-contrast themes. You’ll learn a range of simple yet effective CSS techniques to help your sites cope with those effects, such as proportional units and transparent borders. These techniques can be used by front-enders with CSS skills ranging from beginner to expert. After this talk you’ll be confident in your ability to make any good visual design more user-friendly for people using vision-support tools."
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
      talk: 'Interaction of color systems',
      talkAbstract:
        'Color is the most relative medium in art. This fact makes working with color in design systems particularly challenging. Few people seem to want to claim to be an expert in color—perhaps because there’s an immensely deep amount to learn, or perhaps it’s because color is one of those things we hate to get wrong. Whatever the reason, color remains a contentious but often critical part of design.<br/><br/>I’ll be sharing my journey into color, from the technical challenges to how people respond to it. We’ll take a look at the efforts required in updating large scale web applications like Github, challenges in programatically generating colors, creating color naming conventions, color accessibility, and testing the interaction of color with other parts of a design system.'
    },
    {
      name: 'Sam Richard',
      twitter: 'snugug',
      announced: true,
      url: 'https://snugug.com',
      bio:
        'Sam Richard, better known as Snugug, is a developer and designer with a love of building open source tools for both. He also geeks out on content, process, transformation, and food.',
      location: 'New York, United States',
      image: require('./assets/speaker-sam.jpg'),
      talk: 'Magic tricks with Houdini',
      talkAbstract:
        "This talk will focus on the working being done by the CSS Houdini Task Force to provide us with the ability to extend the browser’s render engines with JavaScript, above and beyond simply running JS on the main thread or a web worker. The power we've gotten to control the cache with Service Workers? That's but the first step of what Houdini will offer for render engines. This talk will focus on the following:<br/><br/> <ul><li>What is the Houdini Task Force?</li><li>What types of things can we expect to see coming from them?</li><li>What’s available today and where, what’s going to be available in the future</li><li>Practical examples, with code, that can be played with today</li></ul>As what is available is currently being worked on, this talk with be as up-to-date of an overview of what’s available and coming in the future as can be provided. This stuff is definitely in the future type stuff, but learning about it now will prepare attendees for what they can expect browsers to be capable of doing in the upcoming years."
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
      talk: 'Journeys: What makes a developer, really?',
      talkAbstract:
        'As part of Origins, I have been researching the different paths of coders and designers into the tech industry, and the paths are wonderfully varied and unique. However, we continue to raise up and legitimise certain paths over others, implicitly deciding who gets to be a developer of CSS or Javascript. That language then feeds into job postings and wider perceptions of what it is to write CSS, what it is to write Javascript (or even Javascript frameworks), and the legitimacy of different learning paths. From this, we create hierarchies and draw lines which result in different pay scales and fluctuating perceptions of the code we write. This threatens to devalue inclusivity work, and the development community as a whole— let’s learn about the unconventional paths into development and consciously pull away from the damaging hierarchies we create. Let’s celebrate these journeys instead!'
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
