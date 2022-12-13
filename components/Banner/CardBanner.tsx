import liveworm from '../../public/images/source/img-5.png'
import driedworm from '../../public/images/source/img-10.png'
import Image from 'next/image';

interface Props {
    children?: React.ReactNode;
    type?: string;
}

const CardBanner = ({ children, type="live" }: Props) => {
    return (
        <div className="wth-card-banner">
            <div className='wth-card-banner__img-container'>
                <Image
                    alt="logo"
                    src={type === "live" ? liveworm : driedworm}
                    quality={100}
                    placeholder="blur"
                    className='wth-card-banner__img'
                />
            </div>
            <div className="wth-card-banner__heading">
                {children}
            </div>
        </div>
    );
};

export default CardBanner;