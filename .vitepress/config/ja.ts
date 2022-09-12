import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { versionLinks } from './shared'

const ogUrl = 'https://vitejs.dev/ja/'
const ogDescription = '次世代フロントエンドツール'

export const jaConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: ogDescription,
  head: [
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vitejs/docs-ja/edit/main/:path',
      text: 'このページへの変更を提案する'
    },

    nav: [
      {
        text: 'ガイド',
        link: '/ja/guide/',
        activeMatch: '/ja/guide/'
      },
      {
        text: '設定',
        link: '/ja/config/',
        activeMatch: '/ja/config/'
      },
      {
        text: 'プラグイン',
        link: '/ja/plugins/',
        activeMatch: '/ja/plugins/'
      },
      {
        text: 'リソース',
        items: [
          {
            text: 'チーム',
            link: '/ja/team'
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
      '/ja/guide/': [
        {
          text: 'ガイド',
          items: [
            {
              text: 'なぜ Vite なのか',
              link: '/ja/guide/why'
            },
            {
              text: 'はじめに',
              link: '/ja/guide/'
            },
            {
              text: '特徴',
              link: '/ja/guide/features'
            },
            {
              text: 'プラグインの使用',
              link: '/ja/guide/using-plugins'
            },
            {
              text: '依存関係の事前バンドル',
              link: '/ja/guide/dep-pre-bundling'
            },
            {
              text: '静的アセットの取り扱い',
              link: '/ja/guide/assets'
            },
            {
              text: '本番環境用のビルド',
              link: '/ja/guide/build'
            },
            {
              text: '静的サイトのデプロイ',
              link: '/ja/guide/static-deploy'
            },
            {
              text: '環境変数とモード',
              link: '/ja/guide/env-and-mode'
            },
            {
              text: 'サーバサイドレンダリング',
              link: '/ja/guide/ssr'
            },
            {
              text: 'バックエンドとの統合',
              link: '/ja/guide/backend-integration'
            },
            {
              text: '他のツールとの比較',
              link: '/ja/guide/comparisons'
            },
            {
              text: 'トラブルシューティング',
              link: '/ja/guide/troubleshooting'
            },
            {
              text: 'v2 からの移行',
              link: '/ja/guide/migration'
            }
          ]
        },
        {
          text: 'API',
          items: [
            {
              text: 'プラグイン API',
              link: '/ja/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/ja/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/ja/guide/api-javascript'
            },
            {
              text: '設定リファレンス',
              link: '/ja/config/'
            }
          ]
        }
      ],
      '/ja/config/': [
        {
          text: '設定',
          items: [
            {
              text: 'Vite の設定',
              link: '/ja/config/'
            },
            {
              text: '共通オプション',
              link: '/ja/config/shared-options'
            },
            {
              text: 'サーバオプション',
              link: '/ja/config/server-options'
            },
            {
              text: 'ビルドオプション',
              link: '/ja/config/build-options'
            },
            {
              text: 'プレビューのオプション',
              link: '/ja/config/preview-options'
            },
            {
              text: '依存関係の最適化オプション',
              link: '/ja/config/dep-optimization-options'
            },
            {
              text: 'SSR オプション',
              link: '/ja/config/ssr-options'
            },
            {
              text: 'ワーカのオプション',
              link: '/ja/config/worker-options'
            }
          ]
        }
      ]
    }
  }
}
