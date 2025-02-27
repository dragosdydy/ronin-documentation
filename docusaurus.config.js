// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const math = require('remark-math')
const katex = require('rehype-katex')

const currentYear = new Date().getFullYear()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ronin Docs',
  tagline: 'Lets build together',
  url: 'https://docs.roninchain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'axieinfinity', // Usually your GitHub org/user name.
  projectName: 'ronin-documentation', // Usually your repo name.

  staticDirectories: ['static'],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    'docusaurus-plugin-sass',
    // require.resolve('docusaurus-lunr-search'),
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: `https://github.com/axieinfinity/ronin-documentation/edit/main`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        googleAnalytics: {
          trackingID: 'UA-150383258-4',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'RXU5ZAVMCJ',
        apiKey: '46141953dde60ffc0242ca8e0252dbe8',
        indexName: 'roninchain',
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      // announcementBar: {
      //   id: 'slashing',
      //   content:
      //     'Slashing rules have been updated, see <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ronin_network/status/1645664361799901185?s=46&t=YkUXw7V1JhDN_wzIX5WIUg">Twitter announcement</a>',
      //   backgroundColor: '#EEF9FD',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      navbar: {
        title: 'Ronin',
        logo: {
          alt: 'Ronin logo',
          src: 'img/logo.svg',
        },
        items: [
          // Get started
          {
            label: 'Get started',
            to: '/docs/get-started',
          },
          // Basics
          {
            label: 'Basics',
            to: 'docs/basics',
          },
          // Delegators
          {
            label: 'Delegators',
            to: 'docs/delegators',
          },
          // Validators
          {
            label: 'Validators',
            to: 'docs/validators',
          },
          // Node operators
          {
            label: 'Node operators',
            to: 'docs/node-operators',
          },
          // Developers
          {
            label: 'Developers',
            to: 'docs/developers/portal',
          },
          // Community
          // {
          //   label: 'Community',
          //   to: 'docs/community/join',
          // },
          // Community HIDDEN until documentation goes open-source
          {
            label: 'Community',
            to: 'docs/community',
          },
          // Search
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/roninnetwork',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ronin_network',
              },
              {
                type: 'link',
                label: 'Newsletter',
                href: 'https://roninblockchain.substack.com/',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'RON Staking',
                href: 'https://app.roninchain.com/staking/',
              },
              {
                label: 'Validator Dashboard',
                href: 'https://validator.roninchain.com/',
              },
              {
                label: 'Developer documentation',
                href: 'https://docs.skymavis.com/docs/ronin-get-started',
              },
            ],
          },
        ],
        copyright: `© ${currentYear - 1} - ${currentYear} Sky Mavis`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
