import js_logo from './js/logo.svg'
import css_logo from './css/logo.svg'
import decompress_logo from './decompress/logo.svg'
import { newsForConference } from './shared/news/index'

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
  hasSchedule: true,
  soldOut: true,
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
      image: require('./assets/sponsor-zann-addition.svg'),
      tier: 'diversity'
    },
    {
      name: 'Google',
      url: 'https://google.com',
      image: require('./assets/sponsor-google.svg'),
      tier: 'travel'
    },
    {
      name: 'Stripe',
      url: 'https://stripe.com',
      image: require('./assets/sponsor-stripe.svg'),
      tier: 'travel'
    },
    {
      name: 'Biarri',
      url: 'https://biarri.com/',
      image: require('./assets/sponsor-biarri.svg'),
      tier: 'community'
    },
    {
      name: 'AMP Project',
      url: 'https://www.ampproject.org/',
      image: require('./assets/sponsor-amp.svg'),
      tier: 'title'
    },
    {
      name: 'SiteMinder',
      url: 'https://www.siteminder.com/',
      image: require('./assets/sponsor-siteminder.svg'),
      tier: 'main'
    }
  ],
  speakers: [
    {
      name: 'Patricia Realini',
      talkVideo: 'XV3zUI5WiOM',
      twitter: 'patriciarealini',
      url: 'http://patriciarealini.com',
      location: 'Los Angeles, United States',
      image: require('./assets/speaker-patricia.jpg'),
      announced: true,
      bio:
        "Patricia is a front end engineer, an artist, and a woman dedicated to intersectional inclusivity for underrepresented minorities in tech. Her projects have included: a workshop on intersectionality & effective allyship at DinosaurJS in Denver, Colorado, D&I panelist for Processing Foundation & NYU, and hands-on community organizing. When she's not writing javascript, she's writing documentation. When she's not writing docs, she's collecting records and recipe testing.",
      talk: '"Is A Hot Dog A Sandwich?" And Other Analogies Not To Trifle With',
      talkAbstract:
        "Metaphors are an essential means of communication and method of teaching for developers. Without them and Lin Clark it would be much more difficult for teams to adopt Redux. But learning by association has it's limits. When we only discuss the things we can relate to we reinforce existing stereotypes that box us in. Instead of thinking outside the box, we will discuss how thinking about the box itself is the key to breaking down our unconscious bias. Together we will learn how to dismantle the concepts that divide us, techniques for better engaging with people of all backgrounds, and how to empower the systems we work in to be even more performant than our code."
    },
    {
      name: 'Suz Hinton',
      twitter: 'noopkat',
      announced: true,
      url: 'https://github.com/noopkat',
      location: 'New York, United States',
      image: require('./assets/speaker-suz.jpg'),
      talkVideo: 'ov2R3vEn14k',
      bio:
        'Suz is a Cloud Developer Advocate at Microsoft. Suz specializes in accessibility, hardware, JavaScript, and cloud computing. She likes dreaming up fun electronic projects in her spare time.',
      talk:
        "I'm afraid your browser has been talking to the robots again - a gentle intro to WebUSB",
      talkAbstract:
        'The browser’s capibilities have snuck up on us over the years, and it’s turned into a full blown operating system! "But wait," I hear you protest, "it’s not like the browser can talk to stuff I have plugged in to my USB ports!". Ah! But it can!<br/><br/>The new WebUSB spec has arrived, and is already supported in at least one browser today. The previous hacks of connecting browsers to robots and other hardware will soon be a thing of the past. WebUSB as a first class API citizen opens up some great opportunities to create new and delightful experiences with robotics.<br/><br/>I’ll introduce you to the WebUSB API, its history, and compare it to previous ’hacks’ to demonstrate why this is such a big deal for you, as a web developer. There will be real hardware shown on stage ready to inspire you to think outside of the box of what browsers are really meant to be used for.'
    },
    {
      name: 'Mathias Bynens',
      twitter: 'mathias',
      talkVideo: 'm9cTaYI95Zc',
      location: 'Munich, Germany',
      announced: true,
      url: 'https://mathiasbynens.be/',
      image: require('./assets/speaker-mathias.jpg'),
      bio:
        'Mathias works on V8 at Google, and ❤️ JavaScript, HTML, CSS, HTTP, performance, security, Bash, Unicode, i18n, macOS.',
      talk: '$JAVASCRIPT_ENGINE internals for JavaScript developers',
      talkAbstract:
        'This presentation demonstrates how learning just a little bit about JavaScript engine internals can help you improve the run-time performance of your JavaScript code — not just in $JAVASCRIPT_ENGINE specifically, but across all JavaScript engines!<br/><br/>I’ll start by explaining how $JAVASCRIPT_ENGINE handles arrays behind the scenes, and especially how it can optimize operations on them. I can do all of this with my “JS developer” hat on, i.e. without showing a single line of C++. This knowledge leads to useful insights for JavaScript developers wishing to improve their code’s run-time performance. In the end, the audience will walk away with several practical performance tips, and a deeper understanding of what’s going on under the hood.'
    },
    {
      name: 'Alexander Pope',
      twitter: 'popeindustries',
      talkVideo: 't7WraVE8rY8',
      announced: true,
      url: 'https://github.com/popeindustries',
      image: require('./assets/speaker-alexander.jpg'),
      location: 'Oslo, Norway',
      bio:
        'Regardless of what Google might think, Alexander Pope does *not* write poetry; he mostly writes JavaScript and pushes pixels around. Originally of Canadian extraction, Alexander now works and lives in the wilds of Norway (Oslo).',
      talk: 'OUTBREAK: index-sw-9a4c43b4b4778e7d1ca619eaaf5ac1db.js',
      talkAbstract:
        'August 30, 2016, was by all accounts an average Tuesday, and release number 523 just a simple re-factor, but something went horribly wrong that day: bad code escaped from the office, and it quickly spread to infect tens of thousands, giving rise to a hoard of zombie ServiceWorkers!<br/><br/>This is a disaster about a typo. This is a thriller about technology out of control. This is a tragedy about wasted CPU cycles. This is a cautionary tale about living in the age of ServiceWorker.'
    },
    {
      name: 'Madlaina Kalunder',
      twitter: 'anialdam',
      announced: true,
      url: 'https://github.com/aadjou',
      talkVideo: '4W06d_kcafE',
      location: 'Zürich, Switzerland',
      image: require('./assets/speaker-madlaina.jpg'),
      bio:
        'Madlaina is a full stack developer and a 3d processes magician at Archilogic, making 3d content accessible for people working on the web. She graduated at the Zurich University of Arts with a bachelor degree in Design, specialization Game Design, combining the passion for design and story telling with the newest technologies. She believes in bringing people of different backgrounds together to solve problems in creative ways.',
      talk: 'Building a raytracing engine with JS',
      talkAbstract:
        'In this talk we will build a 3D ray tracer with Javascript. We learn about the basics of real time 3D graphics and what we need in order to produce realistic looking 3D graphics in the browser.<br/><br/>It’s fun to learn about 3D and graphics, plus seeing how a seemingly complex concept such as ray tracing can be broken down to simpler concepts is inspiring. I enjoyed the artistic aspect of using maths to make 3D objects appear in a browser - and demystifying it in the process of learning. I hope to show and inspire the audience to experiment.'
    },
    {
      name: 'Irina Shestak',
      twitter: '_lrlna',
      url: 'github.com/lrlna',
      talkVideo: 'KpkTLmLTvAI',
      announced: true,
      location: 'Berlin, Germany',
      image: require('./assets/speaker-irina.jpg'),
      bio:
        'The not so short: Irina is a Berlin via London via Vancouver (geeeez grrrl) software developer who is, oh hey, hello, really into node.js. When she is not in front of a computer, she is exploring the outdoors, gushing over trains, and you will probably find her at your nearest ramen shop™ reading some Beatniks.',
      talk: 'HTTP2, one frame at a time',
      talkAbstract:
        "Node Files.<br/> Take #1337.<br/>~ * Action! * ~<br/><br/>INT. JSCONF AU CONFERENCE VENUE<br/><br/>The camera zooms in on an intense discussion between Scully and Mulder. Both are huddled around a terminal, both are uncertain about the next steps. Ghosts of old TCP connections wail in the background.<br/>Scully is frantically typing. The left hand side shows a new session starting. Soon a new stream created. Multiple requests come in and Scully and Mulder frantically look at each other with a single face expression -- what. do. we. do. now? A minute passes. Scully looks like she has an idea.<br/><br/>~ * Scene * ~<br/><br/>In this fresh off the press episode of Node Files, I will take you to  a set of Node.js' implementation of HTTP2. Its quirks, its benefits,  and its workings explained and illustrated. How do we get from an  established connection to TLS decryption? How does the concept of  session come in to play? How does node handle memory usage when it comes  to HTTP2? And what are these frame things everyone keeps talking about?  This and more explained in HTTP2, one frame at a time. Coming to theatre near you from JSConf AU in March 2018."
    },
    {
      name: 'Craig Spence',
      twitter: 'phenomnominal',
      announced: true,
      url: 'http://phenomnomnominal.github.io/',
      location: 'Wellington, New Zealand',
      image: require('./assets/speaker-craig.jpg'),
      talkVideo: 'UKCoRKzRqN4',
      bio:
        "Craig lives in Wellington NZ, where he does JavaScript-y stuff at Trade Me. He loves building cool things that help teams build cool things! He also loves punk rock, Disney's Frozen, and his cat Cosy.",
      talk: 'Fantastic ASTs and Where to Find Them',
      talkAbstract:
        'Oh no! Harry Potter, the hero from the J K Rowling’s wizarding universe, has been cursed by the super-villain, Lord Voldemort, and now he is trapped inside the Internet! <br/><br/>Harry knows Parseltongue, which means that he can talk to snakes. Incredibly, Parseltongue also happens to be a Turing complete programming language! In order for Harry to escape from the Internet, we need to transpile Parseltongue into JavaScript. In order to do that we need to learn all about Abstract Syntax Trees and how to use them to manipulate code. <br/><br/>This talk goes through the details of these magical data-structures, and all about language transformation, including lexing, parsing, code generation and creating source maps.By the end of the talk, attendants should have an idea of how ASTs work, how they are used in code transformation, and how they can be used to manipulate and interrogate code at a structural level.'
    },
    {
      name: 'Brittany Storoz',
      twitter: 'brittanystoroz',
      announced: true,
      url: 'https://github.com/brittanystoroz',
      image: require('./assets/speaker-brittany.jpg'),
      location: 'Denver, United States',
      talkVideo: 'fQHH6aSpYV0',
      bio:
        "Brittany is a senior instructor and tech lead for the front-end program at Turing School. She's passionate about building a community that prioritizes making programming friendlier for new developers.",
      talk: "A Year of Other's Bugs: The Sad State of Error Handling",
      talkAbstract:
        'As an instructor of front-end software engineering, I’ve seen first-hand how difficult it is for new developers to navigate call stacks and decrypt error messages. We have built a culture that considers effective error handling a secondary priority, which has a significant impact on those who are just learning to code. Debugging is a huge part of the development process, and the less time we have to spend spinning our wheels, fighting an error message, the more time we have to get back to the fun stuff.<br/><br/>The more experience we have in engineering, the better we get at debugging broken code. We learn how to isolate the problem, decode cryptic error messages, and figure out the most effective terms to research. The faster we develop these skills, the faster we lose our perspective on what it’s like to be a beginner. It’s only when we watch others struggle through these experiences that it becomes obvious just how ineffective our error handling is. Let’s explore the shortcomings of the current state of error handling and how we can improve upon this to make engineering friendlier for newcomers.<br/><br/>This talk is applicable to developers of all skill-levels working with JavaScript. I hope to enlighten engineers on how to create more effective error handling for juniors, and also demonstrate how new developers are currently navigating the choppy waters we’ve presented them with when things go wrong.'
    },
    {
      name: 'Tim Holman',
      twitter: 'twholman',
      announced: true,
      url: 'http://tholman.com',
      location: '',
      image: require('./assets/speaker-tim.jpg'),
      talkVideo: '4Se0_w0ISYk',
      bio:
        'Tim is a tinkerer, tuner & tamperer of all things online. He enjoys adding a lot of whimsy to the weird wide web, and prides himself with the overall joy it brings to the world.',
      talk: 'Generative Art Speedrun',
      talkAbstract:
        'For so many of us, myself included, the art world is the entry point into the coding world. Here we will explore ins and outs of generative art, and experience the joy of creating art with code. Generative art can be as simple or complex as you like, at the end of the day, everyone will have the mindset and processes down to create their own unique pieces of joy.<br/><br/>This talk begins with the basics of generative art, a small history, including some of the earliest "code art", proceeding into examples through history leading us here. The goal of the "speed run" is to give the audience as much knowledge about generative art as possible in the given time, while also showing the tooling, and surprisingly few steps it takes to get creating unique and original art. Generally speaking, there is no limitation to the audience of this talk, it really sits on the borderlines of people who enjoy art, code and science, and everyone will take home a different piece of that puzzle.<br/><br/>The talk shows both the simplicity and beauty of generative art, with just a few lines of code, we can put the computer to work creating millions of unique pieces.'
    },
    {
      name: 'Malte Ubl',
      twitter: 'cramforce',
      talkVideo: 'ZZmUwXEiPm4',
      announced: true,
      url: 'https://github.com/cramforce',
      location: 'San Francisco, United States',
      image: require('./assets/speaker-malte.jpg'),
      bio:
        'Malte is the tech lead of the AMP Project for Google. Previously Malte has created JavaScript infrastructure for lots of Google web apps and he is a curator of JSConf EU.',
      talk: 'Designing very large JavaScript applications',
      talkAbstract:
        'Over the last years a modular approach to programming in JS gained a huge following and with the advent of virtual DOM building isomorphic JavaScript application for the web became dramatically more approachable; yet, we are still largely deploying monolithic application blobs that know how to render the settings page of our single page apps before accepting user input on the homepage.<br/><br/>My talk will explore 2 primary themes:<br/><br/><ul><li>How to build highly sophisticated web apps that load a constant amount of JS to make the first page the user sees interactive; where constant means, even if you have 100s of engineers write code for your app for a year, the size will still be the same.</li><li>How to throughout the lifecycle of your application never load a single line of JS that is not currently needed.</li></ul>As part of this exploration I will introduce 3 novel concepts: lazy decoration, asynchronous dependency injection and reverse dependencies in module systems.</br><br/>Come see my talk if you enjoy nerding out on over-engineering problems, or want to build the next YouTube or Twitter.'
    },
    {
      name: 'Caleb Sotelo',
      twitter: 'calebds',
      url: 'paislee.io',
      talkVideo: 'Oz-87M6O3HY',
      announced: true,
      location: 'Pasadena, United States',
      image: require('./assets/speaker-caleb.jpg'),
      bio:
        'Caleb is an Architect at OpenX, where he helps build digital advertising exchanges. He loves hiking the Sierra Nevada mountains and analyzing news articles at scale.',
      talk: 'Taming the World’s Largest Trojan Horse',
      talkAbstract:
        'In 2017, companies globally spent $80B on digital advertising—web pages and mobile apps—delivering ads to billions of users, trillions of times. The majority of these ads were rendered in JavaScript environments. Technically, the challenge for JS developers is to instantaneously find the perfect match between an advertiser and a user, regardless of the website, app, or user profile. This is fun. But economically, we’ve been incentivized to create a global delivery mechanism for arbitrary code onto every connected device, without a care for user experience. It’s the world’s largest, and spammiest, Trojan Horse, and JS developers created it.<br/><br/>(1) Construction — What does this Trojan Horse look like at a technical level? This section covers JavaScript constructs that are really unique to ad-tech, including the rise and anatomy of the “ad tag”, creating sandboxes for arbitrary markup, cookie tracking and pixel syncing, and the impression beacon.<br/><br/>(2) Payload — What kinds of undesirable things are being delivered to publisher properties, and onto our devices? This section goes beyond specific examples of ad quality issues, sniffing, tracking, and malware, also looking at a longer-term invasion happening beneath our feet: have content creators begun trading clicks for a kind of dystopian digital future where ad blockers are simply common sense?<br/><br/>(3) Inversion — What can we as JS developers do about all this? This section argues that we have the power to change ad technology from a Trojan Horse into a powerful message delivery system, one that allows the coexistence of free content, advertising, and delightful user experiences. Ethical and optimistic developers will be the Trojan Horse inside the Trojan Horse.'
    },
    {
      name: 'Madalyn Parker',
      twitter: 'madalynrose',
      announced: true,
      url: 'www.madalynparker.com',
      talkVideo: 'JWqHioGOELs',
      location: 'Ann Arbor, United States',
      image: require('./assets/speaker-madalyn.jpg'),
      bio:
        'Madalyn has been writing code since 2007. Engineering at Olark since 2014. Working to cultivate humanity in tech. Outspoken about mental health in tech. Loves coffee, climbing, live music, and rabbits.',
      talk: 'Uncharted Territory: Using aXe to Forge a Path',
      talkAbstract:
        "I remember attending my first JSConf in 2014 and watching Marcy Sutton talk about accessibility and the Shadow DOM. I was hooked on creating an accessible web for everyone. However, it's really hard to get accessibility prioritized when you're running as a lean startup.<br/><br/>Years later, my company is ready to hop on the train and now we're working to implement the first ever ADA compliant chat box used in a support and sales context. I've seen lots of talks on accessibility basics and implementing aria on static sites, but few that demonstrate what it's actually like to approach a codebase architected without accessibility in mind (especially one that will run on sites you have no control over) and add that layer in.<br/></br>I'm working on this project now (with a due date of Dec 2017) so I don't have immediate outcomes to list here but I'll cover the problems I ran into and will hopefully be able to help other developers in similar situations with their code bases.</br></br>I want to show that it's okay to roll out accessibility changes bit by bit, that it doesn't have to be all or nothing, and that there are good tools out there to help you out. I think the stumbling blocks I come across (and overcome) in this project would be useful for others who find themselves in my position. Part of what made this project difficult was my inability to accurately estimate how long or how much work it would take to update our application. Hopefully, with the lessons I learn, I’ll be able to help someone else blaze their own trail at their company."
    },
    {
      name: 'Vigneshwer Dhinakaran',
      twitter: 'dvigneshwer',
      url: 'https://github.com/vigneshwerd',
      location: 'Bengaluru, India',
      announced: true,
      talkVideo: 'Zqzwkiii2NE',
      image: require('./assets/speaker-vigneshwer.jpg'),
      bio:
        'Vigneshwer is an innovative data scientist from Bengaluru who crunches real-time data and builds AI algorithms for complex business problems. He believes that technology needs to have a human-centric design to cater solutions to a diverse audience. He’s an official Mozilla TechSpeaker and is the author of Rust Cookbook.',
      talk: 'Pumping up Node.js modules with Rust',
      talkAbstract:
        'If you’ve spent much time writing and debugging  node module code for performance in a Js app, you’ve probably had a hard  time managing memory and native code integration.<br/><br/>In  this talk, we venture deep into the belly of the Rust Language to  uncover the secret incantations for building high performance and memory  safe node modules using Neon, which helps you to write native node js  modules and it is definitely gonna mesmerize you with its easy language  bridge capabilities for building high performant and crash-free Js apps.<br/><br />Rust is out there creating a new generation of system  programmers, it has a lot to offer in terms of safety and performance  for high-level programming languages such Python, Ruby, Js and more with  its easy Foreign Function Interface capabilities which enables  developers to easily develop bindings for foreign code.'
    },
    {
      name: 'Amy Nguyen',
      twitter: 'amyngyn',
      talkVideo: 'tXssxJgIHbs',
      url: 'http://blog.amynguyen.net/',
      location: 'San Francisco, United States',
      image: require('./assets/speaker-amy.jpg'),
      announced: true,
      bio:
        'Amy is a software engineer on the Stripe Observability team and she wants to make data accessible for everyone. Outside of work, Amy writes about the tech industry, loves baking, and reads too many self-improvement books.',
      talk: 'Using Chrome Developer Tools to Hack Your Way Into Concerts',
      talkAbstract:
        "Chrome Developer Tools is magical. It lets you record network traffic, step through code, modify the DOM, and more! To learn when we would use each of these features, I'll walk you through my adventures trying to trick Taylor Swift’s website into giving me concert tickets. Instead of reading through all of the JS files in her site and scrolling through hundreds of useless network activity logs, I learned how to use XHR breakpoints, filter network activity by type and domain, and recreate requests with CURL. I'll show you all of these tools and a few other tricks, and by the end of this talk, you will know how to reverse engineer any website and manipulate it to do your bidding."
    },
    {
      name: 'Nikolai Matvienko',
      twitter: 'matvi3nko',
      talkVideo: 'y2PRfNsY28w',
      announced: true,
      url: 'https://github.com/nickkooper',
      image: require('./assets/speaker-nikolai.jpg'),
      location: 'Saint Petersburg, Russia',
      bio:
        'Nikolay is a full stack JS developer in the Grid Dynamics company. The last three years mainly works on a major e-commerce project in San Francisco, California, where in addition to development, the core responsibilities include: production troubleshooting, diagnostics, profiling, and optimization Node.js applications performance in production. Nikolay is addicted to attending meetups and conferences in “the Valley”.',
      talk: 'Node.js applications diagnostics under the hood',
      talkAbstract:
        'Based on my experience in diagnosing and troubleshooting highload e-commerce Node.js app in production, I’ve identified three stages in the Node.js diagnostic history. I’d like to briefly tell this path and show where we are now and tell in details "How to debug and tracing Node.js apps on different levels, and how to track performance problems and memory leaks inside Node.js apps in 2018":<br/><br/><ul><li>Production troubleshooting: I show and explain the strategy of creation and debugging core dump using llnode, node-report and X-Transaction-ID in our company with real-life examples.</li><li>Memory leaks: I show how to identify memory leaks, memory holders using V8 GC tracing, llnode debugging + gencore tool with real-life examples.</li><li>Performance: I show how to use 0x flame graph to find performance bottlenecks, how identify Event Loop lags, GC slow work and what can give Async Hooks for that with real-life examples.</li></ul>'
    },
    {
      name: 'Milly Schmidt',
      twitter: 'meelijane',
      announced: false,
      url: 'https://estimate-work.com/',
      image: require('./assets/mc-milly.jpg'),
      location: 'Melbourne, Australia',
      bio:
        "Milly is a front-end engineer and strategic designer, currently working with EstimateOne in Melbourne. She's passionate about helping growing product-based startups to embrace the new way of doing thing with design thinking, systems thinking and Lean and Agile methodologies. She's an advocate for a more diverse technology industry, and works with Code Like a Girl and Girls in Tech to teach vital future-focused tech skills to those who may not have access to them normally.",
      talk: '',
      talkAbstract: '',
      isHost: true
    },
    {
      name: 'Charlie Gleason',
      twitter: 'superhighfives',
      announced: false,
      url: 'https://charliegleason.com/',
      image: require('./assets/mc-charlie.jpg'),
      location: 'London, United Kingdom',
      bio:
        'Charlie is the lead designer and front end developer on the marketing team at Heroku. His interests include philosophy, outer space, and cats-though not necessarily in that order.',
      talk: '',
      talkAbstract: '',
      isHost: true
    },
    {
      name: 'Nat Dudley',
      twitter: 'NatDudley',
      announced: false,
      url: 'http://natdudley.com/',
      image: require('./assets/mc-nat.jpg'),
      location: 'Tāmaki Makaurau, Aotearoa',
      bio:
        "Nat is the Head of Design for http://Figure.NZ/, where she works to take dusty spreadsheets of open data and make them into charts, maps, and other tools New Zealanders can use to understand our country. She's an accidental technologist, and a recovering recruiter and comms person. Nat advocates for an intersectional, inclusive approach to designing our future. You'll most often find her boxing, knitting, and patting dogs in the street.",
      talk: '',
      talkAbstract: '',
      isHost: true
    },
    {
      name: 'Laura Summers',
      twitter: 'summerscope',
      announced: false,
      url: '',
      image: require('./assets/mc-laura.jpg'),
      location: 'Melbourne, Australia',
      bio:
        "Laura is a multi-disciplinary designer who works across user experience research, design and front-end development. She fell into tech sideways, a happy accident that introduced her to programming, application design and most importantly her people - and she's never looked back. Asking questions, unpacking assumptions and trying to get to the bottom of things are some of her favourite activities - supported by methodologies all the cool kids are using, such as Lean, Agile and Design Thinking. She's a passionate advocate for improving diversity in technology and ensuring our workplaces are welcoming and inclusive. Also: cats rule, dogs drool.",
      talk: '',
      talkAbstract: '',
      isHost: true
    }
  ],
  news: newsForConference('js')
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
  soldOut: true,
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
  hasSchedule: true,
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
      tier: 'title'
    },
    {
      name: 'Addition',
      url: 'http://addition.com.au/',
      image: require('./assets/sponsor-zann-addition.svg'),
      tier: 'diversity'
    },
    {
      name: 'eyeo',
      url: 'https://eyeo.com/',
      image: require('./assets/sponsor-eyeo.png'),
      tier: 'travel'
    },
    {
      name: 'Yelp',
      url: 'https://www.yelp.com/',
      image: require('./assets/sponsor-yelp.png'),
      tier: 'travel'
    },
    {
      name: 'Today',
      url: 'https://today.design/',
      image: require('./assets/sponsor-today.svg'),
      tier: 'diversity'
    },
    {
      name: 'Cocina Mexico',
      url: 'http://www.locotaco.com.au/',
      image: require('./assets/sponsor-cocina.jpg'),
      tier: 'community'
    }
  ],
  speakers: [
    {
      name: 'Brenda Storer',
      twitter: 'brendamarienyc',
      talkVideo: 'fVX0xscGP9o',
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
      talkVideo: 'REwp9rQQM7I',
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
      talkVideo: 'zVbLR7rI8ZU',
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
      talkVideo: 'iEinIwNppW4',
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
      talkVideo: 'Wq2-cZ-vZBc?rel=0&amp;controls=0&amp;show',
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
      talkVideo: 'AbpS3Z3xXE0',
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
      talkVideo: 'FYWZrLpN5Po',
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
      talkVideo: 'LB-DvtCHOgE',
      announced: true,
      bio:
        'Ivana is a UI/UX designer. She fell in love with the web on Geocities and Neopets many years ago, and found her way into UX design via neuroscience research, rock climbing instruction, and video game testing. Originally born in Sarajevo, she has lived in Croatia, all over Canada, and Scotland, and is now based in Vancouver working remotely for Customer.io.',
      location: 'Vancouver, Canada',
      image: require('./assets/speaker-ivana.jpg'),
      talk: 'Journeys: What makes a developer, really?',
      talkAbstract:
        'As part of Origins, I have been researching the different paths of coders and designers into the tech industry, and the paths are wonderfully varied and unique. However, we continue to raise up and legitimise certain paths over others, implicitly deciding who gets to be a developer of CSS or Javascript. That language then feeds into job postings and wider perceptions of what it is to write CSS, what it is to write Javascript (or even Javascript frameworks), and the legitimacy of different learning paths. From this, we create hierarchies and draw lines which result in different pay scales and fluctuating perceptions of the code we write. This threatens to devalue inclusivity work, and the development community as a whole— let’s learn about the unconventional paths into development and consciously pull away from the damaging hierarchies we create. Let’s celebrate these journeys instead!'
    },
    {
      name: 'Milly Schmidt',
      twitter: 'meelijane',
      announced: false,
      url: 'https://estimate-work.com/',
      image: require('./assets/mc-milly.jpg'),
      location: 'Melbourne, Australia',
      bio:
        "Milly is a front-end engineer and strategic designer, currently working with EstimateOne in Melbourne. She's passionate about helping growing product-based startups to embrace the new way of doing thing with design thinking, systems thinking and Lean and Agile methodologies. She's an advocate for a more diverse technology industry, and works with Code Like a Girl and Girls in Tech to teach vital future-focused tech skills to those who may not have access to them normally.",
      talk: '',
      talkAbstract: '',
      isHost: true
    },
    {
      name: 'Charlie Gleason',
      twitter: 'superhighfives',
      announced: false,
      url: 'https://charliegleason.com/',
      image: require('./assets/mc-charlie.jpg'),
      location: 'London, United Kingdom',
      bio:
        'Charlie is the lead designer and front end developer on the marketing team at Heroku. His interests include philosophy, outer space, and cats-though not necessarily in that order.',
      talk: '',
      talkAbstract: '',
      isHost: true
    },
    {
      name: 'Nat Dudley',
      twitter: 'NatDudley',
      announced: false,
      url: 'http://natdudley.com/',
      image: require('./assets/mc-nat.jpg'),
      location: 'Tāmaki Makaurau, Aotearoa',
      bio:
        "Nat is the Head of Design for http://Figure.NZ/, where she works to take dusty spreadsheets of open data and make them into charts, maps, and other tools New Zealanders can use to understand our country. She's an accidental technologist, and a recovering recruiter and comms person. Nat advocates for an intersectional, inclusive approach to designing our future. You'll most often find her boxing, knitting, and patting dogs in the street.",
      talk: '',
      talkAbstract: '',
      isHost: true
    },
    {
      name: 'Laura Summers',
      twitter: 'summerscope',
      announced: false,
      url: '',
      image: require('./assets/mc-laura.jpg'),
      location: 'Melbourne, Australia',
      bio:
        "Laura is a multi-disciplinary designer who works across user experience research, design and front-end development. She fell into tech sideways, a happy accident that introduced her to programming, application design and most importantly her people - and she's never looked back. Asking questions, unpacking assumptions and trying to get to the bottom of things are some of her favourite activities - supported by methodologies all the cool kids are using, such as Lean, Agile and Design Thinking. She's a passionate advocate for improving diversity in technology and ensuring our workplaces are welcoming and inclusive. Also: cats rule, dogs drool.",
      talk: '',
      talkAbstract: '',
      isHost: true
    }
  ],
  news: newsForConference('css')
}

export const Decompress = {
  id: 'decompress',
  title: 'Decompress 2018',
  logo: decompress_logo,
  date: '23rd March 2018',
  // favicon: decompress_favicon,
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://2018.decompress.com.au'
      : `http://decompress.localhost:${window.location.port}`,
  description:
    'Decompress is an affordable community day for designers and developers run by the CSSConf and JSConf AU teams. Our focus is squarely set on creating an all-inclusive space to learn, share and create.',
  venue,
  titoLink,
  soldOut: true,
  theme: {
    primary: 'hsla(0, 100%, 62%, 1)',
    primaryHover: 'hsla(0, 100%, 45%, 1)',
    secondary: 'hsla(0, 100%, 90%, 1)',
    bannerImage: require('./assets/banner-decompress.jpg'),
    bannerImageSmall: require('./assets/banner-decompress-small.jpg')
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
  hasSpeakers: true,
  hasWorkshops: true,
  hasSchedule: true,
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
      name: 'AMP Project',
      url: 'https://www.ampproject.org/',
      image: require('./assets/sponsor-amp.svg'),
      tier: 'title'
    },
    {
      name: 'Trade Me',
      url: 'https://www.trademe.co.nz/',
      image: require('./assets/sponsor-trade-me.svg'),
      tier: 'travel'
    },
    {
      name: 'Grok Learning',
      url: 'https://groklearning.com/',
      image: require('./assets/sponsor-grok-learning.svg'),
      tier: 'travel'
    },
    {
      name: 'Silver Stripe',
      url: 'https://www.silverstripe.com/',
      image: require('./assets/sponsor-silverstripe.svg'),
      tier: 'travel'
    }
  ],
  speakers: [
    {
      name: 'Keira Hodgkison',
      twitter: 'keirasaid',
      // url: '',
      announced: true,
      image: require('./assets/speaker-keira.jpg'),
      bio:
        "Keira is a developer at Culture Amp, an all-in-one people feedback and analytics platform. She works with React, Flow, and Rails on solutions to help customers share, and act upon company employee engagement data. Keira is an advocate for using functional programming techniques to improve the JavaScript coding and refactoring experience. When she's not writing code, she can be found under a large cat.",
      location: 'Melbourne, Australia',
      talk: 'The Why and How of ReasonML',
      talkAbstract:
        "New kid on the 'compile-to-JavaScript' block is ReasonML, a syntax layer and toolchain for OCaml, brought to you by the creator of React.js. While there has been a steadily-increasing buzz around ReasonML since the release of ReasonReact by Facebook in March 2017, it's hard to know from the outside whether the hype is truly deserved, or a product of savvy marketing and social media management. More importantly, why should you, as a JavaScript developer care? Aren't compile-to-JS alternatives created for people who don't like JavaScript? <br /><br /> The relationship between ML languages and some of our more popular JavaScript libraries is more than cursory. Scratch the surface of one of our main JavaScript type systems, Flow, and you'll find OCaml. The original prototype of React.js was created in another ML language (SML/ Standard-ML). The JavaScript Redux library is based on Elm's reducer architecture. <br /><br /> While the ReasonML creator has stated his original intent was to fix the top 15 things in the OCaml syntax that annoyed experienced OCaml developers, the result ended up looking a lot like... JavaScript! In this brief exploration of the syntax and the growing community that supports it, one aspect does become abundantly clear. ReasonML and ReasonReact have evolved with the JavaScript community forefront in mind."
    },
    {
      name: 'Maz Hermon',
      twitter: 'mazhermon',
      url: 'http://mazhermon.com/',
      talkVideo: 'jjg0VfsS-S0',
      announced: true,
      image: require('./assets/speaker-maz.jpg'),
      bio:
        'Maz Hermon is a front-end dev at Trade Me in New Zealand currently working with a great team on an epic responsive rebuild of a large and well-loved NZ e-commerce site. Maz has a passion for scalable CSS, UI component libraries and living style guides, accessibility and all things web. When not doing these things Maz enjoys time with his young family, drawing funny characters and music making.',
      location: 'Wellington, New Zealand',
      talk:
        "How is a UI component library the 'Mise en place' of the modern Web-Chef’s kitchen?",
      talkAbstract:
        "Do you need help convincing your team or wider company they’d benefit from creating a living style guide and UI component library? Or getting buy in on why the one you’ve started is a good idea? Let’s run through a fun analogy comparing how having a design system and building a front-end component library is like the essential afternoon preparation session in a high performing kitchen known as ‘Mise en place’. You’ll learn how to explain how having this in place seperates the amatures from the professionals in kitchens around the world, and will ensure that by the time users walk in the virtual door, the dev kitchen is operating at high speed with grace, and no one’s left waiting, grumpily staring down the wait-staff with their best evil-eyes. <br /><br />This talk will benefit you regardless of what level you're at. You’ll come away with a new way to explain to your technical and non-technical stakeholders why you and your team should be given the go ahead to support the successful fast paced delivery of features and products for your users. Don’t sit back and say ‘I told you so’ when things slow to crawl and you're all tangled in legacy code and specifity wars with your heavy CSS. Instead, come and learn a new way to frame the argument to ensure you’ve given everyone the best chance to realise what you already know to be true, before it’s too late."
    },
    {
      name: 'Jeremy Nagel',
      twitter: 'jeznag',
      url: 'https://www.programmerswhogiveashit.com',
      talkVideo: 'W8UXlk-Ug_0',
      announced: true,
      image: require('./assets/speaker-jeremy-nagel.jpg'),
      bio:
        "Jeremy is an environmentalist turned programmer focused on using software to solve sustainability challenges. He's more than a little obsessed with checklists and automated tests.",
      location: 'Sydney, Australia',
      talk:
        'Attack of the mutants: using mutation testing to improve your test suite',
      talkAbstract:
        "Code without tests is code that is going to sneak up behind you while you’re texting on your phone, put glue in your hair and steal your lucky horseshoe from your bag. Evil! But how can you find those dastardly lines? Traditionally we’ve used test coverage metrics (e.g. Istanbul) to track down those villains but coverage has a lot of gaps. A test can execute 100% of code without performing any assertions, giving you a false sense of security. <br /><br /> What's the solution then? Fight back against those villains by unleashing mutants! Don't worry, you don't have to drink radioactive coolaid, we're talking about mutation testing. It involves using a tool like StrykerJS to programatically insert bugs (mutants) into your code and check whether the tests catch them. Having 100% test coverage is a noble goal but ultimately not very useful as it says nothing about the test suite's ability to catch bugs. On the other hand, having a 100% mutant kill score is a big deal. It means that your assertions can effectively pick up most potential bugs. <br /><br /> Next time your manager asks for a risk analysis of the company's test suite, you'll know what to do: call in the mutants!"
    },
    {
      name: 'Juliet Brown',
      twitter: 'julietbrown84',
      // url: '',
      announced: true,
      talkVideo: 'EMNP4E4a-qo',
      image: require('./assets/speaker-juliet.jpg'),
      bio:
        'Juliet Brown is an artist, a programmer, and a maker, all of which she believes require inspiration, creativity, thoughtfulness, dedication and skill. She is interested in shaping code into works of art that can stand the test of time and wants to push the boundaries of how we see technology.',
      location: 'Wellington, New Zealand',
      talk: 'Intersection between art and technology',
      talkAbstract:
        "Programmers are artists. I am a web animator, developer, and artist. I come from A Fine Arts background, and a question I often get asked is how and why did you become a developer if you come from an arts background? For me, programming is creative, and I would like to share my journey with you. How I brought my diverse background to the developer community and what I am doing with that now. How I relate to technology with its subject matter, medium, and process. Using coding as an artistic medium references and also pushes the boundaries of what art is and can do. Painting and drawing come with such a historical background. <br /><br /> By bringing the old medium into technology - a new medium, a tool that we as people are involved with day to day excites me, it brings new possibilities for css and javascript and the technology space. <br /><br /> Common themes I explore in my art practice is popular culture, and the real and the imaginary. Recently, I have been working at converting my practice (painting, drawings) into a large human sized 3D animation world. <br /><br /> By combing Art and technology together, challenges the notions of the digital world and also how we perceive art and the 'artist'"
    },
    {
      name: 'Rob Crowley',
      twitter: 'robdcrowley',
      talkVideo: 'Vi6vsbm20oI',
      // url: '',
      announced: true,
      image: require('./assets/speaker-rob.jpg'),
      bio:
        'Rob is the technical lead for APIs at Bankwest and has read more RFCs than he cares to admit. Rob is passionate about crafting distributed systems that perform at scale. Originally from Ireland, Rob now calls Perth home after taking quite a few detours along the way.',
      location: 'Perth, Australia',
      talk: 'Crafting compelling real-time web experiences with GraphQL',
      talkAbstract:
        "Users expect real-time data. They want their banking transaction notifications now. Their order confirmed now. They want their user experience to feel—connected. The world has moved to push and users are waiting for the data-driven experiences we create on the web to catch up. <br /><br /> GraphQL is Facebook’s response to this challenge and it is quickly proving itself as an exciting alternative to RESTful APIs for a wide range of contexts. GraphQL is a query language that provides a clean and simple syntax for consumers to interrogate your APIs. These queries are strongly typed, hierarchical and enable clients to retrieve only the data they need. <br /><br /> In addition to the familiar pull based request-response pattern, GraphQL provides a mechanism for clients to subscribe to real-time updates in the form of Subscriptions. Subscriptions are exciting as they represent the core ability we need to satisfy the connected push based experience that our users demand. <br /><br />  In this talk, we will take a hands-on look at GraphQL and see how it can be used to build real-time APIs that are a joy to use. Additionally, we will see how we can integrate a React client with GraphQL using Relay Modern, Facebook's JavaScript framework for building data driven applications. By the end of the session you will understand what is required to craft a compelling real-time user experience with GraphQL, and have the knowledge to deliver on these requirements."
    },
    {
      name: 'Jessica Norris and Ben Taylor',
      twitter: 'groklearning',
      // url: '',
      talkVideo: 'j5UNHl9QwBY',
      announced: true,
      image: require('./assets/speaker-jess-and-ben.jpg'),
      bio:
        'Ben is a software developer and interface designer with a passion for building usable edtech. In his holidays he teaches coding to high school students and in his spare time he studies and researches learning & technology at university. <br /><br /> Jess loves to get deep into the nitty gritty of a software project, especially if it involves designing elegant APIs or complicated algorithms. When not making software, she spends her energy doing creative things - sewing, weaving, and making pillow forts with the kids.',
      location: 'Sydney, Australia',
      talk: 'How to keep your server alive AND teach JS to kids',
      talkAbstract:
        'We’re all buzzing about Headless Chrome and how we can automate our testing, but what if we go one step further and try automated marking of… untrusted student code? <br /><br /> Imagine the sort of code you first wrote — full of syntax errors and infinite loops — now load that code on to a server and click ‘Test’. What happens? Did you crash the page? Did it do anything? <br /><br /> At Grok Learning we are allowing kids as young as twelve (think ‘Stranger Things’!) to do exactly that. Come discover the challenges we had putting together a JavaScript course with a smart automatic marker that defends our system against whatever crazy code they come up with. <br /><br /> We’ll get technical and talk about how we’re using Headless Chrome and Puppeteer inside our server-side marker. We’ll dip into what makes it ‘smart’ — good feedback and hints to help students understand why their code doesn’t work the way they expected. And we’ll chat about how to make a good learning experience for JavaScript. <br /><br /> Let’s ditch to-do list tutorials and make something better!'
    },
    {
      name: "Jason O'Neil",
      twitter: 'jasonaoneil',
      url: 'https://jasono.co/',
      announced: true,
      talkVideo: '83qcg2eD6Xo',
      image: require('./assets/speaker-jason.jpg'),
      bio:
        'Jason recently joined Culture Amp as a specialist in front-end developer tools. He wants software engineers to enjoy their jobs and so rages against technical debt, slow iteration cycles and lousy error messages.',
      location: 'Melbourne, Australia',
      talk: '50,000 lines of spaghetti code (and how to unravel it)',
      talkAbstract:
        'To our wonderful users the web-app looked fine. It had a nice UI, a tonne of useful features, and mostly seemed to work. But our team of two engineers knew the truth - the app was a mess. Bug fixes that should be simple eluded us. Features that should have taken 2 weeks took 2 months. And users started telling us the app was crashing their browser (it turns out we were leaking memory and the tab was using over 2GB!). This talk shares the story of how I joined a start-up that in its 3 short years had already accumulated a tonne of technical debt - and how my fellow engineer and I took a 50,000 line code base of unstructured jQuery, untyped Angular, and a bunch of scary Grunt tasks, and turned it into a well structured React App, using Webpack to handle our assets and split our bundle, MobX to simplify our page interactions, Flow to add type safety to our code piece by piece, and Jest to test it all. And also how we dealt with those nasty memory leaks using Chrome dev tools so the app stopped crashing. Just as importantly - I’ll share the secrets of how we convinced the non-technical management team that this massive investment was worth it, and had them excited about paying down technical debt. If you have a codebase you’re ashamed to let other engineers look at, if you’re looking at a code-cleanup that feels like it’ll be an insurmountable task, if you are sick of dealing with code that has names like “AbstractModuleDataStrategy” that don’t mean anything, and maybe don’t even do anything, and you’re not even sure anymore, then this is the talk for you. We will map a path out of the spaghetti. Or if you have it all together and always write beautiful, maintainable, well structured code and would like to come and laugh at me and my horror stories, this may also be the talk for you.'
    },
    {
      name: 'Jess Champion',
      twitter: 'jess_champion',
      // url: '',
      talkVideo: 'd2c277s12NI',
      announced: true,
      image: require('./assets/speaker-jess-champion.jpg'),
      bio:
        'With a background spanning product development, operations and project delivery, Jess has developed a zealous focus on the quality and maintainability of software. While she can happily work across the full stack, Jess has a passion for all things frontend, and is always looking for ways to leverage new technologies to craft digital experiences.',
      location: 'Wellington, New Zealand',
      talk: 'A unit test walks into a bar',
      talkAbstract:
        "A unit test walks into a bar. Orders a beer. Orders ten beers. Orders 2.5 billion beers. Orders -1 beers. Orders a nothing. Orders a cat. We spend a lot of time thinking and talking about how to write better code, but much less time on how to write better tests. Over the course of my career as a JavaScript developer I’ve worked across product teams, project team and operations. This talk will leverage my experience in each of these roles to examine how unit tests are a critical component of robust, stable and maintainable software across the full lifecycle. We'll do a deeper dive into some of the theory around unit testing while relating it back to business value and agile practices. I will also give opinionated practical advice for writing a robust test suite."
    },
    {
      name: 'Kylie Long',
      twitter: 'kyliejlong',
      // url: '',
      talkVideo: '4Vy5SDd-hAI',
      announced: true,
      image: require('./assets/speaker-kylie.jpg'),
      bio:
        'Kylie is a startup founder, collaboration expert and restless creative. She has an unflinching belief in people’s ability to be experts of their own lives and much of her professional life has involved creating platforms for marginalised people and voices to be heard. She’s curious about the direction of technology and the role it might play in unfolding participative societies.',
      location: 'Melbourne, Australia',
      talk: 'Practical tools for happier, more seamless collaboration',
      talkAbstract:
        'So much is expected of our designers and developers. They need to know myriad programming languages and other technical competencies, they must keep abreast of emerging trends and; contribute to the broader community through meetups and online peer learning platforms. <br /><br /> Often, our designers and developers also work in non-hierarchical organisations, multidisciplinary teams or as freelancers. With organisations like Spotify, Valve & Culture Amp we’re feeling inspired to organise differently, to \'swarm\' as fit for purpose teams; to collaborate and lead from anywhere despite role or rank. <br /><br /> But this scenario is not without its challenges. A couple of years ago, the Inspire9 team started to hear some grumbling from the community. Things like <em>"My colleague won’t listen to me. I have this great idea and we’re supposed to collaborate, but he just does whatever he wants"</em> and <em>"I don’t know what to do when there is conflict, I just freeze"</em>. <br /><br /> They noticed that while their community was technically brilliant, they were struggling with some of the \'human dynamics\' of their work. They decided to do something about it and invited me in to run a leadership program "Leading in Networks" with the community which I\'ll share about in my presentation. <br /><br /> A very practical talk, full of the tools and tricks I shared with the I9 community. Hear about the insights we gained through our leadership journey, and what changed for participants as they attained deeper insights into their approach and practice as collaborators in multidisciplinary team environments. Hear about the tools and tricks they found most useful and take away your own insights to grow your collaborative practice.'
    }
  ],
  workshops: [
    {
      talk: 'Creative Text Effects with CSS',
      announced: true,
      speakers: [
        {
          name: 'Mandy Michael',
          twitter: 'mandy_kerr',
          // url: '',
          image: require('./assets/speaker-mandy.jpg'),
          bio:
            'Mandy is the Front End Development Manager at Seven West Media in WA. She loves CSS and has been experimenting for the past year with creating editable, selectable and searching text effects on Codepen using just CSS and HTML. Come along and learn to make your own amazing text effects with a special focus on variable fonts.',
          location: 'Perth, Australia'
        }
      ]
    },
    {
      talk: 'Generative Art with JavaScript and HTML5 Canvas',
      announced: true,
      speakers: [
        {
          name: 'Tim Holman',
          twitter: 'twholman',
          // url: '',
          image: require('./assets/speaker-tim.jpg'),
          bio:
            'Tim is a tinkerer, tuner & tamperer of all things online who enjoys the artistic and creative aspects of development. Generative Art is a great entry point into development, or a great way to sharpen your existing skills... and is fun too. Join in as we create with the HTML5 canvas, P5.js, and some crazy maths!',
          location: 'New York, USA'
        }
      ]
    },
    {
      talk: 'Building NodeBots with NodeJS',
      announced: true,
      speakers: [
        {
          name: 'Anna Gerber',
          twitter: 'AnnaGerber',
          url: 'http://crufti.com/about-anna/',
          image: require('./assets/speaker-anna.jpg'),
          bio:
            'Anna is a backend Node.js developer from Brisbane. An avid maker and crafter, Anna also enjoys teaching sewable electronics and 3D printing, as well as how to build robots and IoT devices using MicroPython and Node.js.',
          location: 'Brisbane, Australia'
        }
      ]
    },
    {
      talk: 'Visualising Geographical Data with MapBox',
      announced: true,
      speakers: [
        {
          name: 'Sarah Goodwin',
          twitter: 'sgeoviz',
          // url: '',
          image: require('./assets/speaker-sarah.jpg'),
          bio:
            'Sarah has worked in data analytics and visualisation for over 10 years. Her work explores new ways to visualise and explain complex multi-dimensional spatio-temporal datasets. She also teaches visualisation and cartographic design skills.',
          location: 'Melbourne, Australia'
        }
      ]
    },
    {
      talk: 'Creating Virtual Worlds with ThreeJS',
      announced: true,
      speakers: [
        {
          name: 'Xavier Ho',
          twitter: 'Xavier_Ho',
          url: 'https://jumptoglide.com/',
          image: require('./assets/speaker-xavier.jpg'),
          bio:
            "Xavier Ho is a curiosity-driven designer, researcher and software engineer at CSIRO's Data61. He has worked on high-impact projects at CSIRO in climate science, agricultural roads optimisation, and developing data visualisation for scientists using ThreeJS, D3.js, Mapbox, Vue.js, and more. He speaks both Python and Javascript, and he hopes to pick up Haskell one day.",
          location: 'Melbourne, Australia'
        },
        {
          name: 'Bosco Ho',
          // twitter: '',
          url: 'http://boscoh.com/',
          image: require('./assets/speaker-bosco.jpg'),
          bio:
            "Bosco is a scientific programmer at CSIRO's Data61, James Cook University and Monash University. He works in web programming, molecular graphics and epidemiology with a mix of Javascript and Python using Vue.js, Flask and of course, ThreeJS.",
          location: 'Melbourne, Australia'
        }
      ]
    },
    {
      talk: 'Write a Robust, Functional Front End with Elm',
      announced: true,
      speakers: [
        {
          name: 'Sebastian Porto',
          twitter: 'sebasporto',
          // url: '',
          image: require('./assets/speaker-sebastian.jpg'),
          bio:
            'Sebastian is a web developer working for Stax.io. He has worked on a variety of languages and frameworks in the FE, Elm is his current tool of choice for building fast and reliable web applications.',
          location: 'Melbourne, Australia'
        },
        {
          name: 'Kevin Yank',
          twitter: 'sentience',
          // url: '',
          image: require('./assets/speaker-kevin.jpg'),
          bio:
            'Kevin is the Director of Front End Engineering at Culture Amp, which used Elm over the past year to build user interfaces that help companies like Adobe, Airbnb, Yelp and Slack to collect, understand, and act on employee feedback.',
          location: 'Melbourne, Australia'
        }
      ]
    }
  ],
  news: newsForConference('decompress')
}
