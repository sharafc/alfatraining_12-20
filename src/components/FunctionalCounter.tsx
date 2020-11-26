import React, { ReactElement } from "react";
import useCounter from "../customhooks/useCounter";
import useDocumentTitle from "../customhooks/useDocumentTitle";
import useInterval from "../customhooks/useInterval";

interface Props {
    startValue?: number;
}

export default function FunctionalCounter(props: Props): ReactElement {
    const { counter, incrementCounter } = useCounter(props.startValue);
    useInterval(incrementCounter);
    useDocumentTitle("Counter:" + counter);

    return (
        <>
            <p>Counter Value: {counter}</p>
            <button className="ui button icon" onClick={incrementCounter}>
                <i className="icon plus" />
            </button>
        </>
    );
}
