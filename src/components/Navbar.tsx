export function Navbar() {
    return (
        <header id="site-header" className="site-header header-style-3 header-overlay header-fullwidth sticky-header">
            <div className="header-topbar">
                <div className="octf-area-wrap">
                    <div className="container-fluid">
                        {/* social icons */}
                        <ul className="social-list">
                            <li>
                                <a href="#" target="_self"><i className="fab fa-discord"/></a>
                            </li>
                            <li>
                                <a href="#" target="_self"><i className="fab fa-twitter"/></a>
                            </li>
                            <li>
                                <a href="#" target="_self"><i className="fab fa-patreon"/></a>
                            </li>
                        </ul>
                        {/* social icons close */}
                        {/* contact info */}
                        <ul className="topbar-info clearfix">
                            <li>
                                <i className="flaticon-envelope"/> support@magmafoundation.org
                            </li>
                        </ul>
                        {/* contact info close */}
                    </div>
                </div>
            </div>
            {/* Main Header start */}
            <div className="octf-main-header">
                <div className="octf-area-wrap">
                    <div className="container-fluid octf-mainbar-container">
                        <div className="octf-mainbar">
                            <div className="octf-mainbar-row octf-row">
                                {/* logo start */}
                                <div className="octf-col">
                                    <div id="site-logo" className="site-logo">
                                        <a href="index.html">
                                            <img className="logo-static" src="images/magma-logo.png" alt="Magma"/>
                                            <img className="logo-scroll" src="images/magma-logo-dark.png" alt="Magma"/>
                                        </a>
                                    </div>
                                </div>
                                {/* logo start */}
                                {/* nav start */}
                                <nav id="site-navigation" className="main-navigation">
                                    <ul id="primary-menu" className="menu">
                                        <li className="current-menu-item current-menu-ancestor">
                                            <a href="index.html"><i className="fas fa-home"/> Home</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-info"/> About</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-handshake"/> Partners</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-server"/> Hosts</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-download"/> Downloads</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-code"/> API</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* #site-navigation */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header mobile */}
            <div className="header_mobile">
                <div className="container">
                    <div className="mlogo_wrapper clearfix">
                        {/* logo mobile start */}
                        <div className="mobile_logo">
                            <a href="index.html"><img src="images/magma-logo.png" alt="Onum"/></a>
                        </div>
                        {/* logo mobile end */}
                        <div id="mmenu_toggle">
                            <button/>
                        </div>
                    </div>
                    {/* nav mobile start */}
                    <div className="mmenu_wrapper">
                        <div className="mobile_nav">
                            <ul id="menu-main-menu" className="mobile_mainmenu">
                                <li className="current-menu-item current-menu-ancestor">
                                    <a href="index.html"><i className="fas fa-home"/> Home</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-info"/> About</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-handshake"/> Partners</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-server"/> Hosts</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-download"/> Downloads</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-code"/> API</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* nav mobile end */}
                </div>
            </div>
        </header>
    )
}
