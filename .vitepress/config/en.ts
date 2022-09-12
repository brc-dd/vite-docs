import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { versionLinks } from './shared'

const ogUrl = 'https://vitejs.dev/en/'
const ogDescription = 'Next Generation Frontend Tooling'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: ogDescription,
  head: [
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    nav: [
      {
        text: 'Guide',
        link: '/en/guide/',
        activeMatch: '/en/guide/'
      },
      {
        text: 'Config',
        link: '/en/config/',
        activeMatch: '/en/config/'
      },
      {
        text: 'Plugins',
        link: '/en/plugins/',
        activeMatch: '/en/plugins/'
      },
      {
        text: 'Resources',
        items: [
          {
            text: 'Team',
            link: '/en/team'
          },
          {
            items: [
              {
                text: 'Twitter',
                link: 'https://twitter.com/vite_js'
              },
              {
                text: 'Discord Chat',
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
                text: 'Rollup Plugins Compat',
                link: 'https://vite-rollup-plugins.patak.dev/'
              },
              {
                text: 'Changelog',
                link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
              }
            ]
          }
        ]
      },
      {
        text: 'Version',
        items: versionLinks
      }
    ],

    sidebar: {
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Why Vite',
              link: '/en/guide/why'
            },
            {
              text: 'Getting Started',
              link: '/en/guide/'
            },
            {
              text: 'Features',
              link: '/en/guide/features'
            },
            {
              text: 'Using Plugins',
              link: '/en/guide/using-plugins'
            },
            {
              text: 'Dependency Pre-Bundling',
              link: '/en/guide/dep-pre-bundling'
            },
            {
              text: 'Static Asset Handling',
              link: '/en/guide/assets'
            },
            {
              text: 'Building for Production',
              link: '/en/guide/build'
            },
            {
              text: 'Deploying a Static Site',
              link: '/en/guide/static-deploy'
            },
            {
              text: 'Env Variables and Modes',
              link: '/en/guide/env-and-mode'
            },
            {
              text: 'Server-Side Rendering (SSR)',
              link: '/en/guide/ssr'
            },
            {
              text: 'Backend Integration',
              link: '/en/guide/backend-integration'
            },
            {
              text: 'Comparisons',
              link: '/en/guide/comparisons'
            },
            {
              text: 'Troubleshooting',
              link: '/en/guide/troubleshooting'
            },
            {
              text: 'Migration from v2',
              link: '/en/guide/migration'
            }
          ]
        },
        {
          text: 'APIs',
          items: [
            {
              text: 'Plugin API',
              link: '/en/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/en/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/en/guide/api-javascript'
            },
            {
              text: 'Config Reference',
              link: '/en/config/'
            }
          ]
        }
      ],
      '/en/config/': [
        {
          text: 'Config',
          items: [
            {
              text: 'Configuring Vite',
              link: '/en/config/'
            },
            {
              text: 'Shared Options',
              link: '/en/config/shared-options'
            },
            {
              text: 'Server Options',
              link: '/en/config/server-options'
            },
            {
              text: 'Build Options',
              link: '/en/config/build-options'
            },
            {
              text: 'Preview Options',
              link: '/en/config/preview-options'
            },
            {
              text: 'Dep Optimization Options',
              link: '/en/config/dep-optimization-options'
            },
            {
              text: 'SSR Options',
              link: '/en/config/ssr-options'
            },
            {
              text: 'Worker Options',
              link: '/en/config/worker-options'
            }
          ]
        }
      ]
    }
  }
}
