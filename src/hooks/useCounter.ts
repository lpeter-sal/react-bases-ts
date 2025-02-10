import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';



export const useCounter = ( { maxCount = 10 } ) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimated = useRef<HTMLHeadingElement>(null);

    const tl = useRef(gsap.timeline());
    

    const handleClick = () => {
    // setCounter(prev => (prev < MAX_COUNT ? prev + 1 : MAX_COUNT));
        setCounter(prev => Math.min( prev + 1, maxCount));
    }

    useLayoutEffect(() => {

        if(!elementToAnimated.current) return ;

        tl.current.to(elementToAnimated.current, { y: -10, duration: 0.2, ease: 'ease.out'})
        .to( elementToAnimated.current, { y: 0, duration: 0.2, ease: 'bounce.out'})
        .pause();


    }, [])



    useEffect(() => {

       tl.current.play(0);
    }, [counter])


    return {
        counter,
        elementToAnimated,
        handleClick,
    }
}