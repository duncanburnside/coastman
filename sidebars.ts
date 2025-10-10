import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  aboutSidebar: [
    'about/index',
    'about/dss',
    'about/impact',
    'about/edi',
    'about/mangroves',
    'about/partners',
  ],

  // Team sidebar - dedicated team content
  teamSidebar: [
    'team/index',
    {
      type: 'category',
      label: 'Leadership',
      collapsed: false,
      items: [
        'team/sunderland-t',
        'team/van-blerk-l',
        'team/zeleke-b',
        'team/morel-a',
      ],
    },
    {
      type: 'category',
      label: 'Team Members',
      collapsed: false,
      items: [
        'team/adade-r',
        'team/adamtey-a',
        'team/aheto-d',
        'team/adotey-j',
        'team/alemu-d',
        'team/alem-h',
        'team/bana-l',
        'team/bayr-u',
        'team/ceglia-c',
        'team/debella-gilo-m',
        'team/falayi-m',
        'team/issifu-i',
        'team/jilala-z',
        'team/lolila-n',
        'team/lukhabi-d',
        'team/nortey-d',
        'team/rizzi-j',
        'team/salim-s',
        'team/seki-h',
        'team/shirima-d',
        'team/sumaila-r',
        'team/yaw-a',
      ],
    },
  ],

  // Publications sidebar
  publicationsSidebar: [
    'publications/index',
    'presentations/index',
    {
      type: 'category',
      label: 'Media',
      collapsed: false,
      items: [
        'photos/index',
        'videos/index',
        'media-coverage/index',
      ],
    },
  ],

  // Presentations sidebar
  presentationsSidebar: [
    'publications/index',
    'presentations/index',
    {
      type: 'category',
      label: 'Media',
      collapsed: false,
      items: [
        'photos/index',
        'videos/index',
        'media-coverage/index',
      ],
    },
  ],

  // Media sidebar
  mediaSidebar: [
    'publications/index',
    'presentations/index',
    {
      type: 'category',
      label: 'Media',
      collapsed: false,
      items: [
        'photos/index',
        'videos/index',
        'media-coverage/index',
      ],
    },
  ],

  // Photos sidebar
  photosSidebar: [
    'publications/index',
    'presentations/index',
    {
      type: 'category',
      label: 'Media',
      collapsed: false,
      items: [
        'photos/index',
        'videos/index',
        'media-coverage/index',
      ],
    },
  ],

  // Videos sidebar
  videosSidebar: [
    'publications/index',
    'presentations/index',
    {
      type: 'category',
      label: 'Media',
      collapsed: false,
      items: [
        'photos/index',
        'videos/index',
        'media-coverage/index',
      ],
    },
  ],

  // Audio sidebar
  audioSidebar: [
    'publications/index',
    'presentations/index',
    {
      type: 'category',
      label: 'Media',
      collapsed: false,
      items: [
        'photos/index',
        'videos/index',
        'media-coverage/index',
      ],
    },
  ],

  // Media Coverage sidebar
  mediaCoverageSidebar: [
    'publications/index',
    'presentations/index',
    {
      type: 'category',
      label: 'Media',
      collapsed: false,
      items: [
        'photos/index',
        'videos/index',
        'media-coverage/index',
      ],
    },
  ],

  // Work Packages sidebar
  workPackagesSidebar: [
    'work-packages/index',
    'work-packages/wp1/index',
    'work-packages/wp2/index',
    'work-packages/wp3/index',
    'work-packages/wp4/index',
    'work-packages/wp5/index',
    'work-packages/wp6/index',
  ],
};

export default sidebars;
