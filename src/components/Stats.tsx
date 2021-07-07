import { useEffect, useState } from 'react';
import { getStats, IStats } from '../stats.utils';
import StatsCounter from "./StatsCounter";

export function Stats() {
    const [stats, setStats] = useState<IStats>({
        closed_issues: 0,
        open_issues: 0,
        player_count: 0,
        server_count: 0,
    });

    useEffect(() => {
        getStats().then(stats => {
            setStats(stats);
        });

    }, []);


    return (
        <div>
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
                                                <StatsCounter target={stats.server_count} duration={1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 col-sm-6 col-xs-12 xs-m-b40 sm-m-b40'>
                                        <div className='ot-counter s2'>
                                            <h6>PLAYERS</h6>
                                            <div>
                                                <StatsCounter target={stats.player_count} duration={1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 col-sm-6 col-xs-12 xs-m-b40'>
                                        <div className='ot-counter s2'>
                                            <h6>Closed Issues</h6>
                                            <div>
                                                <StatsCounter target={stats.closed_issues} duration={1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3 col-sm-6 col-xs-12'>
                                        <div className='ot-counter s2'>
                                            <h6>Open Issues</h6>
                                            <div>
                                                <StatsCounter target={stats.open_issues} duration={1} />
                                            </div>
                                        </div>
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
