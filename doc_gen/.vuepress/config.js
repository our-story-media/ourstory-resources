module.exports = {
  locales: {
    '/': {
      lang: 'en'
    },
    '/es/': {
      lang: 'es',
      title: 'Guía'
    },
    '/ar/': {
      lang: 'ar',
      title: 'يرشد'
    },
    '/fr/': {
      lang: 'fr',
      title: 'Guider'
    }
  },
  title: 'Guide',
  dest: 'docs',
  base: '/',
  description: 'Indaba Deployment Guide',
  home: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.png'
      }
    ],
    [
      'link',
      {
        rel: 'alternate machine-translated-from',
        hreflang: 'en',
        href: 'https://indaba.dev'
      }
    ]
  ],
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        steps: [
          'Prep.',
          'Ideation',
          'Capture',
          'Creation',
          'Feedback',
          'Use'
        ]
      },
      '/es/': {
        label: 'Español',
        nav: [
          {
            text: 'Guía',
            link: '/es/guide/'
          },
          {
            text: 'Inicio rápido',
            link: '/es/quickstart/'
          },
          {
            text: 'Materiales',
            link: '/es/materials/'
          },
          {
            text: 'Tablero',
            link: 'https://app.indaba.dev'
          }
        ],
        sidebar: {
          '/es/quickstart/': [
            '/es/quickstart/',
            '/es/quickstart/titan/',
            '/es/quickstart/online/',
            '/es/quickstart/app/',
            '/es/quickstart/dashboard/'
          ],
          '/es/guide/': [
            '/es/guide/',
            '/es/guide/process/',
            '/es/guide/editions/',
            '/es/guide/howtouse/',
            '/es/guide/predeployment/',
            '/es/guide/preparation/',
            '/es/guide/ideation/',
            '/es/guide/capture/',
            '/es/guide/creation/',
            '/es/guide/presentation/',
            '/es/guide/postproduction/',
            '/es/guide/tips',
            '/es/guide/faq',
            '/es/guide/troubleshooting',
            '/es/guide/pubs/'
          ],
          '/es/materials/': [
            '/es/materials/'
          ]
        },
        steps: [
          'Deberes.',
          'Ideación',
          'Capturar',
          'Creación',
          'Retroalimentación',
          'Utilizar'
        ],
        lastUpdated: 'Actualizado',
        selectText: 'Idiomas',
        title: 'Guía'
      },
      '/ar/': {
        label: 'عربى',
        nav: [
          {
            text: 'يرشد',
            link: '/ar/guide/'
          },
          {
            text: 'بداية سريعة',
            link: '/ar/quickstart/'
          },
          {
            text: 'المواد',
            link: '/ar/materials/'
          },
          {
            text: 'لوحة القيادة',
            link: 'https://app.indaba.dev'
          }
        ],
        sidebar: {
          '/ar/quickstart/': [
            '/ar/quickstart/',
            '/ar/quickstart/titan/',
            '/ar/quickstart/online/',
            '/ar/quickstart/app/',
            '/ar/quickstart/dashboard/'
          ],
          '/ar/guide/': [
            '/ar/guide/',
            '/ar/guide/process/',
            '/ar/guide/editions/',
            '/ar/guide/howtouse/',
            '/ar/guide/predeployment/',
            '/ar/guide/preparation/',
            '/ar/guide/ideation/',
            '/ar/guide/capture/',
            '/ar/guide/creation/',
            '/ar/guide/presentation/',
            '/ar/guide/postproduction/',
            '/ar/guide/tips',
            '/ar/guide/faq',
            '/ar/guide/troubleshooting',
            '/ar/guide/pubs/'
          ],
          '/ar/materials/': [
            '/ar/materials/'
          ]
        },
        steps: [
          'تجهيز.',
          'التفكير',
          'إلتقاط',
          'خلق',
          'ردود الفعل',
          'استعمال'
        ],
        lastUpdated: 'محدث',
        selectText: 'اللغات'
      },
      '/fr/': {
        label: 'Français',
        nav: [
          {
            text: 'Guider',
            link: '/fr/guide/'
          },
          {
            text: 'Démarrage rapide',
            link: '/fr/quickstart/'
          },
          {
            text: 'Matériaux',
            link: '/fr/materials/'
          },
          {
            text: 'Tableau de bord',
            link: 'https://app.indaba.dev'
          }
        ],
        sidebar: {
          '/fr/quickstart/': [
            '/fr/quickstart/',
            '/fr/quickstart/titan/',
            '/fr/quickstart/online/',
            '/fr/quickstart/app/',
            '/fr/quickstart/dashboard/'
          ],
          '/fr/guide/': [
            '/fr/guide/',
            '/fr/guide/process/',
            '/fr/guide/editions/',
            '/fr/guide/howtouse/',
            '/fr/guide/predeployment/',
            '/fr/guide/preparation/',
            '/fr/guide/ideation/',
            '/fr/guide/capture/',
            '/fr/guide/creation/',
            '/fr/guide/presentation/',
            '/fr/guide/postproduction/',
            '/fr/guide/tips',
            '/fr/guide/faq',
            '/fr/guide/troubleshooting',
            '/fr/guide/pubs/'
          ],
          '/fr/materials/': [
            '/fr/materials/'
          ]
        },
        steps: [
          'Préparation.',
          'Idéation',
          'Capturer',
          'Création',
          'Retour d&#39;information',
          'Utilisation'
        ],
        lastUpdated: 'Mis à jour',
        selectText: 'Les langues'
      }
    },
    displayAllHeaders: false,
    lastUpdated: 'Updated',
    repo: 'our-story-media/ourstory-guide',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Edit in GitHub',
    repoLabel: 'Contribute!',
    logo: '/platform.svg',
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Quick Start',
        link: '/quickstart/'
      },
      {
        text: 'Materials',
        link: '/materials/'
      },
      {
        text: 'Dashboard',
        link: 'https://app.indaba.dev'
      }
    ],
    sidebar: {
      '/quickstart/': [
        '/quickstart/',
        '/quickstart/titan/',
        '/quickstart/online/',
        '/quickstart/app/',
        '/quickstart/dashboard/'
      ],
      '/guide/': [
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
      '/materials/': [
        '/materials/'
      ]
    }
  },
  plugins: [
    '@vuepress/plugin-nprogress',
    '@vuepress/plugin-back-to-top',
    'reading-progress',
    'reading-time',
    'element-tabs',
    'export'
  ],
  configureWebpack:{
    mode: 'development'
  }
}