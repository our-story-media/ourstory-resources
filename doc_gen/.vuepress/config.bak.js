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
      title: 'مرشد'
    },
    '/fr/': {
      lang: 'fr',
      title: 'Guide'
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
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: true,
      permalinkSymbol: '%'
    }
  },
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
        ],
        readtime: 'min read'
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
            text: 'Capacitación',
            link: 'https://app.indaba.dev'
          }
        ],
        sidebar: {
          '/es/quickstart/': [
            '/es/quickstart/',
            '/es/quickstart/titan-pi/',
            '/es/quickstart/app/',
            '/es/quickstart/dashboard/',
            '/es/quickstart/training/',
            '/es/quickstart/titan/'
          ],
          '/es/guide/': [
            '/es/guide/',
            '/es/guide/process/',
            '/es/guide/howtouse/',
            '/es/guide/predeployment/',
            '/es/guide/preparation/',
            '/es/guide/ideation/',
            '/es/guide/capture/',
            '/es/guide/creation/',
            '/es/guide/presentation/',
            '/es/guide/postproduction/',
            '/es/guide/transcription/',
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
          'Captura',
          'Creación',
          'Comentario',
          'Usar'
        ],
        lastUpdated: 'Actualizado',
        selectText: 'Idiomas',
        title: 'Guía',
        readtime: 'lectura mínima'
      },
      '/ar/': {
        label: 'عربى',
        nav: [
          {
            text: 'مرشد',
            link: '/ar/guide/'
          },
          {
            text: 'بداية سريعة',
            link: '/ar/quickstart/'
          },
          {
            text: 'مواد',
            link: '/ar/materials/'
          },
          {
            text: 'تمرين',
            link: 'https://app.indaba.dev'
          }
        ],
        sidebar: {
          '/ar/quickstart/': [
            '/ar/quickstart/',
            '/ar/quickstart/titan-pi/',
            '/ar/quickstart/app/',
            '/ar/quickstart/dashboard/',
            '/ar/quickstart/training/',
            '/ar/quickstart/titan/'
          ],
          '/ar/guide/': [
            '/ar/guide/',
            '/ar/guide/process/',
            '/ar/guide/howtouse/',
            '/ar/guide/predeployment/',
            '/ar/guide/preparation/',
            '/ar/guide/ideation/',
            '/ar/guide/capture/',
            '/ar/guide/creation/',
            '/ar/guide/presentation/',
            '/ar/guide/postproduction/',
            '/ar/guide/transcription/',
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
          'يأسر',
          'خلق',
          'تعليق',
          'يستخدم'
        ],
        lastUpdated: 'محدث',
        selectText: 'اللغات',
        readtime: 'دقيقة قراءة'
      },
      '/fr/': {
        label: 'Français',
        nav: [
          {
            text: 'Guide',
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
            text: 'Entraînement',
            link: 'https://app.indaba.dev'
          }
        ],
        sidebar: {
          '/fr/quickstart/': [
            '/fr/quickstart/',
            '/fr/quickstart/titan-pi/',
            '/fr/quickstart/app/',
            '/fr/quickstart/dashboard/',
            '/fr/quickstart/training/',
            '/fr/quickstart/titan/'
          ],
          '/fr/guide/': [
            '/fr/guide/',
            '/fr/guide/process/',
            '/fr/guide/howtouse/',
            '/fr/guide/predeployment/',
            '/fr/guide/preparation/',
            '/fr/guide/ideation/',
            '/fr/guide/capture/',
            '/fr/guide/creation/',
            '/fr/guide/presentation/',
            '/fr/guide/postproduction/',
            '/fr/guide/transcription/',
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
          'Retour',
          'Utiliser'
        ],
        lastUpdated: 'Mis à jour',
        selectText: 'Langues',
        readtime: 'lecture min.'
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
        text: 'Training',
        link: 'https://app.indaba.dev'
      }
    ],
    sidebar: {
      '/quickstart/': [
        '/quickstart/',
        '/quickstart/titan-pi/',
        '/quickstart/app/',
        '/quickstart/dashboard/',
        '/quickstart/training/',
        '/quickstart/titan/'
      ],
      '/guide/': [
        '/guide/',
        '/guide/process/',
        '/guide/howtouse/',
        '/guide/predeployment/',
        '/guide/preparation/',
        '/guide/ideation/',
        '/guide/capture/',
        '/guide/creation/',
        '/guide/presentation/',
        '/guide/postproduction/',
        '/guide/transcription/',
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
  plugins: {
    '@vuepress/plugin-nprogress': {},
    '@vuepress/plugin-back-to-top': {},
    'reading-progress': {},
    'reading-time': {},
    sitemap: {
      hostname: 'https://indaba.dev'
    }
  }
}