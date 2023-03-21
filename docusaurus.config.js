// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const math = require('remark-math');
const katex = require('rehype-katex');

const currentYear = new Date().getFullYear()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ronin',
  tagline: 'Lets build together',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'axieinfinity', // Usually your GitHub org/user name.
  projectName: 'ronin-document', // Usually your repo name.

  staticDirectories: ['static'],

  plugins: [
    'docusaurus-plugin-sass',
    require.resolve('docusaurus-lunr-search'),
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
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
            to: 'docs/basics/get-started',
          },
          // Basics
          {
            label: 'Basics',
            to: 'docs/category/basics',
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
      // announcementBar: {
      //   id: 'announcement',
      //   content:
      //     '🎉&nbsp;<strong>Saigon</strong> - an open testnet for Ronin, is live! <a target="_blank" rel="noopener noreferrer" href="https://saigon-docs.roninchain.com">Checkout Saigon Documentation!</a>',
      //   backgroundColor: '#E0F6F4',
      //   textColor: '#00000',
      //   isCloseable: false,
      // },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Join Ronin community',
                to: 'docs/community/join',
              },
              {
                label: 'Contribute to documentation',
                to: 'docs/community/contribute',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/axieinfinity/',
              },
              {
                type: 'link',
                label: 'Newsletter',
                href: 'https://roninblockchain.substack.com/',
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
