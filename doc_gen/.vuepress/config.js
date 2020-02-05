module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en',
    },
    '/es/': {
      lang: 'es',
      // title: 'Spanish Title',
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
  description: 'Indaba Deployment Guide',
  home: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown:{
    anchor: { permalink: false, permalinkBefore: true, permalinkSymbol: '%' }
  },
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
    lastUpdated: 'Updated',
    repo: 'our-story-media/ourstory-resources',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Edit in GitHub',
    repoLabel: 'Contribute!',
    logo: '/platform.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Quick Start', link: '/quickstart/' },
      { text: 'Materials', link: '/materials/' },
      { text: 'Dashboard', link: 'https://app.indaba.dev' }
    ],
    sidebar: {
      '/quickstart/':[
        '/quickstart/',
        '/quickstart/titan/',
        '/quickstart/online/',
        '/quickstart/app/',
        '/quickstart/dashboard/'
      ],
      '/guide/':[
        '/guide/',
        '/guide/process/',
        '/guide/editions/',
        '/guide/howtouse/',
        '/guide/predeployment/',
        '/guide/preparation/',
        '/guide/ideation/',
        '/guide/capture/',
        '/guide/creation/',
        '/guide/presentation/',
        '/guide/postproduction/',
        '/guide/tips',
        '/guide/faq',
        '/guide/troubleshooting',
        '/guide/pubs/'
      ],
      '/Materials/':[
        '/materials/'
      ]
    },
  },
  plugins: {
    '@vuepress/plugin-nprogress':{},
    '@vuepress/plugin-back-to-top':{},
    'reading-progress':{},
    'reading-time':{},
    'sitemap': {
      hostname: 'https://indaba.dev'
    },
  }
}