import { useRouter } from "next/router";
import { th, en } from "../../locales/translations"

const ContactUsSection = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === 'th' ? th : en
    return (
        <section id="contactus" className="wth-contact-us">
            <div className="wth-contact-us__container" >
                <div className="container">
                    <div className="wth-contact-us__content">
                        <div className="wth-contact-us__heading">{t.contactus.heading}</div>
                        <div className="wth-contact-us__content-container">
                            <div className="wth-contact-us__label">
                                {t.contactus.email}: <a className="wth-contact-us__link" href="mailto:contact@wormth.com">contact@wormth.com</a>
                            </div>
                            <div className="wth-contact-us__label">
                                {t.contactus.phone}: <a className="wth-contact-us__link" href="tel:+66937900962">(+66) 093-7900962</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;