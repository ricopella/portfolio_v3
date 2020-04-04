module.exports = {
    siteMetadata: {
        title: `Welcome`,
        titleTemplate: `nrs.`,
        description: `Full-Stack Developer specialized in the Front-End.`,
        lang: `en`,
        author: {
            name: 'Narin Sundarabhaya',
            url: 'https://twitter.com/ricopella',
            email: 'nrs710@gmail.com',
            handle: `@ricopella`,
        },
        headerItems: [`home`, `about me`, `skills`, `portfolio`, `contact`],
        portfolioItems: [{
                alt: 'Portfolio - FanAI Inc.',
                description: 'Audience Monetization Platform. Built with TypeScript, React, Highcharts.',
                fileName: 'fanai.png',
                href: 'https://fanai.io',
                title: 'FanAI',
            },
            {
                alt: `Portfolio - Matt Denny's Ale House Restaurant`,
                description: `Portfolio - Matt Denny's Ale House Restaurant`,
                fileName: 'md.png',
                href: 'https://mattdennys.com',
                span: `Denny's`,
                title: 'Matt',
            },
            {
                alt: 'Portfolio - Base Roots Shop',
                description: 'A customized Shopify store for an e-commerce client.',
                fileName: 'br.png',
                href: 'https://baserootsshop.com',
                span: `Roots`,
                title: 'Base',
            },
            {
                alt: 'Portfolio - Patient Stack',
                description: 'Patient management system for general practice doctors.',
                fileName: 'Patientstack.png',
                href: 'https://patientstack.herokuapp.com/',
                span: `Stack`,
                title: 'Patient',
            },
            {
                alt: 'Portfolio - Reacting To The Times',
                description: 'A NY Times Scrapper built with React.',
                fileName: 'reacting.png',
                href: 'https://reacting-to-the-times.herokuapp.com/',
                span: `To The Times`,
                title: 'Reacting',
            },
            {
                alt: 'Portfolio - Splitzease',
                description: 'A React-Native mobile application for splitting bills.',
                fileName: 'splitzease.jpg',
                href: 'https://github.com/ricopella/splitzease',
                span: `Ease`,
                title: 'Splitz',
            },
            {
                alt: 'Portfolio - Nike Trivia',
                description: 'A Nike themed trivia game built with Vanilla JavaScript.',
                fileName: 'nike.png',
                href: 'https://codepen.io/Ricopella/full/KvMeza/',
                span: `Trivia`,
                title: 'Nike',
            },
            {
                alt: 'Portfolio - Metta Healing Arts and Wellness',
                description: 'A client site built with Squarespace.',
                fileName: 'meta.png',
                href: 'https://mettavt.com/',
                span: `Healing Arts and Wellness`,
                title: 'Metta',
            },
            {
                alt: 'Portfolio - A cup of hacker noon',
                description: 'A web scrapper built with Cherrio, Node, Express, and MongoDB.',
                fileName: 'hack.png',
                href: 'https://cup-of-hackernoon.herokuapp.com/#results',
                span: `Hacker Noon`,
                title: 'A Cup of',
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
                answer: '["Turntablism", "Record Collecting", "Music Production", Olde English Bulldog owner", "Photography", "Boston Sports - Bruins, Red Sox, Patriots, Celtics", "Eating new places", "Coffee", "Tacos"]',
                question: 'interests || hobbies',
            },
        ],
        skills: [{
                title: 'Languages',
                skills: [{
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
                skills: [{
                        title: `React`,
                        percent: 80,
                    },
                    {
                        title: `Redux`,
                        percent: 80,
                    },
                    {
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
                        title: `liquid`,
                        percent: 50,
                    },
                ],
            },
            {
                title: 'Back-End / Operations',
                skills: [{
                        title: 'Node.JS',
                        percent: 60,
                    },
                    {
                        title: 'Express.JS',
                        percent: 60,
                    },
                    {
                        title: `netlify`,
                        percent: 60,
                    },
                    {
                        title: `heroku`,
                        percent: 60,
                    },
                    {
                        title: `flask`,
                        percent: 50,
                    },
                    {
                        title: `django`,
                        percent: 50,
                    },
                    {
                        title: `socket.io`,
                        percent: 50,
                    },
                    {
                        title: `google cloud`,
                        percent: 50,
                    },
                ],
            },
            {
                title: 'Database',
                skills: [{
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
                skills: [{
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-emotion',
        `gatsby-plugin-typescript`,
        `gatsby-plugin-scroll-reveal`,
        'gatsby-plugin-anchor-links',
    ],
}