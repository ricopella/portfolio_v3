const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
    path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: `Welcome`,
        titleTemplate: `nrs.`,
        description: `Full-Stack Developer specialized in the Front-End.`,
        siteUrl: `https://narinsun.com`,
        lang: `en`,
        author: {
            name: 'Narin Sundarabhaya',
            url: 'https://twitter.com/ricopella',
            email: 'nrs710@gmail.com',
            handle: `@ricopella`,
        },
        contactItems: [
            { title: 'Github', href: `https://github.com/ricopella`, },
            { title: 'Twitter', href: `https://twitter.com/ricopella` },
            { title: 'LinkedIn', href: `https://www.linkedin.com/in/nsundara/` },
            { title: 'E-Mail', href: `mailto:nrs710@gmail.com` }
        ],
        headerItems: [`home`, `about me`, `technical skills`, `portfolio`, `contact`],
        portfolioItems: [{
                title: 'Experience',
                items: [{
                        alt: 'Portfolio - FanAI Inc.',
                        description: 'Audience Monetization Platform for FanAI clients to get Data Visualizations to show breakdowns of social followings, demographics of fan base, purchase behaviors, and other various data sources',
                        fileName: 'fanai.png',
                        href: 'https://fanai.io',
                        title: 'FanAI',
                        year: `2017 - 2020`,
                        myTitle: 'Front-End Developer II',
                        tech: [
                            'React',
                            'TypeScript',
                            'Redux',
                            'Jest',
                            'CSSNext',
                            'Framer-Motion',
                            'Highcharts',
                            'Firebase',
                            'Storybook'
                        ]
                    },
                    {
                        alt: `Portfolio - iMationSoft`,
                        description: `Lead team of 6 developers and contributed towards the creation of a prototype API that centralized a merchants inventory and orders with Jet.com, Amazon, Ebay, and Etsy store`,
                        title: `iMationSoft`,
                        year: `2017`,
                        myTitle: 'Freelance Software Engineer',
                        tech: [
                            'Node',
                            'Express',
                            'MySQL',
                            'Chai',
                            'Mocha'
                        ]
                    },
                    {
                        alt: `Portfolio - Matt Denny's Ale House Restaurant`,
                        description: `A custom Wix site with social integrations, custom input forms, shopping cart, and event calendars`,
                        fileName: 'md.png',
                        href: 'https://mattdennys.com',
                        title: `Matt Denny's`,
                        myTitle: "Freelance Developer",
                        year: `2019`
                    },
                    {
                        alt: 'Portfolio - Base Roots Shop',
                        description: 'A customized Shopify store for an e-commerce client.',
                        fileName: 'br.png',
                        href: 'https://baserootsshop.com',
                        title: 'Base Roots',
                        myTitle: 'Freelance Developer',
                        year: `2019`
                    },
                    {
                        alt: 'Portfolio - Metta Healing Arts and Wellness',
                        description: 'A client site built with Squarespace.',
                        fileName: 'meta.png',
                        href: 'https://mettavt.com/',
                        title: 'Metta Healing Arts and Wellness',
                        myTitle: 'Freelance Developer',
                        year: `2017`
                    },
                ],
            },
            {
                title: 'Projects',
                items: [{
                        alt: 'Portfolio - Narin Sundarabhaya Portfolio',
                        description: 'SEO Optimized and fast professional portfolio built with React & TypeScript and hosted with Netlify',
                        fileName: 'portfolio.png',
                        href: 'https://github.com/ricopella/portfolio_v3',
                        title: 'Personal Portfolio',
                        tech: [
                            'React',
                            'TypeScript',
                            'Gatsby',
                            'GraphQL',
                            'emotion',
                            'Framer-Motion',
                            'Jest',
                            'Testing-Library/React',
                            'Netlify'
                        ],
                        year: '2020',
                    },
                    {
                        alt: 'Portfolio - Nike Trivia',
                        description: 'A Nike themed trivia game originally built in 2017 with vanilla javascript. I wanted to re-do the game with React & TypeScript',
                        fileName: 'nike.png',
                        href: 'https://github.com/ricopella/nike-trivia-react',
                        title: 'Nike Trivia',
                        tech: [
                            'React',
                            'TypeScript',
                            'Framer-Motion',
                            'Jest',
                            'Testing-Library/React',
                        ],
                        year: '2020',
                    },
                    {
                        alt: 'Portfolio - RPi_Temperature',
                        description: 'Full-Stack Home Automation app that reads temperature of a room from Raspberry Pi every 5 minutes, stores the data in database. And hosts the data on a web app',
                        href: 'https://github.com/ricopella/RPi_temperature',
                        title: 'Temperature App',
                        tech: [
                            'Node',
                            'Express',
                            'MongoDB',
                            'React',
                            'TypeScript',
                            'Jest',
                            'Enzyme',
                            'Axios',
                        ],
                        year: `2018`,
                    },
                    {
                        alt: 'Portfolio - Splitzease',
                        description: 'A React-Native mobile application for splitting bills using OCR to extract text from a picture of a receipt.',
                        fileName: 'splitzease.jpg',
                        href: 'https://github.com/ricopella/splitzease',
                        title: 'Splitz Ease',
                        tech: [
                            'React-Nate',
                            'Redux',
                            'Firebase',
                            'Axios',
                            'React-Native-Tesseract-OCR',
                        ],
                        year: `2017`,
                    },
                    {
                        alt: 'Portfolio - Patient Stack',
                        description: 'Full-Stack Patient management system for general practice doctors to communicated with their patients with a custom authentication system.',
                        fileName: 'Patientstack.png',
                        href: 'https://patientstack.herokuapp.com/',
                        title: 'Patient Stack',
                        tech: [
                            'Node', 'Express', 'MySQL', 'Bcrypt', 'Passport', 'Socket.IO', 'jQuery', 'Chart.JS'
                        ],
                        year: `2017`
                    },
                    {
                        alt: 'Portfolio - Reacting To The Times',
                        description: 'A NY Times Scrapper built with React NodeJS and Express.',
                        fileName: 'reacting.png',
                        href: 'https://reacting-to-the-times.herokuapp.com/',
                        title: 'Reacting To The Times',
                        tech: [
                            'React', 'Node', 'Express', 'MongoDB'
                        ],
                        year: `2017`
                    },

                    {
                        alt: 'Portfolio - A cup of hacker noon',
                        description: 'A web scrapper to pull articles from Hacker Noon and save them in MongoDB',
                        fileName: 'hack.png',
                        href: 'https://cup-of-hackernoon.herokuapp.com/#results',
                        title: 'A Cup of Hacker Noon',
                        tech: [
                            'Node',
                            'Express',
                            'MongoDB',
                            'Handlebars',
                            'Cheerio'
                        ],
                        year: `2017`
                    },
                ],
            },
        ],
        terminalCommands: [{
                answer: '"Los Angeles, CA"',
                question: 'current_location',
            },
            {
                answer: 'nrs710@gmail.com',
                href: 'mailto:nrs710@gmail.com',
                question: 'contact_information',
            },
            {
                answer: '["Front-End Web Developer", "Freelancer", "Certified Scrum Master"]',
                question: 'roles',
            },
            {
                answer: '["Complex web-apps", "Data visualizations in the browser", "Small business websites", "Shopify customizations", "Mobile apps"]',
                question: 'types_of_work',
            },
            {
                answer: '["TypeScript", "React", "Highcharts", "PostCSS", "Jest/Enzyme"]',
                question: 'most_recent_tech_stack',
            },
            {
                answer: '["Turntablism", "Record Collecting", "Music Production", Olde English Bulldog owner", "Photography", "Boston Sports - Bruins, Red Sox, Patriots, Celtics", "Eating at new places", "Coffee", "Tacos"]',
                question: 'interests || hobbies',
            },
        ],
        skills: [{
                title: 'Languages',
                items: [{
                        title: `TypeScript`,
                        percent: 80,
                    },
                    {
                        title: `JavaScript (ES6+)`,
                        percent: 75,
                    },
                    {
                        title: `Python`,
                        percent: 30,
                    },
                    {
                        title: 'PHP',
                        percent: 20,
                    },
                ],
            },
            {
                title: 'Front-End',
                items: [{
                        title: `React`,
                        percent: 80,
                    },
                    {
                        title: `Redux`,
                        percent: 80,
                    },
                    {
                        title: `GraphQL`,
                        percent: 60,
                    }, {
                        title: `CSSNext`,
                        percent: 75,
                    },
                    {
                        title: `Styled-Components`,
                        percent: 75,
                    },
                    {
                        title: `Highcharts`,
                        percent: 70,
                    },
                    {
                        title: 'Framer-Motion',
                        percent: 65,
                    },
                    {
                        title: 'Sass',
                        percent: 65,
                    },
                    {
                        title: `Storybook`,
                        percent: 65,
                    },
                    {
                        title: `GatsbyJS`,
                        percent: 65,
                    },
                    {
                        title: `React-Native`,
                        percent: 60,
                    },

                    {
                        title: `D3.js`,
                        percent: 50,
                    },

                    {
                        title: `Liquid`,
                        percent: 50,
                    },
                ],
            },
            {
                title: 'Back-End / Operations',
                items: [{
                        title: 'Node.JS',
                        percent: 60,
                    },
                    {
                        title: 'Express.JS',
                        percent: 60,
                    },
                    {
                        title: `Netlify`,
                        percent: 60,
                    },
                    {
                        title: `Heroku`,
                        percent: 60,
                    },
                    {
                        title: `Flask`,
                        percent: 50,
                    },
                    {
                        title: `Django`,
                        percent: 50,
                    },
                    {
                        title: `Socket.io`,
                        percent: 50,
                    },
                    {
                        title: `Google Cloud`,
                        percent: 50,
                    },
                ],
            },
            {
                title: 'Database',
                items: [{
                        title: 'Firebase',
                        percent: 80,
                    },
                    {
                        title: `MySQL`,
                        percent: 60,
                    },
                    {
                        title: `SQLite`,
                        percent: 60,
                    },
                    {
                        title: `MongoDB`,
                        percent: 60,
                    },
                ],
            },
            {
                title: 'Testing',
                items: [{
                        title: 'Jest',
                        percent: 80,
                    },
                    {
                        title: 'Enzyme',
                        percent: 80,
                    },
                    {
                        title: 'Testing-Library',
                        percent: 80,
                    },
                    {
                        title: 'Chai',
                        percent: 70,
                    },
                    {
                        title: 'Mocha',
                        percent: 70,
                    },
                    {
                        title: 'Cypress',
                        percent: 50,
                    },
                    {
                        title: 'Mabl',
                        percent: 50,
                    },
                ],
            },
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Narin Sundarabhaya | Portfolio`,
                short_name: `nrs. | Portfolio`,
                start_url: `/`,
                background_color: `#666385`,
                theme_color: `#666385`,
                display: `minimal-ui`,
                icon: `src/images/favicon/favicon.ico`,
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-emotion',
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: .05,
                once: true,
            }
        },
        'gatsby-plugin-anchor-links',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA_TRACKING_ID || "",
                anonymize: true,
                respectDNT: true,
            },
        },
        {
            resolve: `gatsby-source-spotify`,
            options: {
                clientId: process.env.SPOTIFY_CLIENT_ID,
                clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
                refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
                fetchRecent: true,
                timeRanges: ['short_term', 'medium_term', 'long_term'],
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.narinsun.com',
                sitemap: 'https://www.narinsun.com/sitemap.xml',
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }]
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }]
                    }
                }
            }
        }
    ],
}