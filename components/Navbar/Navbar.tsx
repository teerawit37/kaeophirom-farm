import { useRouter } from "next/router";
import Image from 'next/image';
import logo from '../../public/images/logo/logo-filled-color.png'
import { th, en } from "../../locales/translations"
import Link from "next/link";

const Navbar = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === 'th' ? th : en
    const handleLanguageToggle = () => {
        console.log(locale)
        switch (locale) {
            case "en":
                router.push("/", "/", { locale: "th" })
                break;
            case "th":
                router.push("/", "/", { locale: "en" })
                break;
        }
    }
    return (
        <div className="container">
            <div className="wth-navbar">
                <div className="wth-navbar__menu-container">
                    <Link href="/#product">
                        <div className="wth-navbar__menu-item">{t.menu.product}</div>
                    </Link>
                    <Link href="/#aboutus">
                        <div className="wth-navbar__menu-item">{t.menu.aboutus}</div>
                    </Link>
                    <Link href="/#contactus">
                        <div className="wth-navbar__menu-item">{t.menu.contactus}</div>
                    </Link>
                </div>
                <div className="wth-navbar__logo-container">
                    <div className="wth-navbar__logo">
                        <Image
                            alt="logo"
                            src={logo}
                            quality={100}
                            placeholder="blur"
                            width={100}
                            height={91}
                        />
                    </div>
                </div>
                <div className="wth-navbar__menu-container wth-navbar__menu-container--last">
                    <div onClick={() => handleLanguageToggle()} className="wth-navbar__menu-item">
                        {locale === 'th' ? 'TH' : 'EN'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;