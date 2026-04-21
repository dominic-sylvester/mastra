/**
 * Sidebar for Marketing
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  marketingSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'getting-started/audience',
          label: 'Audience',
        },
      ],
    },
    {
      type: 'category',
      label: 'Brand',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'brand/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'brand/voice-and-tone',
          label: 'Voice and Tone',
        },
      ],
    },
    {
      type: 'category',
      label: 'Content Strategy',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'content-strategy/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'content-strategy/case-studies',
          label: 'Case Studies',
        },
      ],
    },
  ],
}

export default sidebars
