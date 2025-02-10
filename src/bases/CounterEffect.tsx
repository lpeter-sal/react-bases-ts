import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


const MAX_COUNT = 10;


export const CounterEffect = () => {

    const [counter, setCounter] = useState(0);

    const counterElement = useRef<HTMLHeadingElement>(null);


    const handleClick = () => {
        // setCounter(prev => (prev < MAX_COUNT ? prev + 1 : MAX_COUNT));
        setCounter(prev => Math.min( prev + 1, MAX_COUNT));
    }

    useEffect(() => {
       if( counter < 10 ) return ;
       console.log('%cLimited to 10', 'color: red; background-color: black; ');
       const tl = gsap.timeline();
       tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out'})
         .to( counterElement.current, { y: 0, duration: 0.2, ease: 'bounce.out'})
    }, [counter])
    
    


  return (
    <>
        <h1>CounterEffect: </h1>
        <h2 ref={ counterElement }>  { counter } </h2>

        <button onClick={ handleClick }>
            +1
        </button>
    </>
  )
}
