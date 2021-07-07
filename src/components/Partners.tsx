import Image from 'next/image'
import aternos from '../../public/images/partners/aternos.svg'
import yourkit from '../../public/images/partners/yourkit.png'
import bisecthosting from '../../public/images/partners/bisecthosting.svg'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function Partners() {
    return (
        <section id='partners' className='p-b120'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="partners">
                            <h1 className="p-t130 text-center">Partners</h1>
                            <Carousel interval={1500} autoPlay={true} infiniteLoop={true} showArrows={false}
                                      showIndicators={false} showStatus={false} showThumbs={false}>
                                <div>
                                    <a href="https://aternos.org/:en/">
                                        <Image src={aternos} alt="" height={50}/>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://bisecthosting.com/magma">
                                        <Image src={bisecthosting} alt="" height={100}/>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.yourkit.com/">
                                        <Image src={yourkit} alt="" height={50}/>
                                    </a>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
