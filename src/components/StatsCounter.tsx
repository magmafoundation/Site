import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";

export interface StatsCounterProps {
    target: number,
    duration: number
}

const StatsCounter = (props: StatsCounterProps) => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div ref={ref}>
            <CountUp
                start={0}
                end={inView ? props.target : 0}
                duration={props.duration}
                separator=','
                useEasing={true}>
                {({countUpRef}) => {
                    return (
                        <div>
                            <span className='num' ref={countUpRef}/>
                            <span>+</span>
                        </div>
                    );
                }}
            </CountUp>
        </div>
    );
}

export default StatsCounter;
