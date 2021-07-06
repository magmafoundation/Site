export function Header() {
    return (
        <section className='banner big-padding-top bg-banner-gradient particles-js'
                 data-color='#ffffff, #00c3ff, #fe4c1c' data-id='i1'>
            <div className='bg-overlay-1' />
            <div className='shape shape-bottom' data-negative='true'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'>
                    <path className='shape-fill'
                          d='M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z' />
                </svg>
            </div>
            <div className='banner-wrap'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h2 className='banner-stitle m-b55 xs-m-b40'>Enchant your Forge Server<br /><span
                                className='text-second'>Today</span></h2>
                            <h6 className='banner-title m-b0'>Magma is most powerful Forge server, providing you
                                with mods and Plugins using Spigot and Paper for Performance and Stability. </h6>
                            <div className='wpcf7'>
                                <div className='screen-reader-response' />
                                <button type='submit' className='octf-btn octf-btn-icon octf-btn-primary'>Start
                                    Now<i className='flaticon-right-arrow-1' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
