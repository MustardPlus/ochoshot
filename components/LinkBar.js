import Image from 'next/image';
import Link from 'next/link';
import Icons from './Icons';

const LinkBar = ( {text, goto, color, source, code} ) => {
    const myClass = "h-full flex link-bar fntOrelaga border-2 border-lime-700 rounded-[20px] px-3 sm:text-2xl text-base "+color+" link-bar-"+code;
    let myImg = Icons[source];
    // add icon image
    return (
        <Link href={goto} target="_blank" rel="noreferrer" className="basis-1/2">
            <div className={myClass}>
                <div className="flex basis-1/6 h-full">
                    <Image src={myImg} width="880" height="800" className="basis-1/6" />
                    <div className="basis-5/6 invisible">...</div>
                </div>
                <div className="flex basis-3/4 h-full">
                    <div className="basis-1/4 invisible">...</div>
                    <p className="basis-3/4 text-2xl my-auto">{text}</p>
                </div>
                </div>
        </Link>
    );
};

export default LinkBar;
