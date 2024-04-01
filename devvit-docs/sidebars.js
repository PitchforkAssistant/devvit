/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Get started',
      link: {
        type: 'generated-index',
        title: 'Get started',
        description: 'This section is designed to get you up and running fast.',
        slug: '/get-started',
        keywords: ['guides'],
        image: '/img/small_snoo.png',
      },
      items: [
        'get-started/quickstart',
        'get-started/environment',
        'get-started/create-app',
        'get-started/upload',
        'get-started/playtest',
        'get-started/permissions',
        'get-started/install-app',
        'get-started/publish',
        'get-started/debug',
        'get-started/update',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      link: { type: 'doc', id: 'examples/overview' },
      items: ['examples/playpens', 'examples/apps', 'examples/tutorials'],
    },
    {
      type: 'category',
      label: 'Capabilities',
      link: {
        type: 'generated-index',
        title: 'Explore the possibilities',
        description: 'This section contains features and capabilities you can use in your app.',
        slug: '/category/devvit-capabilities',
        keywords: ['capabilities'],
        image: '/img/small_snoo.png',
      },
      items: [
        'install_settings',
        'adding_links',
        'cache',
        'forms',
        'media_uploads',
        'menu_actions',
        {
          label: 'Reddit API Client',
          type: 'doc',
          id: 'api/redditapi/classes/RedditAPIClient.RedditAPIClient',
        },
        'redis',
        'scheduler',
        'secrets_storage',
        'event_triggers',
        'http_fetch',
      ],
    },
    {
      type: 'category',
      label: 'Custom posts',
      link: {
        type: 'generated-index',
        title: 'Create an experience',
        description: 'Dive in an see what you can create with custom posts.',
        slug: '/category/devvit-custom-posts',
        keywords: ['custom-posts'],
        image: '/img/small_snoo.png',
      },
      items: [
        `custom_posts`,
        'custom_post_project_guide',
        `app_image_assets`,
        'dimensions',
        'working_with_usestate',
        `working_with_useinterval`,
      ],
    },
    {
      type: 'category',
      label: 'Blocks',
      link: { type: 'doc', id: 'blocks/overview' },
      items: [
        'blocks/stacks',
        'blocks/text',
        'blocks/icon',
        'blocks/button',
        'blocks/image',
        'blocks/spacer',
        'blocks/colors',
      ],
    },
    {
      type: 'doc',
      label: 'Playground',
      id: 'playground',
    },
    {
      type: 'category',
      label: 'Devvit CLI',
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli',
        },
      ],
    },
    {
      type: 'category',
      label: 'Devvit Library',
      items: [
        {
          type: 'doc',
          label: 'Devvit Entrypoint',
          id: 'api/public-api/classes/Devvit-1',
        },
        {
          type: 'category',
          label: 'Reddit API',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/redditapi/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/redditapi/interfaces',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      link: {
        type: 'generated-index',
        title: 'Create, test, and debug your apps',
        description: 'Tools that help you build.',
        slug: '/category/devvit-resources',
        keywords: ['resources'],
        image: '/img/small_snoo.png',
      },
      items: ['mod_resources', 'support', 'changelog'],
    },
  ],
};

module.exports = sidebars;
