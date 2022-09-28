import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { commitRef, deployType } from './shared'

const ogUrl = 'https://vitejs.dev/es/'
const ogDescription = 'Herramienta frontend de próxima generación'

const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (rama principal)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()
const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
  switch (deployType) {
    case 'main':
    case 'local':
      return [
        {
          text: 'Documentación de Vite 3 (producción)',
          link: 'https://vitejs.dev/es/'
        },
        {
          text: 'Documentación de Vite 2',
          link: 'https://v2.vitejs.dev'
        }
      ]
    case 'release':
      return [
        {
          text: 'Documentación de Vite 2',
          link: 'https://v2.vitejs.dev'
        }
      ]
  }
})()

export const esConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: `Vite${additionalTitle}`,

  description: ogDescription,
  head: [
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vitejs/docs-es/edit/main/docs/:path',
      text: 'Sugerir cambios para esta página'
    },

    footer: {
      message: `Publicado bajo licencia MIT. (${commitRef})`,
      copyright: 'Copyright © 2019-actualidad Evan You & colaboradores de Vite'
    },

    nav: [
      {
        text: 'Guía',
        link: '/es/guide/',
        activeMatch: '/es/guide/'
      },
      {
        text: 'Configuración',
        link: '/es/config/',
        activeMatch: '/es/config/'
      },
      {
        text: 'Complementos',
        link: '/es/plugins/',
        activeMatch: '/es/plugins/'
      },
      {
        text: 'Recursos',
        items: [
          {
            text: 'Equipo',
            link: '/es/team'
          },
          {
            items: [
              {
                text: 'Twitter',
                link: 'https://twitter.com/vite_js'
              },
              {
                text: 'Chat de Discord',
                link: 'https://chat.vitejs.dev'
              },
              {
                text: 'Awesome Vite',
                link: 'https://github.com/vitejs/awesome-vite'
              },
              {
                text: 'DEV Community',
                link: 'https://dev.to/t/vite'
              },
              {
                text: 'Complementos de Rollup compatibles',
                link: 'https://vite-rollup-plugins.patak.dev/'
              },
              {
                text: 'Lista de Cambios',
                link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
              }
            ]
          }
        ]
      },
      {
        text: 'Versión',
        items: versionLinks
      }
    ],

    sidebar: {
      '/es/guide/': [
        {
          text: 'Guía',
          items: [
            {
              text: '¿Por qué Vite?',
              link: '/es/guide/why'
            },
            {
              text: 'Introducción',
              link: '/es/guide/'
            },
            {
              text: 'Funcionalidades',
              link: '/es/guide/features'
            },
            {
              text: 'Uso de complementos',
              link: '/es/guide/using-plugins'
            },
            {
              text: 'Preempaquetado de dependencias',
              link: '/es/guide/dep-pre-bundling'
            },
            {
              text: 'Gestión de recursos estáticos',
              link: '/es/guide/assets'
            },
            {
              text: 'Compilación en producción',
              link: '/es/guide/build'
            },
            {
              text: 'Despliegue de un sitio estático',
              link: '/es/guide/static-deploy'
            },
            {
              text: 'Variables y modos de entorno',
              link: '/es/guide/env-and-mode'
            },
            {
              text: 'Server-side Rendering (SSR)',
              link: '/es/guide/ssr'
            },
            {
              text: 'Integración al Backend',
              link: '/es/guide/backend-integration'
            },
            {
              text: 'Comparaciones',
              link: '/es/guide/comparisons'
            },
            {
              text: 'Solución de problemas',
              link: '/es/guide/troubleshooting'
            },
            {
              text: 'Migración desde v2',
              link: '/es/guide/migration'
            }
          ]
        },
        {
          text: 'APIs',
          items: [
            {
              text: 'API de complementos',
              link: '/es/guide/api-plugin'
            },
            {
              text: 'API de HMR',
              link: '/es/guide/api-hmr'
            },
            {
              text: 'API de JavaScript',
              link: '/es/guide/api-javascript'
            },
            {
              text: 'Referencia de Configuración',
              link: '/es/config/'
            }
          ]
        }
      ],
      '/es/config/': [
        {
          text: 'Configuración',
          items: [
            {
              text: 'Configurando Vite',
              link: '/es/config/'
            },
            {
              text: 'Opciones compartidas',
              link: '/es/config/shared-options'
            },
            {
              text: 'Opciones para server',
              link: '/es/config/server-options'
            },
            {
              text: 'Opciones para build',
              link: '/es/config/build-options'
            },
            {
              text: 'Opciones para preview',
              link: '/es/config/preview-options'
            },
            {
              text: 'Opciones para optimización de dependencias',
              link: '/es/config/dep-optimization-options'
            },
            {
              text: 'Opciones para SSR',
              link: '/es/config/ssr-options'
            },
            {
              text: 'Opciones para Worker',
              link: '/es/config/worker-options'
            }
          ]
        }
      ]
    },

    outlineTitle: 'En esta página',
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    }
  }
}
