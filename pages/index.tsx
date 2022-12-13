import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CardBanner, HeroBanner } from '../components/Banner'
import { AboutUsSection, ArticleSection, ContactUsSection, ProductSection } from '../components/Section'
import { en, th } from '../locales/translations'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const { locale } = router;
  const t = locale === 'th' ? th : en
  return (
    <div className="wth-home">
      <Head>
        <title>{t.head.main} - {t.head.sub}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroBanner></HeroBanner>
      <ProductSection></ProductSection>
      <AboutUsSection></AboutUsSection>
      <ArticleSection></ArticleSection>
      <ContactUsSection></ContactUsSection>
    </div>
  )
}
