import { useRouter } from "next/router";
import { th, en } from "../../locales/translations"
import blog1 from '../../public/images/source/article-1.png'
import Image from 'next/image';
import Link from "next/link";

const ArticleSection = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === 'th' ? th : en
    return (
        <section id="article" className="wth-article">
            <div className="wth-article__container" >
                <div className="container">
                    <div className="wth-article__content">
                        <div className="wth-article__heading">{t.article.heading}</div>
                        <div className="wth-article__content-container">
                            <Link href="https://www.bangkokpost.com/business/2453167/a-growing-hunger-for-bugs" passHref legacyBehavior>
                                <a target="_blank">
                                    <div className="wth-article__card">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <div className="wth-article__image">
                                                    <Image
                                                        alt="logo"
                                                        src={blog1}
                                                        quality={100}
                                                        placeholder="blur"
                                                        className='wth-article__img'
                                                    />
                                                </div></div>
                                            <div className="col-12 col-md-8">
                                                <div className="wth-article__src">BANGKOKPOST.COM</div>
                                                <div className="wth-article__title-label">A growing hunger for bugs</div>
                                                <div className="wth-article__label">Edible insects have been served as food in Thailand for a long time...</div>
                                                <div className="wth-article__footer">
                                                    <div className="wth-article__more">{t.article.more}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleSection;