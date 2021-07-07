import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                return setShow(true);
            }
            setShow(false);
        });
    }, []);

    return (
        <Link id='back-to-top' to='page'  smooth={true} duration={500}  className={show ? 'show': ''}><i className='flaticon-arrow-pointing-to-up'/></Link>
    );
}
