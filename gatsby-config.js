const path = require('path')

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
)

module.exports = {
  siteMetadata: {
    title: `Stomatolog Spółdzielnia - Dentysta Gdańsk Wrzeszcz`,
    siteUrl: `https://stomatolog-spoldzielnia.pl`,
    description: `Stomatolog spółdzielnia lekarska zaprasza do gabinetu na leczenie dentystyczne w Gdańsku. Leczenie kanałowe pod mikroskopem,rentgen zębów, estetyczne wypełnienia, pełna protetyka, zaawansowana chirurgia. Doświadczeni lekarze.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-LJEB1M0PBV'],

        pluginConfig: {
          head: true,
        },
      },
    },

    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'Z38kOeIGKXzJgISu88CrmpDCtbNKxNG2Q2fYIO8AsBc',
        spaceId: 'mam8kmxzslkd',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',

    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icons/logo.svg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        resolveModules: [path.join(__dirname, 'libs')],
        components: path.join(__dirname, 'src', 'components'),
        assets: path.join(__dirname, 'src', 'assets'),
        helpers: path.join(__dirname, 'src', 'helpers'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['montserrat:300,400,500,700', 'cormorant garamond:300,500'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/icons/,
        },
      },
    },
  ],
}
