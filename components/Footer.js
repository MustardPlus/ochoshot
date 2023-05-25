
import Link from 'next/link';

const Footer = () => {
    return (
        <div id="footer" className="sm:text-2xl text-base">
            <Link href="mailto: contact@ochoshot.com"  className="text-base">contact@ochoshot.com</Link><br/>
            © 2023 romeo
            
        </div>
    );
};

export default Footer;