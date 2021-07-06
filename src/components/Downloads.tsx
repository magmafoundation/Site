import { useEffect, useState } from 'react';
import { Download, getDownloads } from '../version.utils';


function Downloads(props: any) {

    const [version, setVersion] = useState('1.12.2');
    const [development, setDevelopment] = useState(false);
    const [downloads, setDownloads] = useState<Array<Download>>([]);


    useEffect(() => {
        getDownloads(version, development).then(downloads => {
            setDownloads(downloads);
        });
    }, [version, development]);


    function isCurrentVersion(v: string) {
        return v === version;
    }

    function onVersionTabClick(event: any) {
        setVersion(event.target.innerHTML);
    }

    function onDevelopmentClick(event: any) {
        setDevelopment(event.target.innerHTML === 'Development');
    }

    return (

        <section className='p-t330 p-b210 cta bg-cta ' data-color='#fe4c1c,#00c3ff,#0160e7' data-id='i1-1'>

            <div className='shape shape-top' data-negative='false'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'>
                    <path className='shape-fill'
                          d='M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z' />
                </svg>
            </div>

            <div className='container'>
                <div className='cta-content text-center'>
                    <h2 className='m-b20'>Downloads Here! {props.uwu}</h2>
                </div>
                <section>
                    <div className='container'>


                        <div style={{ marginBottom: '100px' }}>
                            <div className='ot-tabs' style={{ display: 'inline-block', float: 'left' }}>

                                <ul className='tabs-heading unstyle'>
                                    <li onClick={onVersionTabClick}
                                        className={`tab-link octf-btn ${isCurrentVersion('1.12.2') ? 'current' : ''}`}>1.12.2
                                    </li>
                                    <li onClick={onVersionTabClick}
                                        className={`tab-link octf-btn ${isCurrentVersion('1.16.5') ? 'current' : ''}`}>1.16.5
                                    </li>
                                </ul>
                            </div>


                            <div className='ot-tabs' style={{ display: 'inline-block', float: 'right' }}>
                                <ul className='tabs-heading unstyle'>
                                    <li onClick={onDevelopmentClick}
                                        className={`tab-link octf-btn ${!development ? 'current' : ''}`}>Stable
                                    </li>
                                    <li onClick={onDevelopmentClick}
                                        className={`tab-link octf-btn ${development ? 'current' : ''}`}>Development
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className='row'>
                            <div className='col-md-12 col-xs-12'>
                                <div className='icon-box-grid text-center'>
                                    {downloads.slice(0, 6).map(download => {
                                        return (
                                            <div key={download.tag} className='col-md-4 no-padding'>
                                                <div className='icon-box text'>
                                                    <div className='icon-main'>
                                                        <i className='fas fa-download' />
                                                    </div>
                                                    <div className='content-box'>
                                                        <h5>Magma {download.mcVersion}</h5>
                                                        {development &&
                                                        <h6 className='text-white'>
                                                            Dev build
                                                        </h6>
                                                        }
                                                        <p>Version: {download.tag}</p>
                                                        <p style={{
                                                            marginTop: -20,
                                                            paddingBottom: 20,
                                                        }}>Date: {download.published_at}</p>
                                                    </div>
                                                    <div className='action-box'>
                                                        <a href={download.URL}
                                                           className='octf-btn octf-btn-icon octf-btn-white'>Download<i
                                                            className='flaticon-right-arrow-1' /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}


export default Downloads;
