import React, { ReactElement, useState } from 'react'

interface Props {
    startValue?: number;
}

export default function FunctionalCounter(props: Props): ReactElement {
    const [counter, setCounter] = useState<number>(props.startValue ||0);

    const incrementCounter = () => {
        setCounter(counter_ => counter_ + 1);
    }

    return (
    <>
        <p>Counter Value: {counter}</p>
        <button
            className="ui button icon"
            onClick={incrementCounter}>
            <i className="icon plus" />
        </button>
    </>
    )
}
