module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en',
    },
    '/es/': {
      lang: 'es',
      title: 'Spanish Title',
      // description: 'Vue 驱动的静态网站生成器'
    },
    '/ar/': {
      lang: 'ar'
    },
    '/fr/': {
      lang: 'fr'
    }
  },
  title: 'Guide',
  dest: 'docs',
  base: '/',
  description: 'Our Story Deployment Guide',
  home: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    locales:{
      '/':{
        label: 'English'
      },
      '/es/':{
        label: 'Español'
      },
      '/ar/':{
        label: 'عربى'
      },
      '/fr/':{
        label: 'Français'
      }
    },
    
    displayAllHeaders: false,
    lastUpdated: 'Last Updated',
    repo: 'our-story-media/ourstory-guide',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Edit in GitHub',
    logo: '/platform.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Quick Start', link: '/quickstart/' },
      { text: 'Materials', link: '/materials/' }
    ],
    sidebar: {
      '/quickstart/':[
        '/quickstart/',
        '/quickstart/online/',
        '/quickstart/titan/'
      ],
      '/guide/':[
        '/guide/',
        '/guide/howtouse/',
        '/guide/preparation/',
        '/guide/ideation/',
        '/guide/capture/',
        '/guide/creation/',
        '/guide/presentation/',
        '/guide/postproduction/'
      ],
      '/Materials/':[
        '/materials/'
      ]
      // {
      //   title: 'Introduction',
      //   collapsable: false,
      //   children: 
      //   [
      //     '/guide/',
      //     '/guide/page2',
      //     // '/guide/stage1/',
      //     // '/stage2/',
      //   ]
      // },
      // {
      //   title: 'Preparation',
      //   collapsable: false,
      //   children: [ '/guide/preparation/' ]
      // },
      // {
      //   title: 'Not in My Language',
      //   collapsable: false,
      //   children: [
      //     '/'
      //   ]
      // },
    },
  },
  plugins: [
    '@vuepress/plugin-nprogress',
    '@vuepress/plugin-back-to-top',
    'reading-progress',
    'reading-time',
    'element-tabs',
    'export'
    ]
}

// [(pluginOptions, context) => ({
//   // name: 'read-time',
//   globalUIComponents: 'ReadTime'
// })]