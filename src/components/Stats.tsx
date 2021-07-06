export function Stats() {
    return (
        <section className='p-b120 bg-counter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm col-xs-12'>
                        <h3 className='title-default m-b50 text-center'>Active Statistics</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-xs-12'>
                        <div className='shadow-primary p-t100 p-b100 m-b50 btn-rounder bg-cover text-center'
                             style={{ background: 'url("images/bg-counter-1.jpg") center center no-repeat' }}>
                            <div className='bg-overlay' />
                            <div className='row'>
                                <div className='col-md-3 col-sm-6 col-xs-12 sm-m-b40 xs-m-b40'>
                                    <div className='ot-counter s2'>
                                        <h6>SERVERS</h6>
                                        <div>
                                            <span className='num' data-time={2000} data-to={713}>713</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6 col-xs-12 xs-m-b40 sm-m-b40'>
                                    <div className='ot-counter s2'>
                                        <h6>PLAYERS</h6>
                                        <div>
                                            <span className='num' data-time={2000} data-to={634}>634</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6 col-xs-12 xs-m-b40'>
                                    <div className='ot-counter s2'>
                                        <h6>FIXED BUGS</h6>
                                        <div>
                                            <span className='num' data-time={2000} data-to={152}>152</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 col-sm-6 col-xs-12'>
                                    <div className='ot-counter s2'>
                                        <h6>ISSUES</h6>
                                        <div>
                                            <span className='num' data-time={2000} data-to={6}>6</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
