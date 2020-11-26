import { useState, useCallback } from "react";

export default function useCounter(
    startValue = 0
): { counter: number; incrementCounter: () => void } {
    const [counter, setCounter] = useState<number>(startValue || 0);

    const incrementCounter = useCallback((): void => {
        setCounter((counter_) => counter_ + 1);
    }, []);

    return { counter, incrementCounter };
}
