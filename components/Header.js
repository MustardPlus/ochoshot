import { ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';
import ocho_ico from '../public/assets/logo/os_buscard.png';
import Link from 'next/link';

const Header = ( { children } ) => {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: '/assets/structure/preview.jpg',
                    speed: -60,
                    scale: [0.7, 0.7, "easeOutCubic"]
                },
                { image: '/assets/structure/check_cover.png', speed: -10 },
            ]}
            className="header-box"
        >
            <div className="header absolute bottom-0 flex">
                <div className="header-logo basis-1/2">
                    <Image src={ocho_ico} width="1001" height="549" className="" />
                </div>
            </div>
            <div className="header-msg absolute top-0 right-0 flex flex-col items-center justify-center">
                <h1 className="text-4xl text-white fntOrelaga">oops...</h1>

                <div class="focus-box flex flex-col items-center justify-center text-base drop-shadow-xl">
                    <p><span class="cG">// site under construction...</span></p>
                    <p><span class="cP">// schedule appointments through <Link href="https://www.instagram.com/ocho.shot/" target="_blank" className="cY">instagram</Link>...</span></p>
                    
                </div>

                {children}
            </div>
        </ParallaxBanner>
    );
};

export default Header;