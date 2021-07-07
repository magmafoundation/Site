import { Link } from 'react-scroll';

export function Footer() {

    return (
        <footer id='site-footer' className='site-footer bg-banner-gradient footer-top-bottom'
                data-color='#ffffff, #00c3ff, #fe4c1c' data-id='i1'>
            <div className='footer-shape-top'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'>
                    <path className='footer-shape-fill'
                          d='M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z' />
                </svg>
            </div>
            <div className='container'>
                <div className='footer-logo text-center'>
                    <img src='images/footer.png' className='attachment-large size-large' alt='' />
                </div>
                <div className='footer-menu'>
                    <ul id='menu-footer-menu' className='menu'>
                        <li>
                            <Link to='/'><i className='fas fa-home' /> <a>Home</a></Link>
                        </li>
                        <li>
                            <Link smooth={true} duration={500} to='about'><i
                                className='fas fa-info' /> <a>About</a></Link>
                        </li>
                        <li>
                            <Link smooth={true} duration={500} to='partners'><i
                                className='fas fa-handshake' /> <a>Partners</a></Link>
                        </li>
                        <li>
                            <Link smooth={true} duration={500} to='downloads'><i
                                className='fas fa-download' /> <a>Downloads</a></Link>
                        </li>
                    </ul>
                </div>
                <p className='copyright text-center'>© 2018 - 2021 Magma Development</p>
                <p className='copyright text-center'>Registered in United Kingdom ID: #12428426</p>
            </div>
        </footer>

    );
}
