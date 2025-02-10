import { useCounter } from "../hooks/useCounter"


export const CounterHook = () => {

    const { counter, elementToAnimated, handleClick} = useCounter({
      maxCount: 15
    });
    


  return (
    <>
        <h1>CounterHook: </h1>
        <h2 ref={ elementToAnimated }>  { counter } </h2>

        <button onClick={ handleClick }>
            +1
        </button>
    </>
  )
}
