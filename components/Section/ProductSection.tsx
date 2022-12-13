import { CardBanner } from "../Banner";

import { useRouter } from "next/router";
import { th, en } from "../../locales/translations"

const ProductSection = () => {
  const router = useRouter()
  const { locale } = router;
  const t = locale === 'th' ? th : en
  return (
    <section id="product" className="wth-product">
      <div className='container'>
        <div className="wth-product__content">
          <div className="wth-product__heading">{t.product.heading}</div>
        </div>
        <div className='row py-4'>
          <div className='col-12 col-md-6'>
            <CardBanner type="live">{t.product.live}</CardBanner>
          </div>
          <div className='col-12 col-md-6'>
            <CardBanner type="dried">{t.product.dried}</CardBanner>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;