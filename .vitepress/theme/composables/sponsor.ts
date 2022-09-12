import { computed, ref, onMounted } from 'vue'
import { useData } from 'vitepress'

interface Sponsors {
  special: Sponsor[]
  platinum: Sponsor[]
  platinum_china: Sponsor[]
  gold: Sponsor[]
  silver: Sponsor[]
  bronze: Sponsor[]
}

interface Sponsor {
  name: string
  img: string
  url: string
}

// shared data across instances so we load only once.
const data = ref()

const dataHost = 'https://sponsors.vuejs.org'
const dataUrl = `${dataHost}/vite.json`

export function useSponsor() {
  onMounted(async () => {
    if (data.value) return
    const result = await fetch(dataUrl)
    data.value = await result.json()
  })

  const { localeIndex } = useData()
  return {
    data: computed(() =>
      data.value ? mapSponsors(data.value, localeIndex.value) : []
    )
  }
}

function mapSponsors(sponsors: Sponsors, lang: string) {
  return [
    {
      tier: lang === 'es' ? 'Patrocinadores Platinum' : 'Platinum Sponsor',
      size: 'big',
      items: mapImgPath(sponsors['platinum'])
    },
    {
      tier: lang === 'es' ? 'Patrocinadores Oro' : 'Gold Sponsors',
      size: 'medium',
      items: mapImgPath(sponsors['gold'])
    }
  ]
}

function mapImgPath(sponsors: Sponsor[]) {
  return sponsors.map((sponsor) => ({
    ...sponsor,
    img: `${dataHost}/images/${sponsor.img}`
  }))
}
