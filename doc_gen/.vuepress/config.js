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
    sidebar: 'auto',
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    repo: 'our-story-media/ourstory-guide',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit in GitHub',
    logo: '/platform.svg',
  }
}