import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CoastMan Africa',
  tagline: 'Co-developing Decision Support System for Coastal Mangrove-based Socioecological Systems in Eastern and Western Africa',
  favicon: 'img/favicon.png',
  onBrokenLinks: 'ignore',

  // Additional favicon configurations for better browser support
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/img/favicon.png',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '',
        },
        blog: {
          path: './news',
          routeBasePath: 'news',
          showReadingTime: true,
          blogTitle: 'Coastman News',
          blogSidebarTitle: 'Coastman News',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Coastman Logo',
        src: 'img/logo-text-2025.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'right',
          label: 'About',
        },
        {
          type: 'docSidebar',
          sidebarId: 'teamSidebar',
          position: 'right',
          label: 'Team',
        },
        {
          type: 'docSidebar',
          sidebarId: 'workPackagesSidebar',
          position: 'right',
          label: 'Work Packages',
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'right',
          items: [
            {
              type: 'doc',
              docId: 'publications/index',
              label: 'Publications',
            },
            {
              type: 'doc',
              docId: 'presentations/index',
              label: 'Presentations',
            },
            {
              type: 'doc',
              docId: 'photos/index',
              label: 'Photo',
            },
            {
              type: 'doc',
              docId: 'videos/index',
              label: 'Video',
            },
            {
              type: 'doc',
              docId: 'media-coverage/index',
              label: 'Media Coverage',
            },
          ],
        },
        {to: '/news', label: 'News', position: 'right'},
        {
          href: 'https://github.com/coastmanafrica',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Our Team',
              to: '/team',
            },
            {
              label: 'DSS',
              to: '/about/dss',
            },
            {
              label: 'EDI',
              to: '/about/edi',
            },
            {
              label: 'Impact',
              to: '/about/impact',
            },
            {
              label: 'Mangroves',
              to: '/about/mangroves',
            },
            {
              label: 'Partners',
              to: '/about/partners',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Publications',
              to: '/publications',
            },
            {
              label: 'Presentations',
              to: '/presentations',
            },
            {
              label: 'News',
              to: '/news',
            },
            {
              label: 'Videos',
              to: '/videos',
            },
            {
              label: 'Photos',
              to: '/photos',
            },
            {
              label: 'Media Coverage',
              to: '/media-coverage',
            },
          ],
        },
        {
          title: 'Work Packages',
          items: [

            {
              label: 'WP1',
              to: '/work-packages/wp1',
            },
            {
              label: 'WP2',
              to: '/work-packages/wp2',
            },
            {
              label: 'WP3',
              to: '/work-packages/wp3',
            },
            {
              label: 'WP4',
              to: '/work-packages/wp4',
            },
            {
              label: 'WP5',
              to: '/work-packages/wp5',
            },
            {
              label: 'WP6',
              to: '/work-packages/wp6',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CoastMan. 2024-2028. Funded by SSHRC, The Research Council of Norway, and UK Research and Innovation (UKRI)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
