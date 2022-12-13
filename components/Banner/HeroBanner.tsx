import { useRouter } from "next/router";
import { th, en } from "../../locales/translations"

const HeroBanner = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === 'th' ? th : en
    return (
        <div className="wth-hero-banner">
            <div className="wth-hero-banner__container">
                <div className="wth-hero-banner__heading">
                    {t.hero.greeting}
                </div>
                <div className="wth-hero-banner__sub-heading">
                    {t.hero.subgreeting}
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;