import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '3psLCCA',
  tagline: 'Integrated economic, environmental & social life cycle cost assessment for bridges',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://3psLCCA.github.io',
  // Org/user GitHub Pages sites (repo named "<org>.github.io") are served at
  // the domain root, so baseUrl stays '/'. This requires the deploying repo
  // to actually be named "3psLCCA.github.io" (currently it's "3psLCCA",
  // which GitHub instead serves at /3psLCCA/ - rename the repo to match).
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: '3psLCCA', // GitHub org: https://github.com/3psLCCA
  projectName: '3psLCCA.github.io', // The repo that must publish this site via GitHub Pages.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    './plugins/latest-release-plugin.ts',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // TODO: point this at your repo to enable "edit this page" links.
          editUrl:
            'https://github.com/3psLCCA/3psLCCA/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '3psLCCA',
      logo: {
        alt: '3psLCCA Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/#about',
          label: 'About',
          position: 'right',
          activeBaseRegex: 'NOMATCH',
        },
        {
          to: '/#publications',
          label: 'Publications',
          position: 'right',
          activeBaseRegex: 'NOMATCH',
        },
        {
          to: '/#download',
          label: 'Installation',
          position: 'right',
          activeBaseRegex: 'NOMATCH',
        },
        {
          to: '/#contribute',
          label: 'Contribute',
          position: 'right',
          activeBaseRegex: 'NOMATCH',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'right',
          label: 'Docs',
        },
        {
          to: '/contact',
          label: 'Contact Us',
          position: 'right',
        },
        {
          href: 'https://github.com/3psLCCA',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/3psLCCA',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://in.linkedin.com/company/osdag',
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Address: [todo]',
              to: '#',
            },
            {
              label: 'Email: [todo]',
              to: '#',
            },
            {
              label: 'Phone: [todo]',
              to: '#',
            },
          ],
        },
      ],
      copyright: 'Made with ❤️ by Team Osdag',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
