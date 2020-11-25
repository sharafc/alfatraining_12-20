import React, { ReactElement, useEffect, useState } from "react";

interface Props {
    startValue?: number;
}

export default function FunctionalCounter(props: Props): ReactElement {
    const [counter, setCounter] = useState<number>(props.startValue || 0);

    const incrementCounter = () => {
        setCounter((counter_) => counter_ + 1);
    };

    useEffect(() => {
        console.log("Effect function");
        const intervalId = window.setInterval(() => {
            setCounter((counter_) => counter_ + 1);
        }, 1000);
        return () => {
            console.log("Cleanup");
            window.clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        const defaultTitle = window.document.title;
        window.document.title = "Counter:" + counter;
        return () => {
            // Cleanup executed before executing the effect
            window.document.title = defaultTitle;
        }
    }, [counter])

    return (
        <>
            <p>Counter Value: {counter}</p>
            <button className="ui button icon" onClick={incrementCounter}>
                <i className="icon plus" />
            </button>
        </>
    );
}
