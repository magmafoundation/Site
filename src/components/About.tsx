export function About() {
    return (
        <div id="about">
            <section className='about-home bg-light'>
                <div className='container'>
                    <div className='text-center'>
                        <h1 className='about-text'>About Magma</h1>
                    </div>
                </div>
            </section>
            <section className='seo-about '>
                <div className='shape shape-bottom' data-negative='false'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'>
                        <path className='shape-fill'
                              d='M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z' />
                    </svg>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='top-up'>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
                                <div className='icon-box s3 text-center'>
                                    <div className='bg-s3' />
                                    <div className='bg-before'
                                         style={{ background: 'url("images/bg1-box.png") top left no-repeat #fff' }} />
                                    <div className='bg-after'
                                         style={{ background: 'url("images/bg2-box.png") bottom right no-repeat #fff' }} />
                                    <div className='icon-main'>
                                        <span className='flaticon-startup' />
                                    </div>
                                    <div className='content-box'>
                                        <h5>Fast &amp; Optimized</h5>
                                        <p>Paper patches for Performance Optimization and Stability.</p>
                                    </div>
                                    <div className='action-box'>
                                        <a href='https://github.com/magmafoundation/Magma' className='octf-btn octf-btn-icon octf-btn-white'>Learn More<i
                                            className='flaticon-right-arrow-1' /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 m-t50'>
                                <div className='icon-box s3 text-center'>
                                    <div className='bg-s3' />
                                    <div className='bg-before'
                                         style={{ background: 'url("images/bg1-box2.png") top left no-repeat #fff' }} />
                                    <div className='bg-after'
                                         style={{ background: 'url("images/bg2-box2.png") bottom right no-repeat #fff' }} />
                                    <div className='icon-main'>
                                        <span className='flaticon-system' />
                                    </div>
                                    <div className='content-box'>
                                        <h5>Easy to Use</h5>
                                        <p>Magma makes it easy to get up and running with a forge and spigot server with
                                            easy install</p>
                                    </div>
                                    <div className='action-box'>
                                        <a href='https://github.com/magmafoundation/Magma' className='octf-btn octf-btn-icon octf-btn-white'>Learn More<i
                                            className='flaticon-right-arrow-1' /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 xs-m-t50'>
                                <div className='icon-box s3 text-center'>
                                    <div className='bg-s3' />
                                    <div className='bg-before'
                                         style={{ background: 'url("images/bg1-box3.png") top right no-repeat #fff' }} />
                                    <div className='bg-after'
                                         style={{ background: 'url("images/bg2-box3.png") bottom left no-repeat #fff' }} />
                                    <div className='icon-main'>
                                        <span className='flaticon-internet' />
                                    </div>
                                    <div className='content-box'>
                                        <h5>Open Source</h5>
                                        <p>Magma is open source and free. Contributors are always welcome we will always
                                            be free.</p>
                                    </div>
                                    <div className='action-box'>
                                        <a href='https://github.com/magmafoundation/Magma' className='octf-btn octf-btn-icon octf-btn-white'>Learn More<i
                                            className='flaticon-right-arrow-1' /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 m-t50'>
                                <div className='icon-box s3 box-hover-gradient text-center'>
                                    <div className='bg-s3' />
                                    <div className='bg-before'
                                         style={{ background: 'url("images/bg1-box2.png") top left no-repeat #fff' }} />
                                    <div className='bg-after' />
                                    <div className='icon-main'>
                                        <span className='flaticon-report' />
                                    </div>
                                    <div className='content-box'>
                                        <h5>Active Development &amp; Support</h5>
                                        <p>At Magma we strive to having a great support team and an active development
                                            team</p>
                                    </div>
                                    <div className='action-box'>
                                        <a href='https://github.com/magmafoundation/Magma' className='octf-btn octf-btn-icon octf-btn-white'>Learn More<i
                                            className='flaticon-right-arrow-1' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
