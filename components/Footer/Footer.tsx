import { useRouter } from "next/router";
import { th, en } from "../../locales/translations"
import Image from 'next/image';
import logo from '../../public/images/logo/logo-filled-color.png'
import Link from "next/link";

const Footer = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === 'th' ? th : en

    return (

        <div className="wth-footer">
            <div className="container">
                <div className="wth-footer__content">
                    <Image
                        className="mb-2"
                        alt="logo"
                        src={logo}
                        quality={100}
                        placeholder="blur"
                        width={100}
                        height={91}
                    />
                    <div className="wth-footer__menu-container">\
                        <Link href="/#product">
                            <div className="wth-footer__menu-item">{t.menu.product}</div>
                        </Link>
                        <Link href="/#aboutus">
                            <div className="wth-footer__menu-item">{t.menu.aboutus}</div>
                        </Link>
                        <Link href="/#contactus">
                            <div className="wth-footer__menu-item">{t.menu.contactus}</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;