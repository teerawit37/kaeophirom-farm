import { useRouter } from "next/router";
import { th, en } from "../../locales/translations"
import worm from '../../public/images/source/img-8.png'
import Image from 'next/image';

const AboutUsSection = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === 'th' ? th : en
    const text = "Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์ และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น Letraset วางจำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น คือเมื่อซอฟท์แวร์การทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง Aldus PageMaker ได้รวมเอา Lorem Ipsum เวอร์ชั่นต่างๆ เข้าไว้ในซอฟท์แวร์ด้วย"
    return (
        <section id="aboutus" className="wth-about-us">
            <div className="wth-about-us__space" />
            <div className="wth-about-us__container" >
                <div className="container">
                    <div className="wth-about-us__content">
                        <div className="wth-about-us__heading">{t.aboutus.heading}</div>
                        <div className="row py-4">
                            <div className="col-sm-12 col-md-6">
                                <div className="wth-about-us__text">{t.aboutus.article}</div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="wth-about-us__image">
                                    <Image
                                        alt="logo"
                                        src={worm}
                                        quality={100}
                                        placeholder="blur"
                                        className='wth-about-us__img'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wth-about-us__space" />
        </section>
    );
};

export default AboutUsSection;